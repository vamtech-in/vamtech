import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, role, phone, serviceInterest, budgetRange, timeline, message } = body;

    if (!name || !email || !serviceInterest) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required intake fields: name, email, and service interest are mandatory.' 
        },
        { status: 400 }
      );
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a valid enterprise email address.' 
        },
        { status: 400 }
      );
    }

    const leadRecord = {
      id: `LEAD-${Date.now()}`,
      receivedAt: new Date().toISOString(),
      name,
      email,
      company: company || 'Confidential',
      phone: phone || 'Not provided',
      role: role || 'Engineering Lead',
      serviceInterest,
      budgetRange: budgetRange || 'Standard Tier',
      timeline: timeline || 'Immediate',
      message: message || 'No custom notes provided',
      status: 'INQUIRY_RECEIVED'
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Architecture scope received. Principal architect assigned.',
        leadId: leadRecord.id,
        timestamp: leadRecord.receivedAt
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'An internal server error occurred while processing the intake request.' 
      },
      { status: 500 }
    );
  }
}
