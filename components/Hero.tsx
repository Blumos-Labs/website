import Link from 'next/link';
import InteractiveEv from './InteractiveEv';
import { IconArrow } from './Icons';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-14 sm:pt-20 pb-[var(--s3)] sm:pb-[var(--s4)]">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute -top-32 left-0 h-[420px] w-[620px] rounded-full bg-[#2D7AFD]/15 blur-[110px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.272fr] gap-[var(--s2)] lg:gap-[var(--s1)] items-center">
          <div>
            <div className="fade-up inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-medium text-[#004AAD]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2D7AFD] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2D7AFD]" />
              </span>
              EV solution provider
            </div>

            <h1 className="fade-up fade-up-2 mt-6 t-h1 font-semibold leading-[1.08] tracking-tight text-gray-900">
              The intelligence behind <span className="text-gradient">every electric mile.</span>
            </h1>

            <p className="fade-up fade-up-3 mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-600">
              Blumos Labs builds BMS software and BMS IoT hardware that give EV brands, fleets and service teams
              live visibility into every battery pack, from the app on the phone to the device on the vehicle.
            </p>

            <div className="fade-up fade-up-3 mt-9 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1a68ee] px-7 py-3.5 font-semibold text-white hover:bg-[#004AAD] transition-colors"
              >
                Explore products <IconArrow className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-gray-300 bg-white px-7 sm:w-auto py-3.5 font-semibold text-gray-900 hover:border-[#2D7AFD] hover:text-[#1a68ee] transition-colors"
              >
                Talk to us
              </Link>
            </div>

          </div>

          <div className="fade-up fade-up-2">
            <InteractiveEv />
          </div>
        </div>
      </div>
    </section>
  );
}
