'use client';

import styles from './ConsultantProfile.module.css';
import { consultantInfo, getConsultantWhatsAppUrl } from '@/app/data/consultantData';
import { WhatsAppIcon, PhoneIcon, CheckIcon, CalendarIcon, PinIcon } from '@/components/icons';

export default function ConsultantProfile() {
  const whatsappUrl = getConsultantWhatsAppUrl('Merhaba Serhat Bey, Bornova İstikbal mağazanız için randevu ve bilgi almak istiyorum.');

  return (
    <section className={`section ${styles.profileSection}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Information Card */}
          <div className={styles.cardMain}>
            <div className={styles.headerRow}>
              <div className={styles.badgeLabel}>Mağaza Satış Danışmanınız</div>
              <h2 className={styles.title}>Neden Birebir Danışmanlık?</h2>
              <p className={styles.subtitle}>
                Mobilya seçimi sadece bir eşya almak değildir; evinizin havasını, konforunu ve kullanım alanını yıllarca belirler. Bornova İstikbal mağazamızda süreç boyunca yanınızdayım.
              </p>
            </div>

            <div className={styles.bioBox}>
              <p>{consultantInfo.bio}</p>
            </div>

            <div className={styles.servicesHeader}>
              <h3>Size Sunacağım Ayrıcalıklar:</h3>
            </div>

            <ul className={styles.serviceList}>
              {consultantInfo.services.map((service, idx) => (
                <li key={idx} className={styles.serviceItem}>
                  <span className={styles.checkCircle}>
                    <CheckIcon size={16} />
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className={styles.ctaRow}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
              >
                <WhatsAppIcon size={18} />
                Serhat Bey ile İletişime Geç
              </a>
              <a href={`tel:${consultantInfo.phoneRaw}`} className="btn btn--dark">
                <PhoneIcon size={18} />
                Doğrudan Ara
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Card / Store Visit Highlight */}
          <div className={styles.cardSide}>
            <div className={styles.cardSideInner}>
              <div className={styles.sideHeader}>
                <div className={styles.iconCircle}>
                  <PinIcon size={24} />
                </div>
                <div>
                  <h3>Bornova Mağazamıza Davetlisiniz</h3>
                  <p>Forum Mobilya — İstikbal Showroom</p>
                </div>
              </div>

              <div className={styles.infoGroup}>
                <div className={styles.infoRow}>
                  <strong>📍 Adres:</strong>
                  <span>{consultantInfo.storeAddress}</span>
                </div>
                <div className={styles.infoRow}>
                  <strong>⏰ Çalışma Saatleri:</strong>
                  <span>{consultantInfo.workingHours}</span>
                </div>
                <div className={styles.infoRow}>
                  <strong>📞 Telefon:</strong>
                  <a href={`tel:${consultantInfo.phoneRaw}`}>{consultantInfo.phone}</a>
                </div>
              </div>

              <div className={styles.quoteBox}>
                <div className={styles.quoteMark}>“</div>
                <p>
                  Mağazamıza geldiğinizde beni sorabilirsiniz. Çayımız, kahvemiz eşliğinde eviniz için en güzel modelleri birlikte inceleyelim.
                </p>
                <div className={styles.quoteAuthor}>— Serhat Günay</div>
              </div>

              <a
                href={consultantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Google Haritalar&apos;da Aç ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
