import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const posts = [
    {
      id: '1',
      title: 'AI Trends Shaping Business in 2024',
      excerpt: 'Discover the latest AI innovations transforming industries.',
      date: '2024-01-15',
      category: 'AI Solutions',
      author: 'RPNMore Team',
      readTime: '5 min read',
      featured: true
    },
    {
      id: '2',
      title: 'Crypto Market Analysis: Q1 2024',
      excerpt: 'In-depth analysis of cryptocurrency market trends.',
      date: '2024-01-10',
      category: 'Crypto Advisory',
      author: 'RPNMore Team',
      readTime: '8 min read',
      featured: false
    }
  ];

  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const _post = await request.json();
  
  return NextResponse.json({ 
    success: true, 
    message: 'Blog post created successfully',
    id: Date.now().toString()
  });
}