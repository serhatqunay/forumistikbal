import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import FaqAccordion from './FaqAccordion';
import { faqs } from './faqs';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Bornova Mobilya İzmir İstikbal',
  description:
    'Bornova Mobilya İstikbal mağazası hakkında teslimat, taksit, 3D mimari çizim ve stok bilgileriyle ilgili sıkça sorulan sorular.',
  alternates: {
    canonical: 'https://www.bornovamobilya.com.tr/sss',
  },
};

export default function FaqPage() {
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
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={`container ${styles.breadcrumbRow}`}>
        <Breadcrumb items={[{ label: 'Sıkça Sorulan Sorular' }]} />
      </div>

      <div className={styles.headerBand}>
        <div className="container">
          <div className={styles.header}>
            <div className="section-label">SSS</div>
            <h1 className="section-title">Sıkça Sorulan Sorular</h1>
            <p className="section-subtitle">
              Bornova Mobilya hakkında merak ettiğiniz her şey bu sayfada.
              Bulamadığınız sorunuzu{' '}
              <a href="tel:05424468066" style={{ color: 'var(--gold)' }}>
                0542 446 80 66
              </a>{' '}
              veya Serhat Günay WhatsApp (0545 730 51 07) üzerinden bize sorabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <FaqAccordion faqs={faqs} />

        <div className={styles.cta}>
          <p>Hâlâ sorunuz mu var?</p>
          <div className={styles.ctaActions}>
            <Link href="/iletisim" className="btn btn--primary">
              İletişime Geçin
            </Link>
            <a
              href="https://wa.me/905457305107"
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp&apos;tan Yazın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
