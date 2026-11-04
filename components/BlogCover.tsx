import Image from 'next/image';
import PhoneFrame from './PhoneFrame';
import type { Post } from '@/lib/blog';

// Real photographs (free-licence, credited on the article) or Blumos product images where the topic calls for them.
export default function BlogCover({ cover, priority = false }: { cover: Post['cover']; priority?: boolean }) {
  return (
    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {cover.kind === 'photo' ? (
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          className={cover.fit === 'contain' ? 'object-contain bg-[#e6e7e9]' : 'object-cover'}
        />
      ) : cover.kind === 'phone' ? (
        <div style={{ height: '88%', aspectRatio: 0.5 }} className="mt-[6%]">
          <PhoneFrame src={cover.src} alt={cover.alt} priority={priority} />
        </div>
      ) : (
        <Image src={cover.src} alt={cover.alt} width={1156} height={706} priority={priority} className="h-[82%] w-auto drop-shadow-[0_18px_20px_rgba(0,40,110,0.3)]" />
      )}
      {cover.logos && (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/35 to-transparent px-3 pb-3 pt-8 sm:gap-3">
          {[
            ['/logos/jbd.png', 'JBD', 240, 63],
            ['/logos/jk.png', 'JK BMS', 420, 368],
            ['/logos/daly.png', 'Daly BMS', 700, 90],
          ].map(([src, alt, w, h]) => (
            <span key={alt as string} className="flex h-9 items-center rounded-lg bg-white px-2.5 shadow-md sm:h-11 sm:px-3">
              <Image src={src as string} alt={alt as string} width={w as number} height={h as number} className="h-5 w-auto sm:h-7" />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
