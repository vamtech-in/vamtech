import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Helper to get filepath safely
function getLeadsFilePath() {
  return path.join(process.cwd(), 'src', 'data', 'leads.json');
}

// Helper to read leads from storage
function readLeads() {
  try {
    const filePath = getLeadsFilePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('[Vamtech Contact Intake] Error reading leads file:', err);
  }
  return [];
}

// Helper to save leads to storage
function saveLeads(leads: any[]) {
  try {
    const filePath = getLeadsFilePath();
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');
  } catch (err) {
    console.error('[Vamtech Contact Intake] Error writing leads file:', err);
  }
}

function isAuthorizedAdmin(request: Request) {
  const adminKey = (request.headers.get('x-admin-key') || '').trim();
  const expectedKey = (process.env.ADMIN_PASSWORD || 'vamtech2026').trim();
  return adminKey.toLowerCase() === expectedKey.toLowerCase();
}

// GET: Retrieve all form submissions (Admin Protected)
export async function GET(request: Request) {
  if (!isAuthorizedAdmin(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized access. Valid Admin Passcode required.' }, { status: 401 });
  }
  const leads = readLeads();
  return NextResponse.json({ success: true, count: leads.length, leads }, { status: 200 });
}

// POST: Save a new form submission
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, role, phone, serviceInterest, budgetRange, timeline, message } = body;

    if (!name || !email || !serviceInterest) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required intake fields: Name, Email, and Service Interest are mandatory.' 
        },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a valid email address.' 
        },
        { status: 400 }
      );
    }

    const leadRecord = {
      id: `LEAD-${Date.now().toString().slice(-6)}`,
      receivedAt: new Date().toISOString(),
      name,
      email,
      company: company || 'Confidential / Individual',
      phone: phone || 'Not provided',
      role: role || 'Engineering Lead',
      serviceInterest,
      budgetRange: budgetRange || 'Standard Tier',
      timeline: timeline || 'Immediate',
      message: message || 'No custom notes provided',
      status: 'NEW'
    };

    console.log('[Vamtech Contact Intake] New Lead Received:', JSON.stringify(leadRecord, null, 2));

    // Save lead to local JSON storage
    const currentLeads = readLeads();
    const updatedLeads = [leadRecord, ...currentLeads];
    let emailSent = false;

    // Formspree Integration (Server-side Private FORMSPREE_URL)
    const formspreeUrl = process.env.FORMSPREE_URL || process.env.NEXT_PUBLIC_FORMSPREE_URL;
    if (formspreeUrl) {
      try {
        const formspreeRes = await fetch(formspreeUrl, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
          },
          body: JSON.stringify({
            name,
            email,
            company,
            role,
            serviceInterest,
            budgetRange,
            timeline,
            message,
            _subject: `[Vamtech Lead ${leadRecord.id}] ${name} (${company || 'Individual'})`,
          }),
        });

        if (formspreeRes.ok) {
          emailSent = true;
          console.log('[Vamtech Contact Intake] Formspree email sent securely via server proxy.');
        } else {
          console.error('[Vamtech Contact Intake] Formspree server error:', await formspreeRes.text());
        }
      } catch (formspreeErr) {
        console.error('[Vamtech Contact Intake] Formspree proxy exception:', formspreeErr);
      }
    }

    // Optional Resend API Email Integration
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.CONTACT_EMAIL || 'contact@vamtech.io';

    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.SENDER_EMAIL || 'Vamtech Intake <onboarding@resend.dev>',
            to: [recipientEmail],
            reply_to: email,
            subject: `[Vamtech Lead] ${name} from ${leadRecord.company} (${serviceInterest})`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #0066FF; margin-top: 0;">🚀 New Project Intake Inquiry</h2>
                <p><strong>Reference ID:</strong> ${leadRecord.id}</p>
                <hr style="border: 0; border-top: 1px solid #eee;" />
                <p><strong>Client Name:</strong> ${name}</p>
                <p><strong>Client Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Company / Role:</strong> ${leadRecord.company} (${leadRecord.role})</p>
                <p><strong>Service Interest:</strong> ${serviceInterest}</p>
                <p><strong>Budget Tier:</strong> ${budgetRange}</p>
                <p><strong>Target Timeline:</strong> ${timeline}</p>
                <p><strong>Architecture Brief / Message:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 12px; border-left: 4px solid #0066FF; margin: 0;">
                  ${message}
                </blockquote>
                <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
                <p style="font-size: 12px; color: #888;">Dispatched automatically by Vamtech Web Portal.</p>
              </div>
            `,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
          console.log(`[Vamtech Contact Intake] Email sent to ${recipientEmail} via Resend.`);
        }
      } catch (err) {
        console.error('[Vamtech Contact Intake] Resend fetch exception:', err);
      }
    }

    // Optional Webhook Integration (Slack / Discord)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **New Vamtech Scope Lead [${leadRecord.id}]**\n**Name:** ${name} (${email})\n**Company:** ${leadRecord.company}\n**Service:** ${serviceInterest}\n**Budget:** ${budgetRange}\n**Message:** ${message}`,
          }),
        });
        emailSent = true;
      } catch (webhookErr) {
        console.error('[Vamtech Contact Intake] Webhook dispatch warning:', webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Architecture scope received successfully and saved to inbox.',
        leadId: leadRecord.id,
        timestamp: leadRecord.receivedAt,
        emailDelivered: emailSent
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[Vamtech Contact Intake Error]:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An internal server error occurred while processing your request.' 
      },
      { status: 500 }
    );
  }
}

// DELETE: Delete a specific lead or clear submissions (Admin Protected)
export async function DELETE(request: Request) {
  if (!isAuthorizedAdmin(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized access. Valid Admin Passcode required.' }, { status: 401 });
  }
  try {
    const { searchParams } = new URL(request.url);
    const leadId = searchParams.get('id');

    if (leadId) {
      const currentLeads = readLeads();
      const filteredLeads = currentLeads.filter((l: any) => l.id !== leadId);
      saveLeads(filteredLeads);
      return NextResponse.json({ success: true, message: `Lead ${leadId} deleted.` });
    }

    saveLeads([]);
    return NextResponse.json({ success: true, message: 'All leads cleared.' });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}



