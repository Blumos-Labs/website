import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { posts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page('', 1, 'weekly'),
    page('/products', 0.9),
    page('/products/bms-software', 0.9),
    page('/products/bms-iot', 0.9),
    page('/blog', 0.8, 'weekly'),
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.updated ?? p.date), changeFrequency: 'monthly' as const, priority: 0.7 })),
    page('/about', 0.6),
    page('/contact', 0.6),
    page('/privacy-policy', 0.2, 'yearly'),
    page('/terms-of-service', 0.2, 'yearly'),
  ];
}
