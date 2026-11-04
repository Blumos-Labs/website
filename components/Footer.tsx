import Link from 'next/link';
import Image from 'next/image';
import { EMAIL, PHONE, PHONE_HREF, COMPANY } from '@/lib/content';
import { SocialLinks, StoreLinks } from './SocialLinks';
import { IconMail, IconPhone } from './Icons';

const columns = [
  {
    title: 'Products',
    links: [
      { label: 'All products', href: '/products' },
      { label: 'BMS Software', href: '/products/bms-software' },
      { label: 'BMS IoT', href: '/products/bms-iot' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'What is a BMS app?', href: '/blog/what-is-a-bms-app' },
      { label: 'JBD vs JK vs Daly BMS', href: '/blog/jbd-vs-jk-vs-daly-bms' },
      { label: 'BMS IoT explained', href: '/blog/bms-iot-ev-battery-monitoring' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-50">
      {/* Decorative MOSFET mark: tilted, faint, bleeding off the bottom-right corner */}
      <Image
        src="/icon.png"
        alt=""
        width={491}
        height={508}
        aria-hidden
        sizes="(min-width: 1024px) 336px, 256px"
        className="pointer-events-none absolute -bottom-[20%] -right-[3%] h-auto w-52 rotate-[-14deg] select-none opacity-[0.09] sm:w-64 lg:w-[21rem]"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-[var(--s2)] md:grid-cols-[1.618fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Blumos Labs home">
              <Image src="/icon.png" alt="" width={36} height={36} className="h-8 w-auto" />
              <Image src="/logo.png" alt="Blumos" width={120} height={26} className="h-5 w-auto" />
            </Link>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2.5 text-gray-700 transition-colors hover:text-[#1a68ee]">
                  <IconMail className="h-4 w-4 flex-shrink-0 text-[#1a68ee]" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 text-gray-700 transition-colors hover:text-[#1a68ee]">
                  <IconPhone className="h-4 w-4 flex-shrink-0 text-[#1a68ee]" />
                  {PHONE}
                </a>
              </li>
            </ul>
            <div className="mt-[var(--s1)] flex flex-wrap gap-3">
              <SocialLinks />
              <StoreLinks />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-gray-600 transition-colors hover:text-[#1a68ee]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} {COMPANY}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
