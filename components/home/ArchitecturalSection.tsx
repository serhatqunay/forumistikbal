'use client';

import Image from 'next/image';
import styles from './ArchitecturalSection.module.css';
import { consultantInfo, getConsultantWhatsAppUrl } from '@/app/data/consultantData';
import { WhatsAppIcon, SparklesIcon, AwardIcon, ShieldIcon, TruckIcon } from '@/components/icons';

export default function ArchitecturalSection() {
  const whatsappUrl = getConsultantWhatsAppUrl(
    'Merhaba Serhat Bey, evim için 3D mimari çizim, yerleşim planı ve mobilya tavsiyesi almak istiyorum.'
  );

  return (
    <section className={`section ${styles.section}`} id="mimari-destek">
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left Content Column */}
          <div className={styles.content}>
            <div className={styles.labelWrapper}>
              <SparklesIcon size={18} className={styles.sparkleIcon} />
              <span>Ücretsiz 3D Mimari Tasarım Hizmeti</span>
            </div>

            <h2 className={styles.title}>
              Evinizin Ölçülerine Özel <br className={styles.desktopOnlyBr} />
              <span className={styles.titleHighlight}>3D Mimari Çizim &amp; Dekorasyon</span> Desteği
            </h2>

            <p className={styles.description}>
              Salonunuzun veya odanızın ölçülerini bize WhatsApp&apos;tan iletin; Bornova İstikbal Yetkili Satıcısı Danışmanınız <strong>Serhat Günay</strong> evinize özel 3D yerleşim çizimini ve renk kombinasyonlarını ücretsiz hazırlasın.
            </p>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}><AwardIcon size={20} /></span>
                <div>
                  <strong>Birebir 3D Mimari Projelendirme</strong>
                  <span>Evinizin planına milimetrik uyumlu modüler koltuk ve mobilya yerleşimi</span>
                </div>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.featureIcon}><SparklesIcon size={20} /></span>
                <div>
                  <strong>Kumaş &amp; Renk Kartelası Rehberliği</strong>
                  <span>İstikbal&apos;in yüzlerce doku ve silinebilir kumaş seçeneği</span>
                </div>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.featureIcon}><ShieldIcon size={20} /></span>
                <div>
                  <strong>Mağaza İçi Özel Fiyat &amp; Taksit Avantajı</strong>
                  <span>Bütçenize en uygun ödeme planı ve sürpriz mağaza indirimleri</span>
                </div>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.featureIcon}><TruckIcon size={20} /></span>
                <div>
                  <strong>İzmir Geneline Ücretsiz Montaj</strong>
                  <span>Satın aldığınız tüm ürünler uzman ekibimizce ücretsiz teslim edilir</span>
                </div>
              </div>
            </div>

            <div className={styles.ctaGroup}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--lg"
              >
                <WhatsAppIcon size={24} />
                <span>Serhat Günay ile 3D Mimari Destek Al (WhatsApp)</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card Column */}
          <div className={styles.visualCard}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/destina-koltuk-takimi001_min.webp"
                alt="Serhat Günay 3D Mimari Çizim & Dekorasyon Desteği"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 540px"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />

              {/* Floating Badge on Image */}
              <div className={styles.floatingConsultantBadge}>
                <div className={styles.avatarPlaceholder}>
                  <span className={styles.avatarInitials}>SG</span>
                  <span className={styles.onlineDot} />
                </div>
                <div>
                  <strong className={styles.consultantName}>{consultantInfo.name}</strong>
                  <span className={styles.consultantRole}>{consultantInfo.title}</span>
                  <span className={styles.consultantStore}>Bornova Showroom</span>
                </div>
              </div>

              <div className={styles.floating3dBadge}>
                <span className={styles.badge3dIcon}>📐</span>
                <span>Ücretsiz 3D Çizim Desteği</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
