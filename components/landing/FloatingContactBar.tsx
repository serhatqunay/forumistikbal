'use client';

import styles from './FloatingContactBar.module.css';
import { consultantInfo, getConsultantWhatsAppUrl } from '@/app/data/consultantData';
import { WhatsAppIcon, PhoneIcon } from '@/components/icons';

export default function FloatingContactBar() {
  const whatsappUrl = getConsultantWhatsAppUrl();
  const phoneUrl = `tel:${consultantInfo.phoneRaw}`;

  return (
    <aside className={styles.floatingBar} aria-label="Hızlı İletişim">
      <div className={styles.container}>
        <div className={styles.consultantMinInfo}>
          <span className={styles.onlineDot} />
          <div>
            <strong>{consultantInfo.name}</strong>
            <span>{consultantInfo.title}</span>
          </div>
        </div>

        <div className={styles.btnGroup}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btnFloat} ${styles.btnWhatsapp}`}
            aria-label="WhatsApp ile Mesaj Gönder"
          >
            <WhatsAppIcon size={20} />
            <span>WhatsApp</span>
          </a>
          <a
            href={phoneUrl}
            className={`${styles.btnFloat} ${styles.btnCall}`}
            aria-label="Telefon ile Ara"
          >
            <PhoneIcon size={18} />
            <span>{consultantInfo.phone}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
