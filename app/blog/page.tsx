import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { blogPosts } from '@/app/data/blog';
import { CalendarIcon, TimerIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Mobilya & Dekorasyon Blog | Bornova Mobilya İzmir',
  description:
    'Yatak odası renk uyumundan küçük salon dekorasyon ipuçlarına, en yeni mobilya trendleri ve dekorasyon önerileri Bornova Mobilya Blog\'da (bornovamobilya.com.tr).',
  alternates: {
    canonical: 'https://www.bornovamobilya.com.tr/blog',
  },
  openGraph: {
    title: 'Mobilya & Dekorasyon Blog | Bornova Mobilya',
    description:
      'İzmir Bornova mobilya uzmanlarından dekorasyon trendleri, mobilya seçim rehberleri ve yaşam alanı ipuçları.',
    url: 'https://www.bornovamobilya.com.tr/blog',
    images: [
      {
        url: 'https://www.bornovamobilya.com.tr/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bornova Mobilya Dekorasyon Blog',
      },
    ],
  },
};

export default function BlogListPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Blog' }]} />

        <header className={styles.header}>
          <h1 className="section-title">Bornova Mobilya &amp; Dekorasyon Blogu</h1>
          <p className="section-subtitle">
            Ev dekorasyonu, mobilya seçimi ve yaşam alanınızı güzelleştirecek uzman önerileri ve trend fikirler.
          </p>
        </header>

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                />
                <span className={styles.categoryBadge}>{post.category}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span><CalendarIcon size={14} /> {post.publishedAt}</span>
                  <span><TimerIcon size={14} /> {post.readTime} dk okuma</span>
                </div>
                <h2 className={styles.title}>
                  <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                    {post.title}
                  </Link>
                </h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.moreLink}>
                  Okumaya Devam Et ➔
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
