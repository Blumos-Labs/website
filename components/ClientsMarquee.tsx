import Image from 'next/image';

// Logos in /public/clients are white silhouettes. Height classes are tuned per logo so they look equally weighted.
const clients = [
  { name: 'Humaya Power', logo: '/clients/humaya.png', w: 709, h: 318, size: 'h-16' },
  { name: 'Litpax', logo: '/clients/litpax.png', w: 470, h: 144, size: 'h-10' },
  { name: 'DriveVolts', logo: '/clients/drivevolts.png', w: 471, h: 86, size: 'h-9' },
  { name: 'Aumar, Nagpal Energies', logo: '/clients/aumar.png', w: 1200, h: 486, size: 'h-16' },
  { name: 'Urja One', logo: '/clients/urja-one.png', w: 245, h: 50, size: 'h-9' },
];

export default function ClientsMarquee() {
  // Rendered four times; the track moves by exactly half its width, so the loop is seamless.
  const loop = [...clients, ...clients, ...clients, ...clients];
  return (
    <section aria-label="Our clients" className="bg-gradient-to-r from-[#004AAD] via-[#2D7AFD] to-[#004AAD] py-10 sm:py-12">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Trusted by EV brands</p>
      <div
        className="marquee overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
        }}
      >
        <div className="marquee-track items-center">
          {loop.map((c, i) => (
            <div key={i} className="flex h-20 items-center px-10 sm:px-14" aria-hidden={i >= clients.length}>
              <Image src={c.logo} alt={c.name} width={c.w} height={c.h} className={`${c.size} w-auto max-w-none opacity-95`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
