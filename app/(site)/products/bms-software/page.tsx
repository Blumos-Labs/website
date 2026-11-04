import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import AppShowcase from '@/components/AppShowcase';
import { IconArrow, IconCheck } from '@/components/Icons';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import { bmsCapabilities, bmsRoadmap, bmsWhy, bmsBrands, bmsSpecs } from '@/lib/content';

export const metadata = {
  title: 'BMS Software: Bluetooth BMS App for JBD, JK, Daly',
  description: 'Blumos Battery Platform: an OEM-ready Bluetooth BMS app for iOS and Android. Monitor and configure JBD, JK, Daly and other smart BMS with per-cell data, full read/write control, built-in complaint CRM and your own branding.',
  alternates: { canonical: '/products/bms-software' },
  openGraph: { url: '/products/bms-software', title: 'BMS Software: Bluetooth BMS App for JBD, JK & Daly', description: 'An OEM-ready Bluetooth BMS app with full read/write control, per-cell monitoring and your own branding.' },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Blumos Battery Platform',
    alternateName: ['BMS app', 'Bluetooth BMS monitoring app'],
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android',
    description: 'OEM-ready Bluetooth BMS app that monitors and configures JBD, JK, Daly and other major smart BMS, with per-cell monitoring, full read/write control and a built-in complaint CRM.',
    url: `${SITE_URL}/products/bms-software`,
    publisher: { '@id': `${SITE_URL}/#organization` },
    featureList: ['Universal BMS support (JBD, JK, Daly)', 'Real-time per-cell monitoring', 'Full read and write of BMS settings', 'Built-in complaint CRM', 'White-label branding'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: 'BMS Software', item: `${SITE_URL}/products/bms-software` },
    ],
  },
];

export default function BmsSoftwarePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader eyebrow="OEM-ready battery monitoring" title="One app. Every BMS." accent="Your brand.">
        A ready-to-launch battery monitoring and management app your customers carry as their own. It
        supports JBD, JK, Daly and other major BMS in a single interface, with full read/write control and
        built-in complaint management.
      </PageHeader>

      {/* Intro + preview */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.272fr] gap-[var(--s2)] items-center">
          <div>
            <h2 className="t-h2 font-semibold tracking-tight text-gray-900">
              Bluetooth monitoring app for JBD, JK, Daly and other major brands
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {bmsBrands.map((b) => (
                <span key={b} className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-[#004AAD]">{b}</span>
              ))}
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-gray-700">
              {['Universal BMS support', 'Read + write settings', 'Built-in CRM', 'Fully brandable', 'iOS and Android', 'Real-time per-cell data'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-[#1a68ee]" /> {t}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1a68ee] px-7 py-3.5 font-semibold text-white hover:bg-[#004AAD] transition-colors"
            >
              Make it yours <IconArrow className="h-4 w-4" />
            </Link>
          </div>
          <AppShowcase />
        </div>
      </section>

      {/* Problem */}
      <section className="bg-blue-50/60 border-y border-blue-100 section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">The problem</p>
          <h2 className="mt-3 t-h2 font-semibold tracking-tight text-gray-900">
            Your customers are juggling five apps to manage one battery.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Every BMS manufacturer ships its own app. JBD has one, JK another, Daly a third, each with a
            different layout, login and learning curve. For a battery brand or systems integrator, that
            fragmentation is a daily support burden: confused end-users, inconsistent branding, and no single
            place to see what is happening. The Blumos Battery Platform replaces that tangle with one branded,
            professional app.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">Capabilities</p>
          <h2 className="mt-3 t-h2 font-semibold tracking-tight text-gray-900">
            Built for the people who actually manage batteries
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-[var(--s1)]">
            {bmsCapabilities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(0,74,173,0.3)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1a68ee]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Also on the platform / roadmap</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {bmsRoadmap.map((r) => (
                <span key={r} className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-700">{r}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-gray-50 border-y border-gray-200 section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">Why go OEM-ready with Blumos</p>
          <h2 className="mt-3 max-w-2xl t-h2 font-semibold tracking-tight text-gray-900">
            Launch your own battery app in weeks, not years
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-gray-600">
            Building a multi-BMS app in-house means reverse-engineering protocols, chasing hardware changes,
            and staffing a mobile team indefinitely. Blumos owns the engineering, the integrations and the
            maintenance. You own the brand, the customer and the market.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bmsWhy.map((w) => (
              <div key={w.step} className="rounded-xl border border-gray-200 bg-white p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2D7AFD] text-sm font-semibold text-white">{w.step}</span>
                <div className="mt-4 font-semibold text-gray-900">{w.title}</div>
                <p className="mt-1 text-sm text-gray-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="t-h2 font-semibold tracking-tight text-gray-900">At a glance</h2>
          <dl className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
            {bmsSpecs.map(([k, v]) => (
              <div key={k} className="py-3.5 flex flex-col sm:flex-row sm:gap-[var(--s1)]">
                <dt className="sm:w-36 flex-shrink-0 font-semibold text-gray-900">{k}</dt>
                <dd className="text-gray-600">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-xs text-gray-500">
            Brand names (JBD, JK, Daly and others) are trademarks of their respective owners, referenced for
            compatibility only. An OEM-ready product of Blumos Labs Private Limited.
          </p>
        </div>
      </section>

      {/* Compatibility */}
      <section className="border-t border-gray-200 bg-gray-50 section-tight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="t-h2 font-semibold tracking-tight text-gray-900">Works with the BMS you already use</h2>
          <p className="mt-3 text-gray-600">JBD, JK, Daly and other major smart BMS, in one app.</p>
          <Link href="/blog/jbd-vs-jk-vs-daly-bms" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#004AAD] hover:gap-3 transition-all">
            Compare JBD, JK and Daly BMS <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand
        title="Ready to make it yours?"
        text="Let's talk supported hardware, branding options and a rollout plan for your markets."
      />
    </>
  );
}
