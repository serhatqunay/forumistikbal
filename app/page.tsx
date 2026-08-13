import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ArchitecturalSection from '@/components/home/ArchitecturalSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import WhyUs from '@/components/home/WhyUs';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StoreSection from '@/components/home/StoreSection';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Bornova Mobilya | İzmir Bornova İstikbal Mağazası & Koltuk Takımları',
  description:
    'İzmir Bornova mobilya mağazamızda (bornovamobilya.com.tr) en şık İstikbal koltuk takımları, L köşe koltuklar, yatak odaları, yemek odaları ve 3D mimari destek.',
  alternates: {
    canonical: 'https://www.bornovamobilya.com.tr',
  },
  openGraph: {
    title: 'Bornova Mobilya | İzmir Bornova İstikbal Mağazası & Koltuk Takımları',
    description: 'Bornova mobilya şubemizde en şık İstikbal koltuk takımı, L koltuk, yatak odası ve yemek odası modelleri.',
    url: 'https://www.bornovamobilya.com.tr',
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <HeroSection />
      <ArchitecturalSection />
      <CategoryGrid />
      <WhyUs />
      <FeaturedProducts />
      <StoreSection />
    </>
  );
}
