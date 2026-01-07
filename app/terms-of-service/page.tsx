import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Terms of Service - Blumos Labs',
  description: 'Terms of Service for Blumos Labs mobile applications and services',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity">
            <Image
              src="/icon.png"
              alt="Blumos Labs"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <Image
              src="/logo.png"
              alt="Blumos Labs"
              width={100}
              height={32}
              className="h-6 w-auto"
            />
          </Link>
          <h1 className="text-4xl font-bold mt-4">Terms of Service</h1>
          <p className="text-blue-100 mt-2">Last updated: January 7, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your access to and use of Blumos Labs mobile applications, services, and products. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to these Terms, do not use our services.
            </p>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Blumos Labs provides:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>GPS tracking applications and devices</li>
              <li>Battery Management System (BMS) software and tools</li>
              <li>IoT cloud platform and data analytics</li>
              <li>Custom hardware and software solutions</li>
              <li>Related technical support and services</li>
            </ul>
          </section>

          {/* User Accounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use our services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Use our services for any illegal purpose</li>
              <li>Violate any laws, regulations, or third-party rights</li>
              <li>Interfere with or disrupt our services or servers</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services to transmit malware or harmful code</li>
              <li>Reverse engineer, decompile, or disassemble our software</li>
              <li>Remove or modify any proprietary notices</li>
              <li>Use our services to harass, abuse, or harm others</li>
            </ul>
          </section>

          {/* License */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">License and Restrictions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to use our applications and services for your internal business purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All rights not expressly granted are reserved by Blumos Labs.
            </p>
          </section>

          {/* Data and Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data and Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our collection and use of your data is governed by our Privacy Policy. By using our services, you consent to our data practices as described in the Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of your data. We will not sell your data to third parties.
            </p>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you purchase our products or services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Fees are due as specified in your subscription or purchase agreement</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We may change fees with advance notice</li>
              <li>You authorize us to charge your payment method</li>
              <li>You are responsible for all applicable taxes</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services, including all software, content, trademarks, and logos, are owned by Blumos Labs and protected by intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not copy, modify, distribute, sell, or lease any part of our services without our express written permission.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Accuracy, reliability, or completeness of data</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              GPS and tracking accuracy may be affected by various factors including weather, signal interference, and device limitations.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BLUMOS LABS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or data loss</li>
              <li>Third-party actions or content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Blumos Labs from any claims, losses, damages, liabilities, and expenses arising from your use of our services or violation of these Terms.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may suspend or terminate your access to our services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>For violation of these Terms</li>
              <li>For non-payment of fees</li>
              <li>At our discretion with or without notice</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use our services ceases immediately.
            </p>
          </section>

          {/* Modifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes. Continued use of our services after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration or in courts of competent jurisdiction.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms, contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2">Blumos Labs</p>
              <p className="text-gray-700">
                Email: <a href="mailto:info@blumoslabs.com" className="text-[#2D7AFD] hover:underline">info@blumoslabs.com</a>
              </p>
              <p className="text-gray-700 mt-2">
                Website: <a href="https://blumoslabs.com" className="text-[#2D7AFD] hover:underline">https://blumoslabs.com</a>
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2026 Blumos Labs. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
