import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { categories } from '@/app/data/products';

export const metadata: Metadata = {
  title: 'Bornova Mobilya Koleksiyonları | İzmir İstikbal Ürün Kataloğu',
  description:
    'İzmir Bornova mobilya mağazamızdaki (bornovamobilya.com.tr) koltuk takımları, L köşe koltuklar, yatak odaları, yemek odaları ve genç odası ürün katalogları.',
  alternates: {
    canonical: 'https://www.bornovamobilya.com.tr/urunler',
  },
  openGraph: {
    title: 'Bornova Mobilya Koleksiyonları | İzmir İstikbal Ürün Kataloğu',
    description:
      'İstikbal yetkili satıcısı Bornova Mobilya\'dan koltuk takımları, yatak odası, yemek odası ve genç odası koleksiyonları.',
    url: 'https://www.bornovamobilya.com.tr/urunler',
    images: [
      {
        url: 'https://www.bornovamobilya.com.tr/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bornova Mobilya Ürün Koleksiyonları',
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Ürünler' }]} />
        
        <header className={styles.header}>
          <h1 className="section-title">Bornova Mobilya Koleksiyonları</h1>
          <p className="section-subtitle">
            İstikbal kalitesini evinizin her köşesine taşıyan Bornova mağazamızdaki en özel mobilya grupları.
          </p>
        </header>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/urunler/${cat.slug}`} className={styles.card}>
              <Image
                src={cat.imageUrl}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay} />
              
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{cat.name}</h2>
                <p className={styles.desc}>{cat.description}</p>
                <div className={styles.footer}>
                  <span className={styles.count}>{cat.products.length} Alt Kategori</span>
                  <div className={styles.cardCta}>
                    <span>Koleksiyonu Gör</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
