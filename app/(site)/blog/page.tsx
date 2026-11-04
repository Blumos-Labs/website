import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import BlogCover from '@/components/BlogCover';
import JsonLd from '@/components/JsonLd';
import { IconArrow } from '@/components/Icons';
import { posts } from '@/lib/blog';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Blog: BMS Software, BMS IoT & EV Battery Guides',
  description: 'Guides from Blumos Labs on BMS software, BMS apps, BMS IoT and GPS tracking, JBD, JK and Daly smart BMS, cell balancing and launching a white-label BMS app.',
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog', title: 'Blumos Labs Blog: BMS Software, BMS IoT & EV Battery Guides', description: 'Guides on BMS apps, BMS IoT, JBD, JK and Daly BMS, and EV battery monitoring.' },
};

export const fmtDate = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default function BlogIndex() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blumos Labs Blog',
    url: `${SITE_URL}/blog`,
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE_URL}/blog/${p.slug}`, datePublished: p.date })),
  };
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader eyebrow="Blog" title="Guides on BMS software," accent="BMS IoT and EV batteries">
        Practical guides from Blumos Labs for battery brands, EV fleets and service teams.
      </PageHeader>
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-[var(--s1)] px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {posts.map((p, i) => (
            <article key={p.slug} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-[#2D7AFD]/50 hover:shadow-[0_20px_50px_-20px_rgba(0,74,173,0.3)]">
              <Link href={`/blog/${p.slug}`} className="block">
                <BlogCover cover={p.cover} priority={i < 3} />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 whitespace-nowrap text-xs text-gray-500">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 font-semibold text-[#004AAD]">{p.tag}</span>
                    <time dateTime={p.date}>{fmtDate(p.date)}</time>
                    <span>{p.readMins} min read</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold leading-snug text-gray-900 group-hover:text-[#1a68ee]">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#004AAD] transition-all group-hover:gap-3">Read article <IconArrow className="h-4 w-4" /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
