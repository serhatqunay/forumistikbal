import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { TargetIcon, EyeIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Hakkımızda | Bornova Mobilya İzmir İstikbal Yetkili Mağazası',
  description:
    'İzmir Bornova\'da İstikbal Yetkili Satıcısı Bornova Mobilya (bornovamobilya.com.tr) olarak vizyonumuz, misyonumuz ve 3D mimari hizmet anlayışımız.',
  alternates: {
    canonical: 'https://www.bornovamobilya.com.tr/hakkimizda',
  },
  openGraph: {
    title: 'Hakkımızda | Bornova Mobilya İstikbal Yetkili Satıcısı İzmir',
    description:
      'İzmir Bornova\'da İstikbal yetkili satıcısı Bornova Mobilya. Misyonumuz, vizyonumuz ve 3D mimari hizmet anlayışımızı keşfedin.',
    url: 'https://www.bornovamobilya.com.tr/hakkimizda',
    images: [
      {
        url: 'https://www.bornovamobilya.com.tr/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bornova Mobilya İzmir Mağazası',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Hakkımızda' }]} />

        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className="section-label">Biz Kimiz?</div>
            <h1 className="section-title">Bornova Mobilya</h1>
            <p className={styles.lead}>
              Bornova mağazamızda İstikbal&apos;in kalite güvencesi ve Bornova Mobilya güler yüzlü hizmet anlayışıyla evlerinizi yeniliyoruz.
            </p>
            <div className={styles.body}>
              <p>
                Kurulduğumuz günden bu yana, müşteri memnuniyetini en ön planda tutarak İzmir genelinde binlerce aileyi hayallerindeki mobilyalarla buluşturduk. Ev dekorasyonunun sadece mobilya satın almak değil, bir yaşam tarzı inşa etmek olduğunun bilincindeyiz.
              </p>
              <p>
                İstikbal markasının getirdiği yenilikçi teknoloji, şık tasarımlar ve uzun ömürlü kullanım garantisini, mağazalarımızda deneyimli danışmanlarımızın güler yüzlü hizmeti ve profesyonel lojistik ekibimizle harmanlıyoruz. Satış anından kurulum sonrasına kadar her aşamada yanınızda oluyoruz.
              </p>
            </div>
            
            <div className={styles.values}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}><TargetIcon size={22} /></span>
                <h3>Misyonumuz</h3>
                <p>Müşterilerimize modern, fonksiyonel ve bütçe dostu ev mobilyası çözümlerini en üstün hizmet standartlarıyla ulaştırmak.</p>
              </div>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}><EyeIcon size={22} /></span>
                <h3>Vizyonumuz</h3>
                <p>İzmir genelinde mobilya ve ev dekorasyonu denilince akla gelen ilk, en güvenilir ve yenilikçi İstikbal iş ortağı olmak.</p>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/bornova-1.webp"
                alt="Bornova Mobilya İzmir Mağazası"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className={styles.aboutImage}
                priority
              />
              <div className={styles.badge}>
                <span>10+</span> Yıllık Tecrübe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
