import Link from 'next/link';
import { products } from '@/lib/content';
import ProductMedia from './ProductMedia';
import { IconArrow } from './Icons';
import Reveal from './Reveal';

// The two main product cards for the home page. Full detail lives on each product page.
export default function ProductPreview() {
  return (
    <div className="grid gap-[var(--s1)] md:grid-cols-2">
      {products.map((p, i) => (
        <Reveal key={p.slug} delay={i * 0.1}>
          <Link
            href={p.href}
            className="group block h-full overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#2D7AFD]/50 hover:shadow-[0_25px_60px_-25px_rgba(0,74,173,0.4)]"
          >
            <ProductMedia slug={p.slug} />
            <div className="p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1a68ee]">{p.category}</span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#004AAD]">{p.badge}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#004AAD] transition-all group-hover:gap-3">
                View product <IconArrow className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
