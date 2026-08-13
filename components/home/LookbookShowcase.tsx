'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './LookbookShowcase.module.css';
import { contactInfo } from '@/app/data/stores';
import { WhatsAppIcon, SparklesIcon, ChevronRightIcon } from '@/components/icons';

const showcaseCards = [
  {
    id: 'salon',
    categorySlug: 'koltuk-takimlari',
    categoryName: 'Salon & Koltuk Takımları',
    title: 'Şık ve Konforlu Oturma Grupları',
    subtitle: 'Bornova mağazamızda sergilenen İstikbal L koltuk ve modüler salon takımları.',
    imageUrl: '/images/vitrin-salon.jpg',
    badge: '2025 Özel Vitrin',
    featuredProducts: [
      { name: 'Destina Koltuk Takımı', desc: 'Silinebilir kumaş, yataklı & sandıklı' },
      { name: 'Ravel Köşe Koltuk', desc: 'Ergonomik sırt mekanizmalı L koltuk' },
    ],
  },
  {
    id: 'yatak',
    categorySlug: 'yatak-baza-baslik',
    categoryName: 'Yatak Odaları & Bazalar',
    title: 'Huzurlu Yatak Odası Konseptleri',
    subtitle: 'Ortopedik yataklar, geniş depolama alanlı bazalar ve estetik başlık tasarımları.',
    imageUrl: '/images/vitrin-yatak.jpg',
    badge: 'Popüler Konsept',
    featuredProducts: [
      { name: 'Destina Yatak Odası Takımı', desc: 'Aynalı gardırop & komodin seti' },
      { name: 'Active Life Ortopedik Yatak', desc: 'Bel ve omurga destekli yay sistemi' },
    ],
  },
  {
    id: 'yemek',
    categorySlug: 'yemek-odalari',
    categoryName: 'Yemek Odaları & Konsollar',
    title: 'Estetik Yemek Odası Takımları',
    subtitle: 'Misafirlerinizi ağırlayacağınız genişleyen yemek masaları ve konsol modelleri.',
    imageUrl: '/images/vitrin-yemek.jpg',
    badge: 'Mağaza Seçkisi',
    featuredProducts: [
      { name: 'Fiona Yemek Odası Takımı', desc: 'Açılır masalı konsol & sandalye seti' },
      { name: 'Luxe Ahşap Konsol', desc: 'Temperli cam ve modern led detaylı' },
    ],
  },
];

export default function LookbookShowcase() {
  const getWhatsAppLink = (prodName: string) => {
    const text = `Merhaba Serhat Bey, vitrindeki ${prodName} hakkında bilgi ve mağaza fiyatı almak istiyorum.`;
    return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className={`section ${styles.section}`} id="vitrinlerimiz">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Showroom Galerisi</div>
          <h2 className="section-title">Bornova Mağaza Vitrinlerimizden Kesitler</h2>
          <p className="section-subtitle">
            Bornova showroomumuzda sergilenen en beğenilen İstikbal konseptlerini keşfedin; beğendiğiniz ürün için anında fiyat ve 3D mimari destek alın.
          </p>
        </div>

        <div className={styles.grid}>
          {showcaseCards.map((card) => (
            <div key={card.id} className={styles.card}>
              {/* Card Image Container */}
              <div className={styles.imageWrapper}>
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />

                {/* Floating Glass Badge */}
                <div className={styles.badge}>
                  <SparklesIcon size={14} className={styles.badgeIcon} />
                  <span>{card.badge}</span>
                </div>

                <div className={styles.cardHeaderOnImage}>
                  <span className={styles.categoryName}>{card.categoryName}</span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.content}>
                <p className={styles.subtitle}>{card.subtitle}</p>

                <div className={styles.productList}>
                  <span className={styles.listLabel}>Vitrinde Öne Çıkanlar:</span>
                  {card.featuredProducts.map((prod, idx) => (
                    <div key={idx} className={styles.productRow}>
                      <div className={styles.productMeta}>
                        <strong className={styles.productName}>{prod.name}</strong>
                        <span className={styles.productDesc}>{prod.desc}</span>
                      </div>
                      <a
                        href={getWhatsAppLink(prod.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnWhatsappMini}
                        title={`${prod.name} için WhatsApp Fiyatı Al`}
                      >
                        <WhatsAppIcon size={16} />
                        <span>Fiyat Sor</span>
                      </a>
                    </div>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <Link href={`/urunler/${card.categorySlug}`} className={styles.catLink}>
                    <span>Koleksiyonu İncele</span>
                    <ChevronRightIcon size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
