import PageHeader from './PageHeader';

export function LegalPage({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title}>Last updated: {updated}</PageHeader>
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 text-gray-700 leading-relaxed [&_a]:text-[#1a68ee] [&_a]:underline">
        {children}
      </article>
    </>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((i, n) => <li key={n}>{i}</li>)}
    </ul>
  );
}
