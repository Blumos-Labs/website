import Image from 'next/image';

export default function PhoneFrame({
  src,
  alt,
  className = '',
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative rounded-[20%/9.6%] bg-gray-900 p-[1.7%] shadow-[0_30px_60px_-20px_rgba(0,40,110,0.45)] ring-1 ring-white/10 ${className}`}>
      {/* Side buttons */}
      <span className="absolute -left-[1.2%] top-[14%] h-[4%] w-[1.6%] rounded-l bg-gray-800" aria-hidden />
      <span className="absolute -left-[1.2%] top-[21%] h-[7%] w-[1.6%] rounded-l bg-gray-800" aria-hidden />
      <span className="absolute -left-[1.2%] top-[30%] h-[7%] w-[1.6%] rounded-l bg-gray-800" aria-hidden />
      <span className="absolute -right-[1.2%] top-[24%] h-[11%] w-[1.6%] rounded-r bg-gray-800" aria-hidden />
      {/* Every phone has the same slim iPhone-like shape. Screenshots are shown whole (no cropping); any spare side space blends into the app's light background. */}
      <div className="relative aspect-[0.48] overflow-hidden rounded-[18.5%/8.9%] bg-[#f7f7f7]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 260px, 45vw"
          className="object-contain"
          priority={priority}
        />
        {/* Dynamic Island */}
        <span className="absolute left-1/2 top-[1.4%] h-[2.3%] w-[25%] -translate-x-1/2 rounded-full bg-black" aria-hidden />
      </div>
    </div>
  );
}
