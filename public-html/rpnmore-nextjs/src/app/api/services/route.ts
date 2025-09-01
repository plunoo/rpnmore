import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const services = [
    {
      id: 'business-consulting',
      title: 'Business Consulting',
      description: 'Strategic guidance for business growth and optimization',
      features: ['Strategic Planning', 'Process Optimization', 'Market Analysis', 'Growth Strategies'],
      pricing: 'Custom Quote',
      duration: 'Project-based'
    },
    {
      id: 'crypto-advisory',
      title: 'Crypto Advisory',
      description: 'Expert cryptocurrency investment and portfolio management',
      features: ['Portfolio Management', 'Risk Assessment', 'Market Analysis', 'Investment Strategy'],
      pricing: 'From $500/month',
      duration: 'Ongoing'
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Custom AI implementation and automation solutions',
      features: ['AI Integration', 'Process Automation', 'Data Analytics', 'Predictive Modeling'],
      pricing: 'Custom Quote',
      duration: '3-6 months'
    }
  ];

  return NextResponse.json(services);
}

export async function POST(request: NextRequest) {
  const serviceInquiry = await request.json();
  
  return NextResponse.json({ 
    success: true, 
    message: 'Service inquiry submitted successfully',
    id: Date.now().toString()
  });
}