# RPNMore Next.js Website

A high-performance business website built with Next.js, TypeScript, and Tailwind CSS, optimized for SEO and fast deployment on Dokploy.

## Features

- ⚡ **Next.js 15** - Latest features and performance improvements
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **SSG Optimized** - Static Site Generation for best performance
- 🔍 **SEO Ready** - Meta tags, OpenGraph, and structured data
- 🐳 **Docker Ready** - Optimized multi-stage Dockerfile
- 📊 **Performance Optimized** - Image optimization, CSS/JS minification

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server (standalone mode)
node .next/standalone/server.js
```

## Docker Deployment

```bash
# Build Docker image
docker build -t rpnmore-nextjs .

# Run container
docker run -p 3000:3000 rpnmore-nextjs
```

## Dokploy Deployment

1. Push your code to a Git repository
2. In Dokploy, create a new application
3. Connect your Git repository
4. Dokploy will automatically detect the `dokploy.json` configuration
5. Deploy with one click!

## Performance Features

- **Static Generation**: All pages are pre-rendered at build time
- **Image Optimization**: Next.js automatic image optimization
- **CSS Optimization**: Tailwind CSS purging and minification
- **Bundle Optimization**: Tree shaking and code splitting
- **Compression**: Gzip compression enabled

## SEO Optimization

- Meta tags for all pages
- OpenGraph for social sharing
- Structured data ready
- Semantic HTML
- Performance-optimized loading
- Mobile-friendly responsive design

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Docker + Dokploy
