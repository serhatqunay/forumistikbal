'use client';

import styles from './WhyUs.module.css';

const values = [
  {
    title: 'İstikbal Yetkili Satıcısı Güvencesi',
    description: 'Türkiye\'nin lider mobilya markası İstikbal\'in resmi garantisi ve satış sonrası desteğiyle, güvenle alışveriş yapın.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Ölçülerinize Göre Ücretsiz Mimari Tasarım Desteği',
    description: 'Evinizin ölçülerini iletin; Danışmanınız Serhat Günay ile salonunuza özel 3D mimari çizim ve mobilya yerleşim projenizi ücretsiz hazırlayalım.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6M9 18h6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Ücretsiz Montaj & Uygun Taksit',
    description: 'Satın aldığınız tüm mobilyalar İzmir geneline uzman ekibimizce ücretsiz teslim edilir ve uygun taksit seçenekleri sunulur.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.5 7.5h11v9h-11z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5 10.5h3.5l3 3v3h-6.5z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6.5" cy="18" r="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16.5" cy="18" r="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Neden Forum Mobilya?</h2>
        </div>

        <div className={styles.grid}>
          {values.map((val, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>{val.icon}</div>
              <h3 className={styles.cardTitle}>{val.title}</h3>
              <p className={styles.cardDesc}>{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
