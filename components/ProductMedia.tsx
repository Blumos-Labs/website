import Image from 'next/image';
import PhoneFrame from './PhoneFrame';

// Product artwork inside a golden-ratio (1.618:1) frame. Everything is sized from the frame height,
// so nothing is cropped and the padding is equal on all sides.
function Phone({ src, alt, h, tilt = 0, priority = false }: { src: string; alt: string; h: string; tilt?: number; priority?: boolean }) {
  return (
    <div style={{ height: h, aspectRatio: 0.5, transform: `rotate(${tilt}deg)`, transformOrigin: 'bottom center' }}>
      <PhoneFrame src={src} alt={alt} priority={priority} />
    </div>
  );
}

export default function ProductMedia({ slug, className = '' }: { slug: string; className?: string }) {
  return (
    <div className={`relative flex aspect-[1.618/1] items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white p-[7%] ${className}`}>
      <div className="flex h-full w-full items-end justify-center gap-[4%] transition-transform duration-500 group-hover:scale-[1.04]">
        {slug === 'bms-software' ? (
          <>
            <Phone src="/screens/theme-red-clean.jpg" alt="Blumos Battery Platform app, red theme" h="78%" tilt={-4} priority />
            <Phone src="/screens/theme-humaya.jpg" alt="Blumos Battery Platform app with charging status and cell voltages" h="100%" priority />
            <Phone src="/screens/theme-green.jpg" alt="Blumos Battery Platform app, green theme" h="78%" tilt={4} priority />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src="/products/blu-400-lid.png"
              alt="Blu-400 battery monitoring IoT telematics device"
              width={1156}
              height={706}
              className="h-auto max-h-full w-[92%] object-contain drop-shadow-[0_20px_25px_rgba(0,40,110,0.3)]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
