import PhoneFrame from './PhoneFrame';

// Left to right. Humaya sits in the centre, the rest fan out in an arc.
const phones = [
  { src: '/screens/theme-blue.jpg', alt: 'Blumos Battery Platform app, blue theme', pos: 'w-[15%] -rotate-[14deg] translate-y-12 -mr-1' },
  { src: '/screens/theme-red-clean.jpg', alt: 'Blumos Battery Platform app, red theme', pos: 'w-[19%] -rotate-[7deg] translate-y-5 -mr-1' },
  { src: '/screens/theme-humaya.jpg', alt: 'Blumos Battery Platform app branded as Humaya, with charging status and cell voltages', pos: 'w-[23%] z-10', priority: true },
  { src: '/screens/theme-red.jpg', alt: 'Blumos Battery Platform app, red and yellow theme', pos: 'w-[19%] rotate-[7deg] translate-y-5 -ml-1' },
  { src: '/screens/theme-green.jpg', alt: 'Blumos Battery Platform app, green theme with per-cell voltages', pos: 'w-[15%] rotate-[14deg] translate-y-12 -ml-1' },
];

export default function AppShowcase() {
  return (
    <div className="relative mx-auto flex w-full max-w-[44rem] items-center justify-center pb-10">
      <div className="absolute inset-x-4 top-8 bottom-6 rounded-[3rem] bg-gradient-to-br from-[#2D7AFD]/20 to-[#004AAD]/10 blur-2xl" aria-hidden />
      {phones.map((p) => (
        <div
          key={p.src}
          tabIndex={0}
          className={`relative origin-bottom outline-none transition-all duration-300 ease-out hover:z-30 hover:rotate-0 hover:-translate-y-3 hover:scale-[1.22] focus-visible:z-30 focus-visible:rotate-0 focus-visible:-translate-y-3 focus-visible:scale-[1.22] ${p.pos}`}
        >
          <PhoneFrame src={p.src} alt={p.alt} priority />
        </div>
      ))}
    </div>
  );
}
