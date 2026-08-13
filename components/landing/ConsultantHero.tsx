'use client';

import styles from './ConsultantHero.module.css';
import { consultantInfo, getConsultantWhatsAppUrl } from '@/app/data/consultantData';
import { WhatsAppIcon, PhoneIcon, ShieldIcon, TruckIcon, SparklesIcon, StarIcon } from '@/components/icons';

export default function ConsultantHero() {
  const whatsappUrl = getConsultantWhatsAppUrl();
  const phoneUrl = `tel:${consultantInfo.phoneRaw}`;

  return (
    <section className={styles.heroSection}>
      <div className={styles.backdropGlow} />
      <div className="container">
        <div className={styles.heroContent}>
          {/* Top Badge */}
          <div className={styles.badge}>
            <SparklesIcon size={16} className={styles.sparkleIcon} />
            <span>İzmir Bornova İstikbal Yetkili Mağazası</span>
          </div>

          {/* Main Title */}
          <h1 className={styles.heroTitle}>
            İzmir Bornova Mobilya &amp; İstikbal Mağazası <br />
            <span className={styles.highlightName}>Danışmanınız {consultantInfo.name}</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            İstikbal&apos;in en yeni koleksiyonlarında evinize özel <strong>3D mimari çizim</strong>, birebir danışmanlık, <strong>mağaza içi özel fiyat teklifi</strong> ve katalog desteği.
          </p>

          {/* Contact Bar Card */}
          <div className={styles.contactCard}>
            <div className={styles.consultantBadgeWrapper}>
              <div className={styles.avatarPlaceholder}>
                <span className={styles.avatarInitials}>SG</span>
                <span className={styles.onlineStatus} />
              </div>
              <div className={styles.consultantTextInfo}>
                <h3 className={styles.consultantName}>{consultantInfo.name}</h3>
                <p className={styles.consultantTitle}>{consultantInfo.title} • Bornova Mağazası</p>
                <div className={styles.ratingRow}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={14} className={styles.starGold} />
                    ))}
                  </div>
                  <span className={styles.ratingText}>Birebir İlgi & Müşteri Memnuniyeti</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtonsGroup}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnAction} ${styles.btnWhatsapp}`}
              >
                <WhatsAppIcon size={22} />
                <span>WhatsApp&apos;tan Mimari Çizim &amp; Fiyat İste</span>
              </a>
              <a href={phoneUrl} className={`${styles.btnAction} ${styles.btnCall}`}>
                <PhoneIcon size={20} />
                <span>Bana Ulaşın ({consultantInfo.phone})</span>
              </a>
            </div>
          </div>

          {/* Trust Highlights */}
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.trustIconWrapper}>
                <WhatsAppIcon size={20} />
              </span>
              <div>
                <strong>Hızlı Katalog & Fiyat</strong>
                <span>WhatsApp&apos;tan anında yanıt</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIconWrapper}>
                <TruckIcon size={20} />
              </span>
              <div>
                <strong>Ücretsiz Montaj & Teslimat</strong>
                <span>Tüm İzmir geneline teslimat</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIconWrapper}>
                <ShieldIcon size={20} />
              </span>
              <div>
                <strong>Orijinal İstikbal Garantisi</strong>
                <span>Yetkili bayi güvencesi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
