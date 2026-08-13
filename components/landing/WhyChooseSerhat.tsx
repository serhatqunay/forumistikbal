'use client';

import styles from './WhyChooseSerhat.module.css';
import { consultantInfo } from '@/app/data/consultantData';
import { ShieldIcon, TruckIcon, AwardIcon, PhoneIcon } from '@/components/icons';

const features = [
  {
    icon: <AwardIcon size={28} />,
    title: 'Birebir Danışmanlık',
    description: 'Evinizin salon ölçüsüne, ışık alanına ve dekorasyon tarzına göre en uygun İstikbal modellerini birlikte belirliyoruz.',
  },
  {
    icon: <TruckIcon size={28} />,
    title: 'Ücretsiz Sevkiyat & Montaj',
    description: 'Satın aldığınız ürünler Bornova, Karşıyaka, Buca, Konak ve tüm İzmir ilçelerine uzman ekibimizce ücretsiz kurulur.',
  },
  {
    icon: <ShieldIcon size={28} />,
    title: 'Yetkili Bayi Güvencesi',
    description: 'Forum Mobilya güvencesiyle %100 orijinal İstikbal fabrikasyon garantisi ve faturalı teslimat imkânı.',
  },
  {
    icon: <PhoneIcon size={28} />,
    title: 'Hızlı & Doğrudan İletişim',
    description: 'Çağrı merkezi beklemelerine son. Serhat Günay ile WhatsApp veya telefon üzerinden doğrudan mesajlaşabilirsiniz.',
  },
];

export default function WhyChooseSerhat() {
  return (
    <section className={`section ${styles.whySection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Bizi Farklı Kılan Özellikler</div>
          <h2 className="section-title">Bornova İstikbal&apos;de Serhat Günay İle Alışveriş Ayrıcalığı</h2>
          <p className="section-subtitle">
            Müşterilerimize sadece mobilya satmıyor, yaşam alanlarına değer katacak doğru seçimler yapmalarını sağlıyoruz.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.iconContainer}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
