import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { getCategoryBySlug, categories } from '@/app/data/products';
import { contactInfo } from '@/app/data/stores';
import ProductSchema from '@/components/seo/ProductSchema';

interface PageProps {
  params: Promise<{ kategori: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    kategori: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { kategori } = await params;
  const category = getCategoryBySlug(kategori);
  if (!category) return {};

  const canonicalUrl = `https://www.bornovamobilya.com.tr/urunler/${kategori}`;

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: canonicalUrl,
      images: [
        {
          url: category.imageUrl,
          width: 1200,
          height: 630,
          alt: `Bornova Mobilya ${category.name} — İzmir Bornova`,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { kategori } = await params;
  const category = getCategoryBySlug(kategori);

  if (!category) {
    notFound();
  }

  const whatsappMessage = (prodName: string) =>
    `Merhaba, İstikbal ${prodName} modeli hakkında bilgi alabilir miyim?`;

  // BreadcrumbList JSON-LD
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
        name: 'Ürünler',
        item: 'https://www.bornovamobilya.com.tr/urunler',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://www.bornovamobilya.com.tr/urunler/${category.slug}`,
      },
    ],
  };

  // ItemList JSON-LD
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.name} — Bornova Mobilya`,
    description: category.metaDescription,
    numberOfItems: category.products.length,
    itemListElement: category.products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
      description: product.description,
      image: product.imageUrl.startsWith('http')
        ? product.imageUrl
        : `https://www.bornovamobilya.com.tr${product.imageUrl.startsWith('/') ? '' : '/'}${product.imageUrl}`,
      url: product.istikbalUrl,
    })),
  };

  const canonicalUrl = `https://www.bornovamobilya.com.tr/urunler/${category.slug}`;
  const relatedCategories = categories.filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <div className={styles.page}>
      {/* BreadcrumbList + ItemList + Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ProductSchema
        products={category.products.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          image: product.imageUrl,
          url: canonicalUrl,
          category: category.name,
          price: product.price,
        }))}
      />

      <div className={`container ${styles.breadcrumbRow}`}>
        <Breadcrumb
          items={[
            { label: 'Ürünler', href: '/urunler' },
            { label: category.name },
          ]}
        />
      </div>

      <div className={styles.banner}>
        <Image
          src={category.imageUrl}
          alt={`Forum Mobilya ${category.name} — İzmir Bornova & Çeşme`}
          fill
          sizes="100vw"
          className={styles.bannerImage}
          priority
        />
        <div className={styles.bannerOverlay} />
        <div className="container">
          <div className={styles.bannerContent}>
            <div className={styles.label}>
              İzmir Bornova İstikbal Mağazası
            </div>
            <h1 className={styles.bannerTitle}>Bornova {category.name} Modelleri</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <header className={styles.header}>
          <p className="section-subtitle">{category.description}</p>
        </header>

        <div className={styles.grid}>
          {category.products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.imageUrl}
                  alt={`${category.name} - ${product.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.image}
                  priority={false}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{product.name}</h2>
                <p className={styles.desc}>{product.description}</p>
                <div className={styles.actions}>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
                      whatsappMessage(product.name)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp btn--sm"
                  >
                    Fiyat Sor
                  </a>
                  <a
                    href={product.istikbalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--sm"
                  >
                    Resmi Katalog ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {category.seoText && (
          <section className={styles.seoSection}>
            <div className={styles.seoContainer}>
              <h2 className={styles.seoTitle}>{category.name} Hakkında Bilgiler & Seçim Rehberi</h2>
              <div className={styles.seoText}>
                {category.seoText.split('\n').map((paragraph, index) => (
                  <p key={index} className={styles.seoParagraph}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {relatedCategories.length > 0 && (
                <div className={styles.relatedCategories}>
                  <h3 className={styles.relatedTitle}>Diğer Ürün Kategorilerimiz</h3>
                  <div className={styles.relatedLinks}>
                    {relatedCategories.map((relatedCat) => (
                      <Link
                        key={relatedCat.slug}
                        href={`/urunler/${relatedCat.slug}`}
                        className={styles.relatedLink}
                      >
                        {relatedCat.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
