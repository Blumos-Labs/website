'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const productLinks = [
  { href: '/products/bms-software', label: 'BMS Software', text: 'Blumos Battery Platform app' },
  { href: '/products/bms-iot', label: 'BMS IoT', text: 'Blu-400 telematics device' },
];

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const active = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Blumos Labs home" onClick={() => setIsOpen(false)}>
            <Image src="/icon.png" alt="" width={36} height={36} className="h-8 w-auto" priority />
            <Image src="/logo.png" alt="Blumos" width={120} height={26} className="h-5 sm:h-6 w-auto" priority />
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Labs</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) =>
              l.href === '/products' ? (
                <div key={l.href} className="group relative">
                  <Link
                    href={l.href}
                    className={`inline-flex items-center gap-1 py-2 text-sm font-medium transition-colors ${
                      active(l.href) ? 'text-[#1a68ee]' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {l.label}
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-72 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
                      {productLinks.map((p) => (
                        <Link key={p.href} href={p.href} className="block rounded-xl px-4 py-3 transition-colors hover:bg-blue-50">
                          <span className="block text-sm font-semibold text-gray-900">{p.label}</span>
                          <span className="block text-xs text-gray-500">{p.text}</span>
                        </Link>
                      ))}
                      <Link href="/products" className="mt-1 block rounded-xl border-t border-gray-100 px-4 py-2.5 text-xs font-semibold text-[#004AAD] hover:bg-blue-50">
                        All products
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    active(l.href) ? 'text-[#1a68ee]' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {l.label}
                </Link>
              ),
            )}
            <Link href="/contact" className="rounded-full bg-[#1a68ee] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#004AAD] transition-colors">
              Talk to us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[28rem] pb-4' : 'max-h-0'}`}>
          <div className="space-y-1">
            {navLinks.map((l) => (
              <div key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-lg font-medium ${active(l.href) ? 'bg-blue-50 text-[#1a68ee]' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {l.label}
                </Link>
                {l.href === '/products' &&
                  productLinks.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg py-2 pl-8 pr-3 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#1a68ee]"
                    >
                      {p.label}
                    </Link>
                  ))}
              </div>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block mt-2 text-center rounded-full bg-[#1a68ee] px-5 py-3 font-semibold text-white">
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
