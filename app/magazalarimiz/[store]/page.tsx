import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { getStoreBySlug, stores, contactInfo, buildStoreSchema } from '@/app/data/stores';
import { PinIcon, PhoneIcon, ClockIcon } from '@/components/icons';

interface PageProps {
  params: Promise<{ store: string }>;
}

export async function generateStaticParams() {
  return stores.map((store) => ({
    store: store.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { store: storeId } = await params;
  const store = getStoreBySlug(storeId);
  if (!store) return {};

  const canonicalUrl = `https://www.bornovamobilya.com.tr/magazalarimiz/${store.id}`;
  const title = `${store.district} Mobilya Mağazası | İstikbal Yetkili Satıcısı Bornova Mobilya`;

  return {
    title,
    description: store.schemaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: store.schemaDescription,
      url: canonicalUrl,
    },
  };
}

export default async function StoreDetailPage({ params }: PageProps) {
  const { store: storeId } = await params;
  const store = getStoreBySlug(storeId);

  if (!store) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    ...buildStoreSchema(store),
  };

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
        name: 'Mağazalarımız',
        item: 'https://www.bornovamobilya.com.tr/magazalarimiz',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: store.district,
        item: `https://www.bornovamobilya.com.tr/magazalarimiz/${store.id}`,
      },
    ],
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container">
        <Breadcrumb
          items={[
            { label: 'Mağazalarımız', href: '/magazalarimiz' },
            { label: store.district },
          ]}
        />

        <header className={styles.header}>
          <div className={styles.label}>İzmir {store.district} İstikbal Mağazası</div>
          <h1 className="section-title">
            {store.district} Mobilya Mağazası — Bornova Mobilya İstikbal Yetkili Satıcısı
          </h1>
          <p className="section-subtitle">{store.schemaDescription}</p>
        </header>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.detailItem}>
              <span className={styles.iconBadge}><PinIcon size={18} /></span>
              <div>
                <strong>Adres</strong>
                <span>{store.address}</span>
              </div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.iconBadge}><PhoneIcon size={18} /></span>
              <div>
                <strong>Telefon</strong>
                <a href={`tel:${store.phone}`}>{store.phone}</a>
                {store.mobilePhone && <a href={`tel:${store.mobilePhone}`}>{store.mobilePhone}</a>}
              </div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.iconBadge}><ClockIcon size={18} /></span>
              <div>
                <strong>Çalışma Saatleri</strong>
                <span>{store.workingHours}</span>
              </div>
            </div>
            <div className={styles.actions}>
              <a
                href={store.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--dark"
              >
                Yol Tarifi Al ↗
              </a>
              <a href={whatsappUrl} className="btn btn--whatsapp">
                WhatsApp&apos;tan Yazın
              </a>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              src={store.googleMapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${store.name} Google Haritası`}
              allowFullScreen
            />
          </div>
        </div>

        <div className={styles.gallery}>
          {store.images.map((imgSrc, idx) => (
            <div key={imgSrc} className={styles.galleryImage}>
              <Image
                src={imgSrc}
                alt={`Forum Mobilya ${store.district} Mağazası Görsel ${idx + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <section className={styles.seoSection}>
          <div className={styles.seoContainer}>
            <h2 className={styles.seoTitle}>{store.district} Mobilya Mağazası Hakkında</h2>
            <div className={styles.seoText}>
              {store.seoText.split('\n').map((paragraph, index) => (
                <p key={index} className={styles.seoParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.cta}>
              <Link href="/urunler" className="btn btn--primary">
                Ürünlerimizi İnceleyin
              </Link>
              <Link href="/sss" className="btn btn--outline">
                Sıkça Sorulan Sorular
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
