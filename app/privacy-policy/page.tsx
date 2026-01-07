import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Privacy Policy - Blumos Labs',
  description: 'Privacy Policy for Blumos Labs mobile applications and services',
};

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold mt-4">Privacy Policy</h1>
          <p className="text-blue-100 mt-2">Last updated: January 7, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Blumos Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications, including our GPS tracking and Battery Management System (BMS) applications, and related services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this Privacy Policy carefully. By using our applications and services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">1. Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you register for our services, we may collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Company or organization information</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">2. GPS and Location Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our GPS tracking applications collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Real-time GPS location data</li>
              <li>Historical location and route information</li>
              <li>Geofencing data</li>
              <li>Speed and driving behavior data</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">3. Battery and Device Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our BMS applications collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Battery voltage, current, and temperature data</li>
              <li>State of Charge (SOC) and State of Health (SOH)</li>
              <li>Cell balancing information</li>
              <li>Battery configuration and parameters</li>
              <li>Device serial numbers and identifiers</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">4. Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>App usage statistics and analytics</li>
              <li>Device information (model, operating system, unique identifiers)</li>
              <li>IP address and network information</li>
              <li>Crash reports and error logs</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Service Provision:</strong> To provide, maintain, and improve our GPS tracking and BMS services</li>
              <li><strong>Real-time Monitoring:</strong> To enable real-time tracking, alerts, and notifications</li>
              <li><strong>Analytics:</strong> To analyze usage patterns, generate reports, and provide insights</li>
              <li><strong>Communication:</strong> To send service updates, technical notices, and support messages</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues and security threats</li>
              <li><strong>Compliance:</strong> To comply with legal obligations and enforce our terms</li>
              <li><strong>Improvement:</strong> To develop new features and enhance user experience</li>
            </ul>
          </section>

          {/* Data Sharing and Disclosure */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our services (cloud hosting, analytics, payment processing)</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Authorized Users:</strong> With other users in your organization who have been granted access</li>
            </ul>
          </section>

          {/* Data Storage and Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Encrypted data transmission using SSL/TLS protocols</li>
              <li>Secure cloud storage with encryption at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Data backup and disaster recovery procedures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide our services and maintain your account</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Meet regulatory requirements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You may request deletion of your data at any time, subject to legal and contractual requirements.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
              <li><strong>Restriction:</strong> Request restriction of processing your data</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact us at <a href="mailto:info@blumoslabs.com" className="text-[#2D7AFD] hover:underline">info@blumoslabs.com</a>
            </p>
          </section>

          {/* Location Permissions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Location Permissions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our GPS tracking applications require location permissions to function properly. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Grant or deny location permissions through your device settings</li>
              <li>Choose between "Always," "While Using App," or "Never" for location access</li>
              <li>Disable location services at any time, though this will limit app functionality</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and maintained on servers located outside your jurisdiction. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our applications may contain links to third-party services or integrate with third-party APIs. We are not responsible for the privacy practices of these third parties. We recommend reviewing their privacy policies.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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

          {/* Compliance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy is designed to comply with applicable privacy laws and regulations, including but not limited to GDPR, CCPA, and other data protection regulations. We are committed to protecting your privacy rights under all applicable laws.
            </p>
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
