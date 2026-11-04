import JsonLd from './JsonLd';

export type FaqItem = { q: string; a: string };

// Visible FAQ (native <details>, works without JS) plus matching FAQPage structured data.
export default function Faq({ items, title = 'Frequently asked questions' }: { items: FaqItem[]; title?: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
  return (
    <section className="section">
      <JsonLd data={data} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="t-h2 font-semibold tracking-tight text-gray-900">{title}</h2>
        <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {items.map((i) => (
            <details key={i.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                {i.q}
                <svg className="h-5 w-5 flex-shrink-0 text-[#1a68ee] transition-transform group-open:rotate-45" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 leading-relaxed text-gray-600">{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
