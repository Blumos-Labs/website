import Link from 'next/link';
import { products } from '@/lib/content';
import { IconCheck, IconArrow } from './Icons';
import ProductMedia from './ProductMedia';

export default function ProductGrid() {
  return (
    <div className="grid lg:grid-cols-2 gap-[var(--s1)]">
      {products.map((p) => (
        <article
          key={p.slug}
          className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_25px_60px_-25px_rgba(0,74,173,0.4)]"
        >
          <Link href={p.href} className="block" aria-label={p.name}>
            <ProductMedia slug={p.slug} />
          </Link>

          <div className="flex flex-1 flex-col p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#1a68ee]">{p.category}</div>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">{p.name}</h3>
              </div>
              <span className="flex-shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#004AAD]">{p.badge}</span>
            </div>
            <p className="mt-4 leading-relaxed text-gray-600">{p.description}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <IconCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1a68ee]" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={p.href}
              className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-[#1a68ee] px-6 py-3 text-sm font-semibold text-white hover:bg-[#004AAD] transition-colors"
            >
              View product <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
