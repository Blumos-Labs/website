import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { IconMail, IconPhone } from '@/components/Icons';
import { SocialLinks, StoreLinks } from '@/components/SocialLinks';
import { EMAIL, PHONE, PHONE_HREF, COMPANY } from '@/lib/content';

export const metadata = {
  title: 'Contact Blumos Labs: BMS App & BMS IoT Enquiries',
  alternates: { canonical: '/contact' },
  description: 'Get in touch with Blumos Labs about the BMS app, the Blu-400 BMS IoT device or custom hardware and software.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk about" accent="your project">
        Want the Battery Platform under your brand, or have a question about the Blu-400 or a custom device? Send us a note and we will get back to you.
      </PageHeader>
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.618fr] gap-[var(--s2)] lg:gap-[var(--s3)]">
          <div className="space-y-[var(--s0)]">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 pr-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D7AFD]">
                <IconMail className="h-6 w-6 text-white" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-gray-500">Email</span>
                <span className="block font-semibold text-gray-900">{EMAIL}</span>
              </span>
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 pr-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D7AFD]">
                <IconPhone className="h-6 w-6 text-white" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-gray-500">Phone</span>
                <span className="block font-semibold text-gray-900">{PHONE}</span>
              </span>
            </a>
            <div className="pt-[var(--s0)]">
              <p className="text-sm font-semibold text-gray-900">{COMPANY}</p>
              <p className="mt-1 text-sm text-gray-500">Follow us and find our apps</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <SocialLinks />
                <StoreLinks />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
