import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    const subscriptionData = {
      id: Date.now().toString(),
      email,
      timestamp: new Date().toISOString(),
      status: 'subscribed',
      source: 'website'
    };

    console.log('Newsletter subscription:', subscriptionData);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error) {
    console.error('Failed to process newsletter subscription:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}