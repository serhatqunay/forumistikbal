import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryGrid.module.css';
import { categories } from '@/app/data/products';

export default function CategoryGrid() {
  return (
    <section className={`section ${styles.section}`} id="urunler">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Ürün Kategorilerimiz</div>
          <h2 className="section-title">
            Her Odanız İçin<br />
            <span className={styles.titleAccent}>Mükemmel Çözümler</span>
          </h2>
          <p className="section-subtitle">
            İstikbal&apos;in geniş ürün yelpazesi ile evinizin her köşesini şık ve konforlu hale getirin.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <Link
              key={cat.id}
              href={`/urunler/${cat.slug}`}
              className={styles.card}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <Image
                src={cat.imageUrl}
                alt={cat.name}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay} />
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cat.name}</h3>
                <p className={styles.cardDesc}>{cat.description}</p>
                <div className={styles.cardCta}>
                  <span>Koleksiyonu Gör</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.allProducts}>
          <Link href="/urunler" className="btn btn--dark btn--lg">
            Tüm Ürünleri Gör
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
