import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { getBlogPostBySlug, blogPosts } from '@/app/data/blog';
import { CalendarIcon, TimerIcon } from '@/components/icons';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const canonicalUrl = `https://www.bornovamobilya.com.tr/blog/${slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article' as const,
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      publishedTime: post.publishedAt,
      authors: ['Bornova Mobilya'],
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Bornova Mobilya',
      url: 'https://www.bornovamobilya.com.tr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bornova Mobilya',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.bornovamobilya.com.tr/logo.jpeg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.bornovamobilya.com.tr/blog/${slug}`,
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://www.bornovamobilya.com.tr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.bornovamobilya.com.tr/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.bornovamobilya.com.tr/blog/${slug}`,
      },
    ],
  };

  // Parse custom markdown layout (h2, h3, p)
  const bodyParagraphs = post.content
    .split('\n\n')
    .filter((p) => p.trim() !== '');

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className={styles.page}>
      {/* Article + BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container">
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <article className={styles.article}>
          <header className={styles.header}>
            <span className={styles.badge}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span><CalendarIcon size={14} /> Yayınlanma: {post.publishedAt}</span>
              <span><TimerIcon size={14} /> Okuma Süresi: {post.readTime} dakika</span>
            </div>
          </header>

          <div className={styles.imageWrapper}>
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.content}>
            {bodyParagraphs.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className={styles.h2}>
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className={styles.h3}>
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={index} className={styles.p}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          {relatedPosts.length > 0 && (
            <div className={styles.related}>
              <h2 className={styles.relatedTitle}>İlginizi Çekebilecek Diğer Yazılar</h2>
              <div className={styles.relatedList}>
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.slug} className={styles.relatedItem}>
                    <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    <p>{relatedPost.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <footer className={styles.footer}>
            <div className={styles.share}>
              <span>Paylaşın veya Diğer Yazılara Göz Atın:</span>
            </div>
            <Link href="/blog" className="btn btn--outline">
              ➔ Tüm Yazılara Geri Dön
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
