import type { Metadata } from 'next';
import StoreSection from '@/components/home/StoreSection';
import Breadcrumb from '@/components/layout/Breadcrumb';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Mağazamız | Bornova Mobilya İzmir İstikbal Showroom',
  description: 'İzmir Bornova\'da İstikbal showroomumuza bekliyoruz. Detaylı yol tarifi, harita konumu ve iletişim bilgileri.',
  alternates: {
    canonical: 'https://www.bornovamobilya.com.tr/magazalarimiz',
  },
};

export default function StoresPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Mağazalarımız' }]} />
      </div>
      <StoreSection />
    </div>
  );
}
