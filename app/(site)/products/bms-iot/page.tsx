import Link from 'next/link';
import Image from 'next/image';
import CtaBand from '@/components/CtaBand';
import { IconArrow, IconPin, IconBolt, IconCloud, IconBattery } from '@/components/Icons';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import { iotHighlights, iotFeatures, iotApplications, iotSpecGroups } from '@/lib/content';

export const metadata = {
  title: 'BMS IoT & GPS Tracker for EV Batteries (Blu-400)',
  description: 'Blu-400 is an industrial-grade LTE Cat-1 BMS IoT and GPS telematics device. It talks to the BMS over CAN, UART and RS485, with GNSS, BLE 5.0, 9-90V DC input and IP67 protection.',
  alternates: { canonical: '/products/bms-iot' },
  openGraph: { url: '/products/bms-iot', title: 'BMS IoT & GPS Tracker for EV Batteries: Blu-400', description: 'LTE Cat-1 telematics device with CAN, GNSS and BLE for EV and battery monitoring.' },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Blu-400 BMS IoT and GPS telematics device',
    alternateName: ['Blu-400', 'Battery Monitoring IoT'],
    category: 'EV telematics device',
    description: 'Industrial-grade LTE Cat-1 telematics device with CAN, UART and RS485, GNSS, BLE 5.0, 9-90V DC input and IP67 enclosure for EV and battery monitoring.',
    brand: { '@type': 'Brand', name: 'Blumos' },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}/products/bms-iot`,
    image: `${SITE_URL}/products/blu-400-lid.png`,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Input voltage', value: '9-90V DC' },
      { '@type': 'PropertyValue', name: 'Ingress protection', value: 'IP67' },
      { '@type': 'PropertyValue', name: 'Connectivity', value: 'LTE Cat-1, GSM, BLE 5.0, GNSS' },
      { '@type': 'PropertyValue', name: 'Communication interfaces', value: 'CAN, UART, RS485, 1-Wire' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: 'BMS IoT', item: `${SITE_URL}/products/bms-iot` },
    ],
  },
];

const quickFacts = [
  ['9-90V', 'DC input'],
  ['IP67', 'Rugged casing'],
  ['LTE Cat-1', 'With GSM fallback'],
  ['94×74×33 mm', '143 g'],
];

const appIcons = [IconBolt, IconBattery, IconCloud, IconPin];

export default function BmsIotPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      {/* Product hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white border-b border-blue-100/60">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-tight grid lg:grid-cols-[1fr_1.272fr] gap-[var(--s2)] lg:gap-[var(--s3)] items-center">
          <div className="order-2 lg:order-1">
            <p className="fade-up text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">BMS IoT · GPS tracker</p>
            <h1 className="fade-up fade-up-2 mt-3 t-h1-page font-semibold tracking-tight text-gray-900">
              Battery Monitoring <span className="text-gradient">IoT</span>
            </h1>
            <p className="fade-up fade-up-2 mt-2 text-lg font-medium text-gray-500">Blu-400 · GNSS | LTE | BLE</p>
            <p className="fade-up fade-up-3 mt-5 leading-relaxed text-gray-600">
              Blu-400 is an industrial-grade LTE Cat-1 telematics device built for advanced electric vehicle and
              battery monitoring. It talks to the BMS and vehicle over CAN, UART and RS485, runs from 9-90V DC,
              adds Bluetooth connectivity and IP67-rated protection, for reliable real-time tracking and vehicle health
              visibility across EV fleets, shared mobility, logistics and automotive OEMs.
            </p>
            <ul className="fade-up fade-up-3 mt-6 flex flex-wrap gap-2">
              {iotHighlights.map((h) => (
                <li key={h} className="rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#004AAD]">{h}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1a68ee] px-7 py-3.5 font-semibold text-white hover:bg-[#004AAD] transition-colors"
              >
                Enquire about Blu-400 <IconArrow className="h-4 w-4" />
              </Link>
              <a
                href="#specifications"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-900 hover:border-[#2D7AFD] hover:text-[#1a68ee] transition-colors"
              >
                View specifications
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 fade-up fade-up-2">
            <div className="rounded-3xl border border-blue-100 bg-white/70 p-6 sm:p-10 shadow-[0_30px_70px_-30px_rgba(0,74,173,0.35)]">
              <Image
                src="/products/blu-400-lid.png"
                alt="Blu-400 battery monitoring IoT telematics device"
                width={1156}
                height={706}
                priority
                className="w-full h-auto drop-shadow-[0_25px_30px_rgba(0,40,110,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="section-tight">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 lg:grid-cols-4">
            {quickFacts.map(([k, v]) => (
              <div key={k} className="bg-white px-4 py-[var(--s1)] text-center sm:py-[var(--s2)]">
                <dt className="whitespace-nowrap text-lg font-semibold text-gray-900 sm:text-2xl">{k}</dt>
                <dd className="mt-1 text-sm text-gray-500">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">Key features</p>
          <h2 className="mt-3 max-w-2xl t-h2 font-semibold tracking-tight text-gray-900">
            Built for the road, the pack and the field
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-[var(--s1)]">
            {iotFeatures.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(0,74,173,0.3)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1a68ee]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-gray-50 border-y border-gray-200 section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">Applications</p>
          <h2 className="mt-3 max-w-2xl t-h2 font-semibold tracking-tight text-gray-900">
            Where Blu-400 fits
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-[var(--s1)]">
            {iotApplications.map((a, i) => {
              const Icon = appIcons[i];
              return (
                <div key={a.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#1a68ee]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-semibold text-gray-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">Technical specifications</p>
          <h2 className="mt-3 t-h2 font-semibold tracking-tight text-gray-900">Blu-400 at a glance</h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-[var(--s1)]">
            {iotSpecGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <h3 className="bg-blue-50/70 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#004AAD]">{g.title}</h3>
                <dl className="divide-y divide-gray-100 px-6">
                  {g.rows.map(([k, v]) => (
                    <div key={k} className="py-3 flex flex-col sm:flex-row sm:gap-[var(--s1)]">
                      <dt className="sm:w-2/5 flex-shrink-0 text-sm font-medium text-gray-900">{k}</dt>
                      <dd className="text-sm text-gray-600">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Interested in the Blu-400?" text="Tell us about your fleet or battery system and we will get back to you." />
    </>
  );
}
