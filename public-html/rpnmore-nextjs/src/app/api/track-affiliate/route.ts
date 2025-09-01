import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { courseId, provider, timestamp, source } = await request.json();
    
    const trackingData = {
      courseId,
      provider,
      timestamp,
      source,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      referer: request.headers.get('referer')
    };

    console.log('Affiliate click tracked:', trackingData);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Affiliate click tracked successfully' 
    });
  } catch (error) {
    console.error('Failed to track affiliate click:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to track click' },
      { status: 500 }
    );
  }
}