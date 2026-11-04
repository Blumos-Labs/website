export default function PageHeader({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white border-b border-blue-100/60">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section">
        <p className="fade-up text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">{eyebrow}</p>
        <h1 className="fade-up fade-up-2 mt-3 max-w-3xl t-h1-page font-semibold tracking-tight text-gray-900">
          {title} {accent && <span className="text-gradient">{accent}</span>}
        </h1>
        {children && <p className="fade-up fade-up-3 mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">{children}</p>}
      </div>
    </header>
  );
}
