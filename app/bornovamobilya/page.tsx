import type { Metadata } from 'next';
import ConsultantHero from '@/components/landing/ConsultantHero';
import ConsultantProfile from '@/components/landing/ConsultantProfile';
import ProductShowcaseGallery from '@/components/landing/ProductShowcaseGallery';
import WhyChooseSerhat from '@/components/landing/WhyChooseSerhat';
import BornovaSeoSection from '@/components/landing/BornovaSeoSection';
import BornovaStoreMap from '@/components/landing/BornovaStoreMap';
import FloatingContactBar from '@/components/landing/FloatingContactBar';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { consultantInfo } from '@/app/data/consultantData';

export const metadata: Metadata = {
  title: 'Bornova Mobilya | İzmir Bornova İstikbal Mağazası & 3D Mimari Tasarım',
  description:
    'İzmir Bornova mobilya mağazamızda en şık İstikbal koltuk takımları, L köşe koltuklar, yatak odaları, yemek odaları ve 3D mimari çizim desteği. Danışmanınız Serhat Günay ile hemen iletişime geçin.',
  keywords: [
    'bornova mobilya',
    'bornova mobilya mağazaları',
    'izmir bornova mobilya',
    'bornova istikbal',
    'bornova koltuk takımı',
    'bornova yatak odası',
    'bornova yemek odası',
    'izmir bornova mobilyacılar',
    'bornova l koltuk köşe takımı',
    'kazımdirik mobilya mağazası',
    'bornova çamdibi manavkuyu mobilya',
    'serhat günay mobilya',
    'bornova mobilya fiyatları',
  ],
  alternates: {
    canonical: 'https://www.forummobilya.com.tr/bornovamobilya',
  },
  openGraph: {
    title: 'Bornova Mobilya | İzmir Bornova İstikbal Mağazası & 3D Mimari Tasarım',
    description:
      'İzmir Bornova İstikbal yetkili mağazasında Serhat Günay ile birebir mobilya danışmanlığı, ev ölçülerinize özel 3D mimari çizim ve mağaza içi özel fiyat teklifleri.',
    url: 'https://www.forummobilya.com.tr/bornovamobilya',
    type: 'website',
  },
};

export default function BornovaMobilyaPage() {
  const consultantSchema = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: 'Bornova Mobilya — Forum Mobilya İstikbal Yetkili Mağazası',
    image: 'https://www.forummobilya.com.tr/uploads/settings/forum-mobilya-4054557.webp',
    telephone: '+905457305107',
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kazımdirik, 372/20. Sk. No:12',
      addressLocality: 'Bornova',
      addressRegion: 'İzmir',
      postalCode: '35100',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.4487566,
      longitude: 27.2115294,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '21:00',
      },
    ],
    employee: {
      '@type': 'Person',
      name: consultantInfo.name,
      jobTitle: consultantInfo.title,
      telephone: consultantInfo.phone,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultantSchema) }}
      />
      <LocalBusinessSchema />
      <main>
        <ConsultantHero />
        <ConsultantProfile />
        <ProductShowcaseGallery />
        <WhyChooseSerhat />
        <BornovaSeoSection />
        <BornovaStoreMap />
      </main>
      <FloatingContactBar />
    </>
  );
}
