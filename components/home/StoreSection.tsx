'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './StoreSection.module.css';
import Link from 'next/link';
import { stores, contactInfo } from '@/app/data/stores';
import { PinIcon, PhoneIcon, ClockIcon, ImageIcon } from '@/components/icons';

const storeImages: Record<string, string[]> = Object.fromEntries(
  stores.map((s) => [s.id, s.images])
);

export default function StoreSection() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
  
  const [viewModes, setViewModes] = useState<Record<string, 'photos' | 'map'>>({
    bornova: 'photos',
  });

  const [activeIndexes, setActiveIndexes] = useState<Record<string, number>>({
    bornova: 0,
  });

  const nextImage = (storeId: string) => {
    const images = storeImages[storeId] || [];
    setActiveIndexes((prev) => ({
      ...prev,
      [storeId]: (prev[storeId] + 1) % images.length,
    }));
  };

  const prevImage = (storeId: string) => {
    const images = storeImages[storeId] || [];
    setActiveIndexes((prev) => ({
      ...prev,
      [storeId]: (prev[storeId] - 1 + images.length) % images.length,
    }));
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Mağazalarımız</div>
          <h2 className="section-title">Forum Mobilya Bornova Showroom</h2>
          <p className="section-subtitle">
            İzmir Bornova&apos;da bulunan modern showroomumuza gelerek ürünlerimizi yakından inceleyin.
          </p>
        </div>

        <div className={styles.grid}>
          {stores.map((store) => (
            <div key={store.id} className={styles.card}>
              <div className={styles.cardInfo}>
                <h3 className={styles.storeName}>{store.name}</h3>
                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <span className={styles.icon}><PinIcon size={18} /></span>
                    <div>
                      <strong>Adres</strong>
                      <span>{store.address}</span>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.icon}><PhoneIcon size={18} /></span>
                    <div>
                      <strong>Telefon</strong>
                      <a href={`tel:${store.phone}`}>{store.phone}</a>
                      {store.mobilePhone && <a href={`tel:${store.mobilePhone}`}>{store.mobilePhone}</a>}
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.icon}><ClockIcon size={18} /></span>
                    <div>
                      <strong>Çalışma Saatleri</strong>
                      <span>{store.workingHours}</span>
                    </div>
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
                  <button
                    onClick={() =>
                      setViewModes((prev) => ({
                        ...prev,
                        [store.id]: prev[store.id] === 'photos' ? 'map' : 'photos',
                      }))
                    }
                    className="btn btn--outline"
                  >
                    {viewModes[store.id] === 'photos' ? (
                      <><PinIcon size={16} /> Haritada Göster</>
                    ) : (
                      <><ImageIcon size={16} /> Fotoğrafları Göster</>
                    )}
                  </button>
                  <a href={whatsappUrl} className="btn btn--whatsapp">
                    Konum İste
                  </a>
                  <Link href={`/magazalarimiz/${store.id}`} className="btn btn--outline">
                    Mağaza Detayları →
                  </Link>
                </div>
              </div>
              
              <div className={styles.visualWrapper}>
                {viewModes[store.id] === 'photos' ? (
                  <div className={styles.sliderWrapper}>
                    <div className={styles.slider}>
                      {(storeImages[store.id] || []).map((imgSrc, idx) => (
                        <div
                          key={imgSrc}
                          className={`${styles.slide} ${idx === activeIndexes[store.id] ? styles.slideActive : ''}`}
                        >
                          {idx === activeIndexes[store.id] && (
                            <Image
                              src={imgSrc}
                              alt={`${store.name} Görsel ${idx + 1}`}
                              fill
                              quality={95}
                              sizes="(max-width: 1024px) 100vw, 550px"
                              className={styles.sliderImage}
                              priority={idx === 0}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    {/* Navigation arrows for slider */}
                    <button
                      className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`}
                      onClick={() => prevImage(store.id)}
                      aria-label="Önceki Görsel"
                    >
                      ‹
                    </button>
                    <button
                      className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
                      onClick={() => nextImage(store.id)}
                      aria-label="Sonraki Görsel"
                    >
                      ›
                    </button>
                    {/* Dots */}
                    <div className={styles.sliderDots}>
                      {(storeImages[store.id] || []).map((_, idx) => (
                        <button
                          key={idx}
                          className={`${styles.sliderDot} ${idx === activeIndexes[store.id] ? styles.sliderDotActive : ''}`}
                          onClick={() =>
                            setActiveIndexes((prev) => ({
                              ...prev,
                              [store.id]: idx,
                            }))
                          }
                          aria-label={`Görsel ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={styles.mapWrapper}>
                    <iframe
                      src={store.googleMapsEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${store.name} Google Haritası`}
                      className={styles.mapFrame}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
