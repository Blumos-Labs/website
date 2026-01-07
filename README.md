# Blumos Labs Website

A modern, fully responsive Next.js website for Blumos Labs - a hardware and software solutions company specializing in GPS technology, EV battery management systems, and custom solutions.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Brand Identity**: Implements Blumos Labs brand colors and Poppins font
- **Interactive Sections**:
  - Hero section with animated background
  - About section with company stats and values
  - Solutions showcase with 6+ solution categories
  - Products section featuring key offerings
  - Contact form with validation
  - Responsive navigation with mobile menu
  - Comprehensive footer with newsletter signup

## Color Palette

- Primary Blue Light: `#2D7AFD`
- Primary Blue Dark: `#004AAD`
- Black: `#000000`
- White: `#FFFFFF`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Poppins (Google Fonts)

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
blumos-website/
├── app/
│   ├── layout.tsx          # Root layout with Poppins font
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and brand colors
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Solutions.tsx      # Solutions showcase
│   ├── Products.tsx       # Products section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
└── public/
    └── images/            # Image assets
```

## Customization

### Update Content

Edit the component files in the `components/` directory to update:
- Navigation links
- Hero section content
- Solutions and products
- Contact information
- Footer links

### Modify Colors

Update brand colors in `app/globals.css`:

```css
:root {
  --primary-blue-light: #2D7AFD;
  --primary-blue-dark: #004AAD;
}
```

### Add Images

Place your images in the `public/images/` directory and reference them using:

```tsx
import Image from 'next/image';
<Image src="/images/your-image.png" alt="Description" />
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud
- DigitalOcean

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

© 2026 Blumos Labs. All rights reserved.
