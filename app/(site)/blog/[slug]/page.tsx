import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlogCover from '@/components/BlogCover';
import PhoneFrame from '@/components/PhoneFrame';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import CtaBand from '@/components/CtaBand';
import { IconArrow } from '@/components/Icons';
import { posts, postBySlug, type Block } from '@/lib/blog';
import { SITE_URL, LEGAL_NAME } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  const path = `/blog/${p.slug}`;
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    authors: [{ name: 'Blumos Labs' }],
    alternates: { canonical: path },
    openGraph: { type: 'article', url: path, title: p.title, description: p.description, publishedTime: p.date, modifiedTime: p.updated ?? p.date, authors: ['Blumos Labs'], tags: p.keywords },
    twitter: { card: 'summary_large_image', title: p.title, description: p.description },
  };
}

const fmt = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

function Credit({ c }: { c: { text: string; href?: string } }) {
  if (!c.href) return <span className="whitespace-nowrap text-gray-500">({c.text})</span>;
  return <a href={c.href} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-gray-500 underline decoration-gray-300 underline-offset-2 hover:text-[#1a68ee]">({c.text})</a>;
}

function Render({ b }: { b: Block }) {
  switch (b.t) {
    case 'h2':
      return <h2 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">{b.text}</h2>;
    case 'p':
      return <p className="mt-4 text-lg leading-relaxed text-gray-700">{b.text}</p>;
    case 'ul':
      return (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-700 marker:text-[#1a68ee]">
          {b.items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      );
    case 'img':
      return (
        <figure className="my-10">
          {b.phone ? (
            <div className="mx-auto w-48 sm:w-56"><PhoneFrame src={b.src} alt={b.alt} /></div>
          ) : b.credit ? (
            <Image src={b.src} alt={b.alt} width={b.w} height={b.h} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full rounded-2xl border border-gray-200" />
          ) : (
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6">
              <Image src={b.src} alt={b.alt} width={b.w} height={b.h} className="mx-auto h-auto w-full max-w-xl" />
            </div>
          )}
          <figcaption className="mt-4 text-center text-sm text-gray-500">
            {b.caption}
            {b.credit && <> <Credit c={b.credit} /></>}
          </figcaption>
        </figure>
      );
    case 'brands':
      return (
        <div className="my-8 grid gap-4 sm:grid-cols-3">
          {b.items.map((i) => (
            <a key={i.name} href={i.site} target="_blank" rel="noopener noreferrer" className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#2D7AFD]/50 hover:shadow-md">
              <span className="flex h-12 items-center">
                <Image src={i.logo} alt={`${i.name} logo`} width={i.w} height={i.h} className="h-9 w-auto max-w-[9rem] object-contain object-left" />
              </span>
              <span className="mt-3 text-sm font-semibold text-gray-900">{i.maker}</span>
              <span className="mt-1 text-sm leading-relaxed text-gray-600">{i.text}</span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#004AAD] group-hover:underline">{i.site.replace('https://www.', '')} <IconArrow className="h-4 w-4" /></span>
            </a>
          ))}
        </div>
      );
    case 'table':
      return (
        <figure className="my-8">
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-blue-50/70 text-[#004AAD]">
                <tr>{b.head.map((h, i) => <th key={i} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100 align-top text-gray-700">
                {b.rows.map((r, ri) => (
                  <tr key={ri}>
                    {r.map((c, ci) => ci === 0
                      ? <th key={ci} scope="row" className="whitespace-nowrap bg-gray-50 px-4 py-3 font-semibold text-gray-900">{c}</th>
                      : <td key={ci} className="px-4 py-3 leading-relaxed">{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="mt-3 text-center text-sm text-gray-500">{b.caption}</figcaption>
        </figure>
      );
    case 'cta':
      return (
        <aside className="my-10 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-gray-900">{b.title}</p>
            <p className="mt-1 text-sm text-gray-600">{b.text}</p>
          </div>
          <Link href={b.href} className="inline-flex flex-shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1a68ee] px-6 py-3 text-sm font-semibold text-white hover:bg-[#004AAD]">
            {b.label} <IconArrow className="h-4 w-4" />
          </Link>
        </aside>
      );
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const post = postBySlug((await params).slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      keywords: post.keywords.join(', '),
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      image: `${SITE_URL}${post.cover.src}`,
      author: { '@type': 'Organization', name: 'Blumos Labs', url: SITE_URL },
      publisher: { '@type': 'Organization', name: LEGAL_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
      inLanguage: 'en',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <article>
        <header className="border-b border-blue-100/60 bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-3xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
              <Link href="/" className="inline-block py-2 hover:text-[#1a68ee]">Home</Link> / <Link href="/blog" className="inline-block py-2 hover:text-[#1a68ee]">Blog</Link>
            </nav>
            <div className="mt-5 flex items-center gap-3 text-xs text-gray-500">
              <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-[#004AAD] ring-1 ring-blue-200">{post.tag}</span>
              <time dateTime={post.date}>{fmt(post.date)}</time>
              <span>{post.readMins} min read</span>
            </div>
            <h1 className="mt-4 t-h1-page text-gray-900">{post.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
            <p className="mt-4 text-sm text-gray-500">By the Blumos Labs team</p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-px overflow-hidden rounded-2xl border border-gray-200 shadow-sm" style={{ marginTop: '2rem' }}>
            <BlogCover cover={post.cover} priority />
          </div>
          {post.cover.credit && <p className="mt-3 text-center text-xs text-gray-500"><Credit c={post.cover.credit} /></p>}
          <div className="pb-8">{post.body.map((b, i) => <Render key={i} b={b} />)}</div>
        </div>
      </article>

      {post.faq && <Faq items={post.faq} title="Quick answers" />}

      <section className="border-t border-gray-200 bg-gray-50 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Keep reading</h2>
          <div className="mt-6 grid gap-[var(--s1)] sm:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-[#2D7AFD]/50 hover:shadow-md">
                <span className="text-xs font-semibold text-[#004AAD]">{r.tag}</span>
                <h3 className="mt-2 font-semibold leading-snug text-gray-900 group-hover:text-[#1a68ee]">{r.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#004AAD]">Read <IconArrow className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-16">
        <CtaBand title="About Blumos Labs" text="We build BMS software and BMS IoT for EV batteries. Tell us what you need." />
      </div>
    </>
  );
}
