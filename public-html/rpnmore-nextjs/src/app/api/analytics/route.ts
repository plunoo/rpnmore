import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'overview';

  const analytics = {
    overview: {
      totalVisitors: 1250,
      affiliateClicks: 89,
      conversionRate: '7.1%',
      revenue: '$2,340'
    },
    courses: {
      topPerforming: 'Financial Modeling',
      totalClicks: 156,
      conversions: 23,
      revenue: '$1,890'
    },
    traffic: {
      sources: [
        { name: 'Direct', visitors: 450, percentage: 36 },
        { name: 'Google', visitors: 380, percentage: 30.4 },
        { name: 'Social Media', visitors: 280, percentage: 22.4 },
        { name: 'Referrals', visitors: 140, percentage: 11.2 }
      ]
    }
  };

  return NextResponse.json(analytics[type as keyof typeof analytics] || analytics.overview);
}

export async function POST(request: NextRequest) {
  const eventData = await request.json();
  
  console.log('Analytics event:', eventData);
  
  return NextResponse.json({ 
    success: true, 
    message: 'Analytics event recorded' 
  });
}