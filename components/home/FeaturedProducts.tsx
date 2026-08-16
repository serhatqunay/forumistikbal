import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturedProducts.module.css';
import { getFeaturedProducts } from '@/app/data/products';
import { contactInfo } from '@/app/data/stores';
import { WhatsAppIcon } from '@/components/icons';
import ProductSchema from '@/components/seo/ProductSchema';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  const getWhatsAppLink = (prodName: string) => {
    const text = `Merhaba Serhat Bey, ${prodName} modeli hakkında mağaza fiyatı, kumaş seçenekleri ve 3D mimari destek almak istiyorum.`;
    return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className={`section ${styles.section}`}>
      <ProductSchema
        products={featured.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          image: product.imageUrl,
          url: `https://www.bornovamobilya.com.tr/urunler/${product.categorySlug}`,
          category: product.categoryName,
          price: product.price,
        }))}
      />
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Öne Çıkan Ürünler</div>
          <h2 className="section-title">En Çok Tercih Edilenler</h2>
          <p className="section-subtitle">
            Evini yenileyenlerin ve yeni evlenenlerin en çok tercih ettiği en popüler İstikbal koleksiyonlarını keşfedin.
          </p>
        </div>

        <div className={styles.grid}>
          {featured.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                  priority={false}
                />
                <span className={styles.badge}>{product.categoryName}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.desc}>{product.description}</p>
                <div className={styles.footer}>
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp btn--sm"
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                  >
                    <WhatsAppIcon size={14} />
                    <span>Fiyat Sor</span>
                  </a>
                  <a
                    href={product.istikbalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Resmi İncele ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.allProducts}>
          <Link href="/urunler" className="btn btn--outline btn--lg">
            Tüm Modelleri İncele
          </Link>
        </div>
      </div>
    </section>
  );
}
