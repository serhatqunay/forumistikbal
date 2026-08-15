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
    'İzmir Bornova mobilya mağazamızda en şık İstikbal koltuk takımları, L köşe koltuklar, yatak odaları, yemek odaları ve 3D mimari çizim desteği. Arama: 0542 446 80 66 | WhatsApp (Serhat Günay): 0545 730 51 07.',
  keywords: [
    'bornova mobilya',
    'bornova-mobilya',
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
    canonical: 'https://www.bornovamobilya.com.tr/bornova-mobilya',
  },
  openGraph: {
    title: 'Bornova Mobilya | İzmir Bornova İstikbal Mağazası & 3D Mimari Tasarım',
    description:
      'İzmir Bornova İstikbal yetkili mağazasında Serhat Günay ile birebir mobilya danışmanlığı, ev ölçülerinize özel 3D mimari çizim ve mağaza içi özel fiyat teklifleri.',
    url: 'https://www.bornovamobilya.com.tr/bornova-mobilya',
    type: 'website',
    images: [
      {
        url: 'https://www.bornovamobilya.com.tr/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bornova Mobilya — Serhat Günay İstikbal Mağazası',
      },
    ],
  },
};

export default function BornovaMobilyaPage() {
  const consultantSchema = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    '@id': 'https://www.bornovamobilya.com.tr/bornova-mobilya#store',
    name: 'Bornova Mobilya — Forum Mobilya İstikbal Yetkili Mağazası',
    url: 'https://www.bornovamobilya.com.tr/bornova-mobilya',
    logo: 'https://www.bornovamobilya.com.tr/logo.jpeg',
    image: 'https://www.bornovamobilya.com.tr/images/bornova-1.webp',
    telephone: '+905424468066',
    priceRange: '₺₺',
    description:
      'İzmir Bornova Kazımdirik Mahallesi 372/20 Sokak No:12 adresinde hizmet veren resmi İstikbal yetkili satış mağazası. Uzman Danışman Serhat Günay ile ev ölçülerinize özel 3D mimari çizim ve mobilya projelendirme.',
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
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bornova, İzmir' },
      { '@type': 'AdministrativeArea', name: 'Kazımdirik, Bornova' },
      { '@type': 'AdministrativeArea', name: 'Bayraklı, İzmir' },
      { '@type': 'AdministrativeArea', name: 'Karşıyaka, İzmir' },
    ],
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
