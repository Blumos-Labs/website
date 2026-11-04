# Blumos Labs website

Marketing site for Blumos Labs Private Limited: BMS software (Blumos Battery Platform) and BMS IoT (Blu-400).
Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

- `app/(site)/`: all pages (home, products, BMS app pages, about, contact, legal). `app/(site)/layout.tsx` adds the nav and footer.
- `lib/content.ts`: product, feature and spec content. Add new products to `products` and they appear on the Products and Home pages.
- `lib/site.ts`: site URL, company details and the supported BMS brands (one `/bms-app/<brand>` page each).
- `components/`: shared UI. `Faq` renders a visible FAQ plus FAQPage structured data; `JsonLd` renders schema.org data.
- `public/`: logos, client logos (`clients/`), app screenshots (`screens/`), product images (`products/`), `llms.txt`.

## Before going live

- Set `NEXT_PUBLIC_SITE_URL` to the real domain (default `https://www.blumoslabs.com`). It drives canonical URLs, the sitemap and structured data.
- The contact form opens the visitor's email app (`mailto:`). Replace it with a server action or an email service for a real inbox.
- Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Have the Privacy Policy and Terms reviewed by a lawyer.
