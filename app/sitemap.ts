import { MetadataRoute } from 'next';
import { categories } from '@/app/data/products';
import { blogPosts } from '@/app/data/blog';

const SITE_LAST_UPDATED = new Date('2026-08-13');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bornovamobilya.com.tr';

  // Static routes
  const staticRoutes = [
    { route: '', priority: 1.0 },
    { route: '/bornovamobilya', priority: 0.9 },
    { route: '/urunler', priority: 0.8 },
    { route: '/hakkimizda', priority: 0.8 },
    { route: '/magazalarimiz', priority: 0.8 },
    { route: '/magazalarimiz/bornova', priority: 0.8 },
    { route: '/blog', priority: 0.8 },
    { route: '/sss', priority: 0.7 },
    { route: '/iletisim', priority: 0.8 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: 'weekly' as const,
    priority,
  }));

  // Dynamic categories
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/urunler/${cat.slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic blogs
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes];
}
