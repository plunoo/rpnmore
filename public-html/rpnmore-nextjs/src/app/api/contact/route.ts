import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, service, message, phone } = await request.json();
    
    const contactData = {
      id: Date.now().toString(),
      name,
      email,
      service,
      message,
      phone,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    console.log('Contact form submission:', contactData);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: contactData.id
    });
  } catch (error) {
    console.error('Failed to process contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}