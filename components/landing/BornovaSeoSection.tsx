'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './BornovaSeoSection.module.css';
import { WhatsAppIcon, SparklesIcon, ChevronRightIcon, PinIcon, ClockIcon } from '@/components/icons';
import { consultantInfo, getConsultantWhatsAppUrl } from '@/app/data/consultantData';
import { stores } from '@/app/data/stores';

const bornovaStore = stores[0];

const faqs = [
  {
    question: 'İzmir Bornova mobilya mağazanızda hangi İstikbal modellerini bulabilirim?',
    answer: 'Bornova Forum Mobilya İstikbal Yetkili Mağazamızda en yeni İstikbal koltuk takımları, L köşe koltuklar, yatak odası takımları, yemek masaları, sandıklı bazalar, ortopedik yataklar ve modüler genç odası takımlarının tamamı sergilenmektedir.'
  },
  {
    question: 'Evinizin ölçülerine özel 3D Mimari Çizim ve Danışmanlık hizmeti ücretsiz mi?',
    answer: 'Evet! Satış Danışmanınız Serhat Günay ile salonunuzun, yatak odanızın veya mutfağınızın ölçülerini bize ilettiğinizde eviniz için en doğru mobilya yerleşimini ve 3D çizim projesini tamamen ücretsiz olarak hazırlıyoruz.'
  },
  {
    question: 'Bornova mobilya siparişlerimde teslimat ve montaj ücretli mi?',
    answer: 'Hayır. Forum Mobilya Bornova mağazamızdan satın aldığınız tüm ürünler, İzmir geneline (Bornova, Bayraklı, Karşıyaka, Buca, Konak vb.) kendi uzman montaj ekiplerimiz tarafından ücretsiz olarak teslim edilir ve kurulumu yapılır.'
  },
  {
    question: 'Bornova mağazanızın adresi ve çalışma saatleri nedir?',
    answer: `Mağazamız Kazımdirik, 372/20. Sk. No:12, 35100 Bornova/İzmir adresinde yer almaktadır. Çalışma saatlerimiz: Pazartesi – Cumartesi 09:00 – 21:00, Pazar günleri ise 10:00 – 21:00 saatleri arasındadır.`
  }
];

export default function BornovaSeoSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const whatsappUrl = getConsultantWhatsAppUrl(
    'Merhaba Serhat Bey, Bornova mobilya modelleri, 3D mimari çizim ve özel fiyat teklifi hakkında bilgi almak istiyorum.'
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={`section ${styles.section}`} id="bornova-mobilya-rehberi">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className={styles.wrapper}>
          {/* Main Article Content */}
          <article className={styles.article}>
            <div className={styles.header}>
              <div className="section-label">İzmir Bornova Mobilya Rehberi</div>
              <h2 className={styles.title}>
                İzmir Bornova Mobilya Mağazası &amp; İstikbal Yetkili Satıcısı
              </h2>
              <p className={styles.lead}>
                İzmir&apos;in kalbi Bornova&apos;da yaşam alanlarınızı yeniden şekillendirmek için İstikbal&apos;in en yeni ve en popüler koleksiyonlarını Forum Mobilya güvencesiyle sunuyoruz.
              </p>
            </div>

            <div className={styles.bodyText}>
              <p>
                <strong>Bornova mobilya</strong> alışverişlerinizde kalite, şıklık ve konforu bir arada sunan mağazamız; Kazımdirik, Manavkuyu, Erzene, Özkanlar, Evka 3 ve Çamdibi başta olmak üzere İzmir genelinden binlerce mutlu müşteriye hizmet vermektedir.
              </p>

              <h3>Neden Bornova Mobilya Alışverişinde Forum Mobilya?</h3>
              <ul>
                <li>
                  <strong>Birebir 3D Mimari Çizim Desteği:</strong> Evinizin planına ve ölçülerine birebir uygun koltuk ve mobilya yerleşimi.
                </li>
                <li>
                  <strong>İstikbal Resmi Garantisi:</strong> Türkiye&apos;nin 1 numaralı mobilya üreticisi İstikbal kalitesi ve satış sonrası güvencesi.
                </li>
                <li>
                  <strong>İzmir Geneline Ücretsiz Teslimat &amp; Montaj:</strong> Satın aldığınız tüm mobilyalar adresinize kadar uzman ekibimizce ücretsiz kurulur.
                </li>
                <li>
                  <strong>Mağaza İçi Özel Fiyat &amp; Taksit İmkanı:</strong> Farklı ödeme seçenekleri ve özel sürpriz indirimler.
                </li>
              </ul>

              <h3>Bornova Koltuk Takımları &amp; L Köşe Modelleri</h3>
              <p>
                Salonunuzun havasını değiştirecek leke tutmayan silinebilir kumaşlı <em>Bornova koltuk takımları</em>, yataklı ve sandıklı modüler köşe koltuklar showroomumuzda sizi bekliyor. Danışmanınız <strong>Serhat Günay</strong> ile bütçenize ve evinizin ölçüsüne en uygun takımı hemen belirleyebilirsiniz.
              </p>
            </div>

            {/* Category Quick Links */}
            <div className={styles.quickLinks}>
              <span className={styles.quickLinksTitle}>Popüler Bornova Mobilya Kategorileri:</span>
              <div className={styles.linkGrid}>
                <Link href="/urunler/koltuk-takimlari" className={styles.catPill}>
                  🛋️ Koltuk Takımları →
                </Link>
                <Link href="/urunler/kose-koltuk" className={styles.catPill}>
                  📐 Köşe Koltuklar (L Koltuk) →
                </Link>
                <Link href="/urunler/yatak-baza-baslik" className={styles.catPill}>
                  🛏️ Yatak, Baza &amp; Başlık →
                </Link>
                <Link href="/urunler/yemek-odalari" className={styles.catPill}>
                  🪑 Yemek Odası Takımları →
                </Link>
                <Link href="/urunler/genc-odalari" className={styles.catPill}>
                  🎒 Genç Odaları →
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar / FAQ Section */}
          <aside className={styles.sidebar}>
            {/* Quick Contact Card */}
            <div className={styles.contactCard}>
              <h3 className={styles.cardHeading}>Danışmanınızdan Fiyat &amp; Çizim İsteyin</h3>
              <p className={styles.cardDesc}>
                Serhat Günay ile evinizin ölçülerine özel 3D yerleşim çizimi ve mağaza içi fiyat teklifinizi anında alın.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <WhatsAppIcon size={20} />
                <span>Serhat Günay (WhatsApp)</span>
              </a>
              <div className={styles.infoMeta}>
                <div><PinIcon size={16} /> <span>{bornovaStore.address}</span></div>
                <div><ClockIcon size={16} /> <span>{bornovaStore.workingHours}</span></div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className={styles.faqSection}>
              <h3 className={styles.faqTitle}>Sıkça Sorulan Sorular</h3>
              <div className={styles.faqList}>
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}
                    >
                      <button
                        className={styles.faqQuestion}
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronRightIcon
                          size={16}
                          className={`${styles.faqChevron} ${isOpen ? styles.rotate : ''}`}
                        />
                      </button>
                      {isOpen && <p className={styles.faqAnswer}>{faq.answer}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
