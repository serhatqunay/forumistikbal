import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı | Forum Mobilya',
  description: 'Aradığınız sayfa bulunamadı. Forum Mobilya ana sayfasına dönerek ürünlerimizi keşfedebilirsiniz.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
        fontFamily: 'var(--font-heading, sans-serif)',
      }}
    >
      <div
        style={{
          fontSize: '7rem',
          fontWeight: 900,
          lineHeight: 1,
          background: 'linear-gradient(135deg, #c9a84c, #a8741a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
        }}
      >
        404
      </div>

      <h1
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
          fontWeight: 800,
          color: '#1a1a2e',
          marginBottom: '1rem',
        }}
      >
        Sayfa Bulunamadı
      </h1>

      <p
        style={{
          fontSize: '1.05rem',
          color: '#6b7280',
          maxWidth: '460px',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}
      >
        Aradığınız sayfa taşınmış ya da silinmiş olabilir. Endişelenmeyin —
        harika mobilyalar sizi bekliyor!
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn--primary">
          Ana Sayfaya Dön
        </Link>
        <Link href="/urunler" className="btn btn--outline">
          Ürünleri İncele
        </Link>
        <Link href="/iletisim" className="btn btn--dark">
          Bize Ulaşın
        </Link>
      </div>

      <p style={{ marginTop: '3rem', fontSize: '0.85rem', color: '#9ca3af' }}>
        Sorun devam ederse{' '}
        <a
          href="tel:02323392919"
          style={{ color: '#c9a84c', textDecoration: 'underline' }}
        >
          0232 339 29 19
        </a>{' '}
        numaramızı arayabilirsiniz.
      </p>
    </div>
  );
}
