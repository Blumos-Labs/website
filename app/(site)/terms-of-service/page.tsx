import { LegalPage, Section, List } from '@/components/Legal';
import { COMPANY, EMAIL, PHONE } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms that apply when you use Blumos Labs apps, devices, services and website.',
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsOfService() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="November 5, 2026">
      <Section title="Agreement to terms">
        <p>
          These Terms govern your use of the apps, devices, software, services and website of {COMPANY} (&ldquo;Blumos&rdquo;). By using them you
          agree to these Terms. If you do not agree, please do not use our services.
        </p>
      </Section>

      <Section title="Our services">
        <List items={['BMS software, including the Blumos Battery Platform app and apps built on it for partners', 'BMS IoT hardware, such as the Blu-400 telematics device', 'Related cloud services, support and custom development']} />
      </Section>

      <Section title="Accounts">
        <p>If an account is needed, you agree to give accurate information, keep your credentials secure, tell us promptly about unauthorised access, and accept responsibility for activity under your account.</p>
      </Section>

      <Section title="Acceptable use">
        <p>You agree not to:</p>
        <List items={['Use our services for anything unlawful or that infringes anyone&apos;s rights', 'Interfere with or disrupt our services, servers or networks', 'Try to gain unauthorised access to our systems or data', 'Introduce malware or harmful code', 'Reverse engineer, decompile or copy our software, except where the law allows', 'Remove proprietary notices, or use our services to harass or harm others']} />
      </Section>

      <Section title="Important: battery safety">
        <p>
          Our products display and, where you choose, change settings on a battery management system. Changing BMS parameters can affect battery
          protection and safety. Only change settings if you understand the effect, and follow the battery and BMS manufacturer&apos;s guidance.
          Our products are monitoring tools and are not a substitute for a properly designed battery protection system.
        </p>
      </Section>

      <Section title="Licence">
        <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable licence to use our apps and services for your internal business purposes. All other rights are reserved by Blumos.</p>
      </Section>

      <Section title="Data and privacy">
        <p>Our <a href="/privacy-policy">Privacy Policy</a> explains how we handle data. You keep ownership of your data, and we do not sell it.</p>
      </Section>

      <Section title="Payment">
        <List items={['Fees are as set out in your order, subscription or agreement', 'Fees are non-refundable unless stated otherwise', 'You are responsible for applicable taxes', 'We may change fees with advance notice']} />
      </Section>

      <Section title="Intellectual property and trademarks">
        <p>
          Our software, content, trademarks and logos are owned by Blumos or its licensors. Brand names such as JBD, JK and Daly belong to their
          respective owners and are used only to describe compatibility; Blumos is not affiliated with them.
        </p>
      </Section>

      <Section title="Disclaimers">
        <p>Our services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any kind to the extent the law permits, including accuracy of data, uninterrupted operation and fitness for a particular purpose.</p>
        <p>The data shown by our products depends on the connected BMS, sensors, device and network, and may be delayed, incomplete or unavailable.</p>
      </Section>

      <Section title="Limitation of liability">
        <p>To the maximum extent the law permits, Blumos is not liable for indirect, incidental, special or consequential damages, or for loss of profits, data or business. Our total liability is limited to the fees you paid us in the 12 months before the claim.</p>
      </Section>

      <Section title="Indemnity and termination">
        <p>You agree to indemnify Blumos against claims arising from your misuse of our services or breach of these Terms. We may suspend or end your access for breach of these Terms or non-payment.</p>
      </Section>

      <Section title="Changes and governing law">
        <p>We may update these Terms and will post the new version here. These Terms are governed by the laws of India, and the courts of competent jurisdiction in India will have jurisdiction over any dispute.</p>
      </Section>

      <Section title="Contact us">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-semibold text-gray-900">{COMPANY}</p>
          <p>Email: <a href="mailto:info@blumoslabs.com">{EMAIL}</a></p>
          <p>Phone: {PHONE}</p>
          <p>Website: <a href={SITE_URL}>{SITE_URL.replace('https://', '')}</a></p>
        </div>
      </Section>
    </LegalPage>
  );
}
