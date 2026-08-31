import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Helper to get filepath safely
function getLeadsFilePath() {
  return path.join(process.cwd(), 'src', 'data', 'leads.json');
}

// In-memory cache fallback for serverless environments where local disk is read-only
let memoryLeads: any[] = [];

// Helper to read leads from storage
function readLeads() {
  try {
    const filePath = getLeadsFilePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    // Expected in serverless read-only environments
  }
  return memoryLeads;
}

// Helper to save leads to storage
function saveLeads(leads: any[]) {
  memoryLeads = leads;
  try {
    const filePath = getLeadsFilePath();
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[Vamtech Contact Intake] Local disk write bypassed (serverless read-only disk detected). Persisted in memory.');
  }
}

// Basic in-memory rate limiting (10 submissions per minute per IP)
const ipTracker = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = ipTracker.get(ip);
  if (!record || now > record.resetAt) {
    ipTracker.set(ip, { count: 1, resetAt: now + 60 * 1000 });
    return false;
  }
  if (record.count >= 10) {
    return true;
  }
  record.count += 1;
  return false;
}

function isAuthorizedAdmin(request: Request) {
  const adminKey = (request.headers.get('x-admin-key') || '').trim();
  const expectedKey = (process.env.ADMIN_PASSWORD || 'Vamtech@Admin#2026').trim();
  if (!adminKey || !expectedKey) return false;
  return adminKey === expectedKey;
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
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (checkRateLimit(clientIp)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please wait a minute before submitting again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, role, phone, serviceInterest, budgetRange, timeline, message } = body;

    // Input sanitization & limits
    const cleanName = String(name || '').trim().slice(0, 100);
    const cleanEmail = String(email || '').trim().toLowerCase().slice(0, 150);
    const cleanCompany = String(company || '').trim().slice(0, 150);
    const cleanRole = String(role || '').trim().slice(0, 100);
    const cleanPhone = String(phone || '').trim().slice(0, 50);
    const cleanService = String(serviceInterest || 'Custom Enterprise Software').trim().slice(0, 150);
    const cleanBudget = String(budgetRange || 'Standard Tier').trim().slice(0, 100);
    const cleanTimeline = String(timeline || 'Immediate').trim().slice(0, 100);
    const cleanMessage = String(message || '').trim().slice(0, 5000);

    if (!cleanName || !cleanEmail || !cleanService) {
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
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a valid email address.' 
        },
        { status: 400 }
      );
    }

    let emailSent = false;
    const deliveryLogs: string[] = [];

    const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.CONTACT_EMAIL || 'contactvamtech@gmail.com';

    // 1. Nodemailer / Direct SMTP Integration (Gmail / Custom SMTP)
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: `"${cleanName} via Vamtech" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: cleanEmail,
          subject: `[Vamtech Lead] ${cleanName} (${cleanCompany || 'Individual'}) - ${cleanService}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h2 style="color: #0055ff; margin-top: 0;">🚀 New Project Intake Inquiry</h2>
              <hr style="border: 0; border-top: 1px solid #eee;" />
              <p><strong>Client Name:</strong> ${cleanName}</p>
              <p><strong>Client Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
              <p><strong>Phone Number:</strong> ${cleanPhone || 'Not provided'}</p>
              <p><strong>Company / Role:</strong> ${cleanCompany || 'Individual'} (${cleanRole || 'Lead'})</p>
              <p><strong>Service Interest:</strong> ${cleanService}</p>
              <p><strong>Budget Tier:</strong> ${cleanBudget}</p>
              <p><strong>Target Timeline:</strong> ${cleanTimeline}</p>
              <p><strong>Architecture Brief / Message:</strong></p>
              <blockquote style="background: #f9f9f9; padding: 12px; border-left: 4px solid #0055ff; margin: 0;">
                ${cleanMessage}
              </blockquote>
              <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
              <p style="font-size: 12px; color: #888;">Dispatched automatically by Vamtech Web Portal.</p>
            </div>
          `,
        });
        emailSent = true;
        deliveryLogs.push(`Nodemailer SMTP: Sent email directly to ${recipientEmail}`);
        console.log(`[Vamtech Contact Intake] SMTP Email sent to ${recipientEmail}`);
      } catch (smtpErr: any) {
        deliveryLogs.push(`Nodemailer SMTP Error: ${smtpErr.message}`);
        console.error('[Vamtech Contact Intake] SMTP error:', smtpErr);
      }
    }

    // 2. Resend API Email Integration
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const senderEmail = process.env.SENDER_EMAIL || 'Vamtech Intake <onboarding@resend.dev>';
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: senderEmail,
            to: [recipientEmail],
            reply_to: cleanEmail,
            subject: `[Vamtech Lead] ${cleanName} from ${cleanCompany || 'Individual'} (${cleanService})`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #0055ff; margin-top: 0;">🚀 New Project Intake Inquiry</h2>
                <hr style="border: 0; border-top: 1px solid #eee;" />
                <p><strong>Client Name:</strong> ${cleanName}</p>
                <p><strong>Client Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
                <p><strong>Phone Number:</strong> ${cleanPhone || 'Not provided'}</p>
                <p><strong>Company / Role:</strong> ${cleanCompany || 'Individual'} (${cleanRole || 'Lead'})</p>
                <p><strong>Service Interest:</strong> ${cleanService}</p>
                <p><strong>Budget Tier:</strong> ${cleanBudget}</p>
                <p><strong>Target Timeline:</strong> ${cleanTimeline}</p>
                <p><strong>Architecture Brief / Message:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 12px; border-left: 4px solid #0055ff; margin: 0;">
                  ${cleanMessage}
                </blockquote>
                <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
                <p style="font-size: 12px; color: #888;">Dispatched automatically by Vamtech Web Portal.</p>
              </div>
            `,
          }),
        });

        const resendJson: any = await resendRes.json().catch(() => ({}));
        if (resendRes.ok) {
          emailSent = true;
          deliveryLogs.push(`Resend API: Sent email to ${recipientEmail}`);
          console.log(`[Vamtech Contact Intake] Email sent to ${recipientEmail} via Resend.`);
        } else {
          const resendErrText = resendJson.message || JSON.stringify(resendJson);
          deliveryLogs.push(`Resend API Error (HTTP ${resendRes.status}): ${resendErrText}`);
          console.error(`[Vamtech Contact Intake] Resend API Error (${resendRes.status}):`, resendErrText);
        }
      } catch (err: any) {
        deliveryLogs.push(`Resend Exception: ${err.message}`);
        console.error('[Vamtech Contact Intake] Resend fetch exception:', err);
      }
    }

    // 3. Formspree Integration (Server-side Private FORMSPREE_URL)
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
            name: cleanName,
            email: cleanEmail,
            phone: cleanPhone,
            company: cleanCompany,
            role: cleanRole,
            serviceInterest: cleanService,
            budgetRange: cleanBudget,
            timeline: cleanTimeline,
            message: cleanMessage,
            _subject: `[Vamtech Lead] ${cleanName} (${cleanCompany || 'Individual'})`,
          }),
        });

        if (formspreeRes.ok) {
          emailSent = true;
          deliveryLogs.push(`Formspree: Posted payload to ${formspreeUrl}`);
          console.log('[Vamtech Contact Intake] Formspree email sent securely via server proxy.');
        } else {
          const formspreeErrText = await formspreeRes.text();
          deliveryLogs.push(`Formspree Error (HTTP ${formspreeRes.status}): ${formspreeErrText}`);
          console.error('[Vamtech Contact Intake] Formspree server error:', formspreeErrText);
        }
      } catch (formspreeErr: any) {
        deliveryLogs.push(`Formspree Proxy Exception: ${formspreeErr.message}`);
        console.error('[Vamtech Contact Intake] Formspree proxy exception:', formspreeErr);
      }
    }

    // 4. Optional Webhook Integration (Slack / Discord)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **New Vamtech Scope Lead**\n**Name:** ${cleanName} (${cleanEmail})\n**Phone:** ${cleanPhone}\n**Company:** ${cleanCompany || 'Individual'}\n**Service:** ${cleanService}\n**Budget:** ${cleanBudget}\n**Message:** ${cleanMessage}`,
          }),
        });
        emailSent = true;
        deliveryLogs.push(`Webhook: Notification posted to Slack/Discord webhook.`);
      } catch (webhookErr: any) {
        deliveryLogs.push(`Webhook Exception: ${webhookErr.message}`);
        console.error('[Vamtech Contact Intake] Webhook dispatch warning:', webhookErr);
      }
    }

    const leadRecord = {
      id: `LEAD-${Date.now().toString().slice(-6)}`,
      receivedAt: new Date().toISOString(),
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany || 'Confidential / Individual',
      phone: cleanPhone || 'Not provided',
      role: cleanRole || 'Engineering Lead',
      serviceInterest: cleanService,
      budgetRange: cleanBudget,
      timeline: cleanTimeline,
      message: cleanMessage || 'No custom notes provided',
      status: 'NEW',
      emailDelivered: emailSent,
      deliveryLogs: deliveryLogs
    };

    console.log('[Vamtech Contact Intake] New Lead Received:', JSON.stringify(leadRecord, null, 2));

    // Save lead to storage
    const currentLeads = readLeads();
    const updatedLeads = [leadRecord, ...currentLeads];
    saveLeads(updatedLeads);

    return NextResponse.json(
      {
        success: true,
        message: 'Architecture scope received successfully and saved to inbox.',
        leadId: leadRecord.id,
        timestamp: leadRecord.receivedAt,
        emailDelivered: emailSent,
        deliveryLogs: deliveryLogs
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




