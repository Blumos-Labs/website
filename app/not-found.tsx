import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="pt-16 sm:pt-20">
        <section className="mx-auto max-w-2xl px-4 py-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a68ee]">404</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">We couldn&apos;t find that page</h1>
          <p className="mt-4 text-gray-600">The link may be old or mistyped. These might help:</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="rounded-full bg-[#1a68ee] px-6 py-3 font-semibold text-white hover:bg-[#004AAD]">Home</Link>
            <Link href="/products" className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:border-[#1a68ee]">Products</Link>
            <Link href="/contact" className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:border-[#1a68ee]">Contact</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
