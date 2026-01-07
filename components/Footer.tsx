'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Careers', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
    solutions: [
      { label: 'GPS Tracking', href: '#solutions' },
      { label: 'EV Battery', href: '#solutions' },
      { label: 'IoT Solutions', href: '#solutions' },
      { label: 'Custom Development', href: '#solutions' },
    ],
    products: [
      { label: 'TrackPro GPS', href: '#products' },
      { label: 'PowerGuard BMS', href: '#products' },
      { label: 'Blumos Connect', href: '#products' },
      { label: 'SmartNode IoT', href: '#products' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '/privacy-policy#cookies' },
      { label: 'Contact Us', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-block mb-6">
              <div className="text-3xl font-bold">
                <span className="text-[#2D7AFD]">BLU</span>
                <span className="text-white">MOS</span>
                <span className="text-sm align-top">®</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Pioneering innovative hardware and software solutions for GPS, EV batteries, and diverse industries worldwide.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { name: 'LinkedIn', icon: 'LI' },
                { name: 'Twitter', icon: 'TW' },
                { name: 'GitHub', icon: 'GH' },
                { name: 'YouTube', icon: 'YT' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2D7AFD] hover:to-[#004AAD] transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold group-hover:text-white">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#2D7AFD] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#2D7AFD] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#2D7AFD] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and innovations.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#2D7AFD] focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Blumos Labs. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-[#2D7AFD] transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
