import Link from 'next/link';
import { IconArrow } from './Icons';

export default function CtaBand({
  title = 'Have a project in mind?',
  text = 'Tell us what you need and we will get back to you.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="pb-[var(--s3)] sm:pb-[var(--s4)]">
      {/* Same container as every other section, so the band lines up with the content above it */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#2D7AFD] to-[#004AAD] px-[var(--s1)] py-[var(--s2)] text-center text-white sm:px-[var(--s2)] sm:py-[var(--s3)]">
          <h2 className="t-h2">{title}</h2>
          <p className="t-lead mx-auto mt-[var(--s0)] max-w-xl text-white/85">{text}</p>
          <Link
            href="/contact"
            className="mt-[var(--s1)] inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#004AAD] transition-shadow hover:shadow-xl"
          >
            Contact us <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
