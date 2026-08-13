'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductShowcaseGallery.module.css';
import { showcaseProducts, getProductWhatsAppUrl, ShowcaseProduct } from '@/app/data/consultantData';
import { WhatsAppIcon, CheckIcon, SparklesIcon } from '@/components/icons';

type CategoryFilter = 'all' | 'koltuk' | 'kose' | 'yemek' | 'yatak' | 'genc' | 'tv';

const filterTabs: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'Tüm Koleksiyon' },
  { id: 'koltuk', label: 'Koltuk Takımları' },
  { id: 'kose', label: 'Köşe Koltuklar' },
  { id: 'yemek', label: 'Yemek Odaları' },
  { id: 'yatak', label: 'Yatak & Baza' },
  { id: 'genc', label: 'Genç Odaları' },
  { id: 'tv', label: 'TV Üniteleri' },
];

export default function ProductShowcaseGallery() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>('all');

  const filteredProducts = activeTab === 'all'
    ? showcaseProducts
    : showcaseProducts.filter((p) => p.category === activeTab);

  return (
    <section className={`section ${styles.gallerySection}`} id="urunler-galerisi">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className="section-label">İstikbal Örnek Koleksiyon</div>
          <h2 className="section-title">Bornova Mağazamızdan Öne Çıkan Modeller</h2>
          <p className="section-subtitle">
            Aşağıdaki modeller ve tüm İstikbal koleksiyonu hakkında güncel stok, renk seçenekleri ve özel fiyat teklifi almak için doğrudan satış danışmanınız Serhat Günay ile iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={styles.tabsContainer}>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className={styles.productGrid}>
          {filteredProducts.map((product) => {
            const productWaUrl = getProductWhatsAppUrl(product.name);

            return (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  {product.badge && (
                    <span className={styles.badge}>
                      <SparklesIcon size={12} />
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.imageUrl}
                    alt={`${product.name} — İstikbal Bornova`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.productImage}
                  />
                  <div className={styles.categoryTag}>{product.categoryLabel}</div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>

                  <div className={styles.featuresList}>
                    {product.features.map((feat, idx) => (
                      <span key={idx} className={styles.featureItem}>
                        <CheckIcon size={14} className={styles.checkIcon} />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <a
                      href={productWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnProductWa}
                    >
                      <WhatsAppIcon size={18} />
                      <span>Serhat Bey&apos;den Fiyat Al</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className={styles.bottomBanner}>
          <div className={styles.bannerText}>
            <h3>Aradığınız Farklı Bir İstikbal Modeli mi Var?</h3>
            <p>Tüm İstikbal kataloğu için Serhat Bey size fotoğraf, video ve fiyat listesi gönderebilir.</p>
          </div>
          <a
            href={getProductWhatsAppUrl('İstikbal Kataloğu')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <WhatsAppIcon size={20} />
            Tüm Kataloğu WhatsApp&apos;tan İste
          </a>
        </div>
      </div>
    </section>
  );
}
