import Link from 'next/link';
import Hero from '@/components/Hero';
import CtaBand from '@/components/CtaBand';
import ClientsMarquee from '@/components/ClientsMarquee';
import ProductPreview from '@/components/ProductPreview';
import Reveal from '@/components/Reveal';
import { IconBattery, IconCloud, IconArrow, IconSliders, IconBolt, IconPin, IconShield } from '@/components/Icons';

const steps = [
  { icon: IconBattery, label: 'Measure', text: 'We build the hardware and software that capture what is happening inside the battery and the vehicle.' },
  { icon: IconCloud, label: 'Connect', text: 'That data travels from the vehicle to the people who manage it, reliably and in real time.' },
  { icon: IconSliders, label: 'Act', text: 'EV brands, fleets and service teams turn it into decisions, better support and better products.' },
];

const audiences = [
  { icon: IconBolt, title: 'EV brands', text: 'Vehicle makers who want to know how their batteries perform in the field.' },
  { icon: IconBattery, title: 'Battery makers', text: 'Pack builders who want to support and brand their own products.' },
  { icon: IconPin, title: 'Fleet operators', text: 'Teams that need to keep electric vehicles running and accountable.' },
  { icon: IconShield, title: 'Service teams', text: 'Technicians who need real battery data to diagnose and resolve faults.' },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">{children}</p>;
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* What we do */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-3 t-h2 font-semibold tracking-tight text-gray-900">
              From the battery pack to the <span className="text-gradient">palm of your hand</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Electric vehicles generate a lot of data. We make it visible, from the pack to the person who needs it.
            </p>
          </Reveal>

          <ol className="relative mt-12 grid gap-[var(--s1)] md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-blue-200 md:block" aria-hidden />
            {steps.map(({ icon: Icon, label, text }, i) => (
              <Reveal key={label} delay={i * 0.12}>
                <li className="relative text-center md:px-4">
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2D7AFD] to-[#004AAD] text-white shadow-lg shadow-blue-500/30">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{label}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-600">{text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Products */}
      <section className="border-y border-blue-100 bg-blue-50/50 section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Our products</Eyebrow>
              <h2 className="mt-3 t-h2 font-semibold tracking-tight text-gray-900">
                Software and IoT for <span className="text-gradient">battery monitoring</span>
              </h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#004AAD] hover:gap-3 transition-all">
              All products <IconArrow className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-10">
            <ProductPreview />
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <Eyebrow>Who we serve</Eyebrow>
            <h2 className="mt-3 t-h2 font-semibold tracking-tight text-gray-900">
              Built for the <span className="text-gradient">EV ecosystem</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-[var(--s1)] sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1a68ee]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientsMarquee />

      {/* About snippet */}
      <section className="section">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-[var(--s2)] lg:grid-cols-[1.618fr_1fr] lg:items-center">
          <div>
            <Eyebrow>About Blumos Labs</Eyebrow>
            <h2 className="mt-3 t-h2 font-semibold tracking-tight text-gray-900">
              An EV technology company, <span className="text-gradient">powering the edge</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Blumos Labs Private Limited designs hardware and software for electric vehicles and battery
              systems. We keep the engineering in-house so that our partners can focus on their brand,
              their customers and their market.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/about" className="inline-flex items-center gap-2 py-2 font-semibold text-[#004AAD] hover:gap-3 transition-all">
                More about us <IconArrow className="h-4 w-4" />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 py-2 font-semibold text-[#004AAD] hover:gap-3 transition-all">
                Our products <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <dl className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {[
              ['Focus', 'EV battery monitoring'],
              ['What we make', 'BMS software and BMS IoT'],
              ['Who we serve', 'EV brands, fleets, battery makers, service teams'],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-[var(--s1)]">
                <dt className="text-sm font-semibold text-gray-900 sm:w-32 sm:flex-shrink-0">{k}</dt>
                <dd className="text-sm text-gray-600">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <CtaBand title="Let's build something together" text="Tell us about your EV, fleet or battery system and we will get back to you." />
    </>
  );
}
