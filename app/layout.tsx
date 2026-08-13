import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import OrganizationSchema from '@/components/seo/OrganizationSchema';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a2e',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bornovamobilya.com.tr'),

  title: {
    default: 'Bornova Mobilya — İzmir Bornova İstikbal Yetkili Mağazası',
    template: '%s | Bornova Mobilya İzmir',
  },
  description:
    'İzmir Bornova\'da İstikbal Yetkili Satıcısı Forum Mobilya (bornovamobilya.com.tr). En şık koltuk takımları, yatak odaları, yemek odaları, köşe koltuklar ve 3D mimari destek.',
  keywords: [
    'bornova mobilya',
    'bornovamobilya.com.tr',
    'bornova mobilya mağazaları',
    'izmir bornova mobilya',
    'bornova istikbal mobilya',
    'bornova koltuk takımı',
    'bornova l koltuk köşe takımı',
    'bornova yatak odası modelleri',
    'bornova yemek odası takımları',
    'izmir mobilya mağazaları',
    'kazımdirik mobilya mağazası',
    'bornova çamdibi manavkuyu mobilya',
    'serhat günay mobilya',
    'bornova mobilya fiyatları',
  ],
  authors: [{ name: 'Bornova Mobilya — Forum Mobilya' }],
  creator: 'Bornova Mobilya',
  publisher: 'Bornova Mobilya',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.bornovamobilya.com.tr',
    siteName: 'Bornova Mobilya',
    title: 'Bornova Mobilya — İzmir Bornova İstikbal Yetkili Mağazası',
    description:
      'İzmir Bornova\'da İstikbal Yetkili Satıcısı. En yeni mobilya koleksiyonları, 3D mimari tasarım ve mağaza özel indirim fırsatları.',
    images: [
      {
        url: 'https://www.bornovamobilya.com.tr/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bornova Mobilya — İzmir Bornova İstikbal Yetkili Mağazası',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bornova Mobilya — İzmir Bornova İstikbal Yetkili Mağazası',
    description:
      'İzmir Bornova\'da İstikbal Yetkili Satıcısı. En yeni mobilya koleksiyonları ve 3D mimari çizim desteği.',
    images: ['https://www.bornovamobilya.com.tr/logo.jpeg'],
  },
  alternates: {
    canonical: 'https://www.bornovamobilya.com.tr',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = 'GTM-TSD8HHKK';

  return (
    <html lang="tr">
      <head>
        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* PWA & Icons */}
        <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body>
        <OrganizationSchema />
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFab />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
      </body>
    </html>
  );
}
