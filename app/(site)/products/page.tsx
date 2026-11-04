import PageHeader from '@/components/PageHeader';
import ProductGrid from '@/components/ProductGrid';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: 'BMS Software & BMS IoT Products',
  alternates: { canonical: '/products' },
  description: 'BMS software and BMS IoT from Blumos Labs: the Blumos Battery Platform app and the Blu-400 telematics device.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Products" title="Battery monitoring," accent="software and IoT">
        BMS software and BMS IoT, from the app on the phone to the device on the pack.
      </PageHeader>
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
