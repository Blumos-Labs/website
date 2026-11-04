import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { COMPANY } from '@/lib/content';

export const metadata = {
  title: 'About Blumos Labs: EV Battery Technology Company',
  alternates: { canonical: '/about' },
  description: 'Blumos Labs is an EV technology company building battery monitoring software and IoT hardware.',
};

const whatWeMake = [
  { title: 'BMS Software', text: 'The Blumos Battery Platform: one Bluetooth app for JBD, JK, Daly and other major BMS, ready to launch under your own brand.' },
  { title: 'BMS IoT', text: 'Blu-400: a rugged LTE telematics device with CAN, GNSS and BLE that reports battery and vehicle data in real time.' },
];

const principles = [
  { title: 'Engineering first', text: 'We build the hardware, firmware and software ourselves, so the whole stack works together.' },
  { title: 'Built for the field', text: 'Designed for real vehicles and battery packs, where connectivity and conditions are never ideal.' },
  { title: 'Work with you', text: 'Custom requirements are a normal part of what we do, not an exception.' },
  { title: 'You own the brand', text: 'We own the engineering and the maintenance. You own the customer and the market.' },
];

const tech = ['Battery management', 'IoT', 'Embedded systems', 'Mobile apps', 'Cloud', 'Edge computing'];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="An EV technology company," accent="powering the edge">
        {COMPANY} designs hardware and software for electric vehicles and battery systems.
      </PageHeader>

      {/* Story */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.618fr_1fr] gap-[var(--s2)] lg:gap-[var(--s3)]">
          <Reveal>
            <h2 className="t-h2 font-semibold tracking-tight text-gray-900">Who we are</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              We build products that sit at the edge: in vehicles, battery packs and equipment. They measure
              what is happening, and we turn that into something people can use.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our work spans embedded hardware, firmware, mobile apps and cloud platforms, with a strong focus
              on battery management for electric vehicles. We keep the engineering in-house so battery brands,
              fleets and EV makers can concentrate on their customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-[#004AAD]">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">What we make</h2>
            <div className="mt-4 space-y-4">
              {whatWeMake.map((w) => (
                <div key={w.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="font-semibold text-gray-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{w.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-gray-200 bg-gray-50 section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="t-h2 font-semibold tracking-tight text-gray-900">How we work</h2>
          </Reveal>
          <div className="mt-10 grid gap-[var(--s1)] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-6">
                  <span className="font-mono text-xs font-semibold text-[#1a68ee]">0{i + 1}</span>
                  <h3 className="mt-3 font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-[var(--s3)] sm:pt-[var(--s4)]">
        <CtaBand />
      </div>
    </>
  );
}
