import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const courses = [
    {
      id: 'bs-fundamentals',
      title: 'Business Strategy Fundamentals',
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Learn the core principles of business strategy and strategic planning.',
      price: '$89',
      originalPrice: '$199',
      provider: 'Coursera',
      rating: 4.8,
      students: '12,450',
      affiliateLink: 'https://www.coursera.org/learn/business-strategy?utm_source=rpnmore&utm_medium=affiliate',
      type: 'affiliate',
      discount: '55% OFF'
    },
    {
      id: 'financial-modeling',
      title: 'Advanced Financial Modeling',
      duration: '12 weeks',
      level: 'Advanced',
      description: 'Master complex financial modeling techniques and analysis.',
      price: '$149',
      originalPrice: '$299',
      provider: 'Udemy',
      rating: 4.9,
      students: '8,230',
      affiliateLink: 'https://www.udemy.com/course/financial-modeling/?utm_source=rpnmore&utm_medium=affiliate',
      type: 'affiliate',
      discount: '50% OFF'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Mastery',
      duration: '10 weeks',
      level: 'Intermediate',
      description: 'Comprehensive digital marketing strategies and implementation.',
      price: '$79',
      originalPrice: '$179',
      provider: 'LinkedIn Learning',
      rating: 4.7,
      students: '15,680',
      affiliateLink: 'https://www.linkedin.com/learning/digital-marketing?utm_source=rpnmore&utm_medium=affiliate',
      type: 'affiliate',
      discount: '56% OFF'
    },
    {
      id: 'leadership',
      title: 'Leadership & Management',
      duration: '6 weeks',
      level: 'All Levels',
      description: 'Develop essential leadership skills for modern business.',
      price: '$99',
      originalPrice: '$199',
      provider: 'MasterClass',
      rating: 4.6,
      students: '9,840',
      affiliateLink: 'https://www.masterclass.com/classes/leadership?utm_source=rpnmore&utm_medium=affiliate',
      type: 'affiliate',
      discount: '50% OFF'
    }
  ];

  return NextResponse.json(courses);
}

export async function POST(request: NextRequest) {
  const _course = await request.json();
  
  return NextResponse.json({ 
    success: true, 
    message: 'Course added successfully',
    id: Date.now().toString()
  });
}