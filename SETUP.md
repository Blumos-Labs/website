# Blumos Labs Website - Setup Guide

## Quick Start

Your Blumos Labs website is ready to run! Follow these simple steps:

### 1. Start Development Server

```bash
cd blumos-website
npm run dev
```

The website will be available at: **http://localhost:3000**

### 2. View Your Website

Open your browser and navigate to `http://localhost:3000` to see your website in action.

## What's Included

✅ **Navigation Bar** - Sticky header with mobile menu
✅ **Hero Section** - Eye-catching hero with brand colors and CTAs
✅ **About Section** - Company information with stats and values
✅ **Solutions Section** - 6 solution categories with detailed features
✅ **Products Section** - Featured products showcase
✅ **Contact Form** - Fully functional contact form with validation
✅ **Footer** - Comprehensive footer with newsletter signup

## Brand Colors Applied

- **Primary Blue Light**: #2D7AFD
- **Primary Blue Dark**: #004AAD
- **Black**: #000000
- **White**: #FFFFFF

## Font

**Poppins** font is loaded from Google Fonts with weights: 300, 400, 500, 600, 700

## Next Steps

### Add Your Logo and Images

1. Place your logo images in `public/images/`
2. Update the Navigation component to use your logo:

```tsx
// In components/Navigation.tsx
import Image from 'next/image';

<Image
  src="/images/blumos-logo.png"
  alt="Blumos Labs"
  width={150}
  height={50}
/>
```

### Customize Content

All content can be easily customized by editing the component files:

- **Navigation**: `components/Navigation.tsx`
- **Hero**: `components/Hero.tsx`
- **About**: `components/About.tsx`
- **Solutions**: `components/Solutions.tsx`
- **Products**: `components/Products.tsx`
- **Contact**: `components/Contact.tsx`
- **Footer**: `components/Footer.tsx`

### Update Contact Information

Edit the contact details in `components/Contact.tsx`:

```tsx
const contactInfo = [
  {
    title: 'Email',
    detail: 'your-email@blumoslabs.com',
    link: 'mailto:your-email@blumoslabs.com',
  },
  // ... update phone and location
];
```

### Connect Contact Form

The contact form currently shows a success message. To connect it to your backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the form submission handler in `components/Contact.tsx`

Example API route:

```tsx
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Send email or save to database
  // ... your logic here

  return NextResponse.json({ success: true });
}
```

## Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (it will auto-detect Next.js settings)

## Deploy to Other Platforms

- **Netlify**: Connect your Git repo
- **AWS Amplify**: Use the Next.js SSR template
- **DigitalOcean**: Use App Platform with Next.js preset

## Responsive Breakpoints

The website is optimized for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Support

For questions or issues:
- Check the main [README.md](README.md)
- Review Next.js documentation: https://nextjs.org/docs
- Review Tailwind CSS docs: https://tailwindcss.com/docs

---

**Built with ❤️ for Blumos Labs**
