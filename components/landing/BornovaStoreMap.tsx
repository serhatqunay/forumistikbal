'use client';

import styles from './BornovaStoreMap.module.css';
import { consultantInfo, getConsultantWhatsAppUrl } from '@/app/data/consultantData';
import { PinIcon, PhoneIcon, ClockIcon, WhatsAppIcon } from '@/components/icons';

export default function BornovaStoreMap() {
  const whatsappUrl = getConsultantWhatsAppUrl('Merhaba Serhat Bey, Bornova mağazanızın konumunu ve ulaşım bilgisini paylaşır mısınız?');

  return (
    <section className={`section ${styles.mapSection}`} id="magaza-konumu">
      <div className="container">
        <div className={styles.mapCard}>
          <div className={styles.infoContent}>
            <div className={styles.badge}>Mağaza Ulaşım & İletişim</div>
            <h2 className={styles.title}>Bornova İstikbal Showroom&apos;umuzu Ziyaret Edin</h2>
            <p className={styles.subtitle}>
              Ürünleri canlı dokunup incelemek, kumaş kartelalarına bakmak ve kahvemizi içmek için Bornova showroom&apos;umuza davetlisiniz.
            </p>

            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <span className={styles.iconCircle}><PinIcon size={20} /></span>
                <div>
                  <strong>Adres</strong>
                  <span>{consultantInfo.storeAddress}</span>
                </div>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.iconCircle}><PhoneIcon size={20} /></span>
                <div>
                  <strong>Satış Danışmanı Serhat Günay</strong>
                  <a href={`tel:${consultantInfo.phoneRaw}`}>{consultantInfo.phone}</a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.iconCircle}><ClockIcon size={20} /></span>
                <div>
                  <strong>Çalışma Saatleri</strong>
                  <span>{consultantInfo.workingHours}</span>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href={consultantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--dark"
              >
                Yol Tarifi Al ↗
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
              >
                <WhatsAppIcon size={18} />
                WhatsApp&apos;tan Konum İste
              </a>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              src={consultantInfo.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="İstikbal Bornova Forum Mobilya Google Haritası"
              className={styles.mapFrame}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
