import { LegalPage, Section, List } from '@/components/Legal';
import { COMPANY, EMAIL, PHONE } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Blumos Labs collects, uses and protects information across our BMS apps, IoT devices, cloud services and website.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="November 5, 2026">
      <Section title="Introduction">
        <p>
          {COMPANY} (&ldquo;Blumos&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) takes your privacy seriously. This policy explains how we
          collect, use and protect information when you use our mobile apps (including the Blumos Battery Platform BMS app and apps built on
          it for our partners), our IoT devices and cloud services, and this website.
        </p>
        <p>By using our apps and services you agree to the practices described here.</p>
      </Section>

      <Section title="Information we collect">
        <h3 className="font-semibold text-gray-900">Account and contact information</h3>
        <List items={['Name, email address and phone number', 'Company or organisation name', 'Account credentials, where an account is required', 'Billing information, where you purchase from us']} />
        <h3 className="pt-2 font-semibold text-gray-900">Battery and device data</h3>
        <p>When you connect the app to a battery management system (BMS), or use one of our IoT devices, we may process:</p>
        <List items={['Battery voltage, current, power and temperatures', 'State of charge (SOC) and state of health (SOH), cell voltages and cycle counts', 'Protection and balancing status, and BMS configuration parameters', 'Device and BMS identifiers such as names and serial numbers']} />
        <h3 className="pt-2 font-semibold text-gray-900">Complaint and support data</h3>
        <p>If you raise a complaint or support request, we process what you submit, together with the battery data attached to that request.</p>
        <h3 className="pt-2 font-semibold text-gray-900">Location data</h3>
        <p>
          Our telematics devices (such as the Blu-400) report the position of the vehicle they are installed in to the customer who operates them.
          Our apps use Bluetooth to connect to batteries. On some versions of Android the operating system requires location permission to scan for
          Bluetooth devices; we use it only for that purpose.
        </p>
        <h3 className="pt-2 font-semibold text-gray-900">Website and usage data</h3>
        <List items={['Messages you send through our contact form (name, email, company and message)', 'App usage, device model, operating system version, crash reports and error logs', 'IP address and basic network information']} />
      </Section>

      <Section title="How we use information">
        <List items={['To provide, maintain and improve our apps, devices and services', 'To show you live battery and vehicle data and send alerts you ask for', 'To respond to enquiries, complaints and support requests', 'To keep our services secure and prevent misuse', 'To meet legal obligations and enforce our terms']} />
      </Section>

      <Section title="Sharing">
        <p>We do not sell your personal information. We may share it:</p>
        <List items={['With your consent', 'With the brand or organisation whose branded app you use, so they can support their customers and batteries', 'With service providers who help us run our services, such as cloud hosting and email', 'If required by law, or to protect rights and safety', 'In connection with a merger, acquisition or sale of assets']} />
      </Section>

      <Section title="Security and retention">
        <p>
          We use reasonable technical and organisational measures to protect information, including encrypted transmission and access controls.
          No system is completely secure, so we cannot guarantee absolute security.
        </p>
        <p>We keep information only as long as needed to provide our services, meet legal requirements and resolve disputes. You may ask us to delete your data, subject to legal and contractual requirements.</p>
      </Section>

      <Section title="Your rights">
        <p>
          Depending on where you live, including under India&apos;s Digital Personal Data Protection Act, 2023, you may have the right to access,
          correct or erase your personal data, to withdraw consent, and to raise a grievance. To exercise a right, email{' '}
          <a href="mailto:info@blumoslabs.com">{EMAIL}</a>.
        </p>
      </Section>

      <Section title="Children">
        <p>Our services are meant for businesses and adults. We do not knowingly collect personal information from children. If you believe a child has given us information, contact us and we will delete it.</p>
      </Section>

      <Section title="Transfers and third parties">
        <p>Information may be stored or processed on servers outside your country. We take steps to protect it wherever it is processed. Our apps and website may link to third-party services whose privacy practices are their own.</p>
      </Section>

      <Section title="Changes to this policy">
        <p>We may update this policy. We will post the new version here and change the &ldquo;Last updated&rdquo; date. Continuing to use our services means you accept the updated policy.</p>
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
