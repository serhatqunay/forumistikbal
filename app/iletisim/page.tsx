import type { Metadata } from 'next';
import styles from './page.module.css';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { stores, contactInfo } from '@/app/data/stores';
import { PhoneIcon, MobileIcon, MailIcon, PinIcon, ClockIcon } from '@/components/icons';

const bornovaStore = stores.find((s) => s.id === 'bornova')!;

export const metadata: Metadata = {
  title: 'İletişim & Harita | Bornova Mobilya İzmir İstikbal',
  description:
    'Bornova Mobilya mağazamızın (Kazımdirik) adres, telefon (0545 730 51 07), çalışma saatleri ve yol tarifi harita bilgileri.',
  alternates: {
    canonical: 'https://www.bornovamobilya.com.tr/iletisim',
  },
  openGraph: {
    title: 'İletişim & Harita | Bornova Mobilya İzmir İstikbal Mağazası',
    description:
      'Bornova Mobilya: 0232 339 29 19 / 0545 730 51 07. Kazımdirik Mahallesi adres, çalışma saatleri ve Yol Tarifi.',
    url: 'https://www.bornovamobilya.com.tr/iletisim',
    images: [
      {
        url: 'https://www.bornovamobilya.com.tr/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bornova Mobilya İletişim — Bornova Mağazası',
      },
    ],
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

  return (
    <div className={styles.page}>
      <div className={`container ${styles.breadcrumbRow}`}>
        <Breadcrumb items={[{ label: 'İletişim' }]} />
      </div>

      <div className={styles.headerBand}>
        <div className="container">
          <div className={styles.header}>
            <div className="section-label">İletişime Geçin</div>
            <h1 className="section-title">Bornova Mobilya İletişim &amp; Konum</h1>
            <p className="section-subtitle">
              İstikbal ürünleri hakkında bilgi, özel fiyat teklifi ve 3D mimari destek için hemen ulaşın.
            </p>
          </div>
        </div>
      </div>

      <div className="container">

        <div className={styles.wrapper}>
          {/* Left: Contact Info */}
          <div className={styles.info}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Hızlı İletişim Hatları</h2>
              <div className={styles.contactDetails}>
                <a href={`tel:${contactInfo.phone1}`} className={styles.link}>
                  <span className={styles.icon}><PhoneIcon size={20} /></span>
                  <div>
                    <strong>Bornova Mağaza Telefonu</strong>
                    <span>{contactInfo.phone1}</span>
                  </div>
                </a>
                <a href={`tel:${contactInfo.phone2}`} className={styles.link}>
                  <span className={styles.icon}><MobileIcon size={20} /></span>
                  <div>
                    <strong>GSM &amp; WhatsApp (Serhat Günay)</strong>
                    <span>{contactInfo.phone2}</span>
                  </div>
                </a>
                <a href={`mailto:${contactInfo.email}`} className={styles.link}>
                  <span className={styles.icon}><MailIcon size={20} /></span>
                  <div>
                    <strong>E-posta Adresimiz</strong>
                    <span>{contactInfo.email}</span>
                  </div>
                </a>
              </div>
              <div className={styles.cta}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--lg"
                >
                  WhatsApp ile Ulaşın
                </a>
              </div>
            </div>

            {/* Store details list */}
            {stores.map((store) => (
              <div key={store.id} className={styles.storeCard}>
                <h3 className={styles.storeTitle}>{store.name}</h3>
                <p className={styles.storeAddress}><PinIcon size={16} /> {store.address}</p>
                {store.mobilePhone && <p className={styles.storePhone}><PhoneIcon size={16} /> {store.mobilePhone}</p>}
                <p className={styles.storeHours}><ClockIcon size={16} /> {store.workingHours}</p>
              </div>
            ))}
          </div>

          {/* Right: Haritalar */}
          <div className={styles.maps}>
            <div className={styles.mapContainer}>
              <h3>Bornova Showroom Haritası</h3>
              <iframe
                src={bornovaStore.googleMapsEmbed}
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                title="Bornova Mağazası Google Haritası"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
