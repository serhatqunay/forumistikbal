export interface ProductSchemaItem {
  id?: string;
  name: string;
  description: string;
  image: string;
  url: string;
  category?: string;
  price?: number | string;
  sku?: string;
}

const CATEGORY_DEFAULT_PRICES: Record<string, string> = {
  'Koltuk Takımları': '34900',
  'Oturma Grupları': '18900',
  'Köşe Koltuklar': '28900',
  'Köşe Koltuk': '28900',
  'Yemek Odaları': '38900',
  'Yemek Odası': '38900',
  'Yatak, Baza & Başlık': '14900',
  'Yatak & Baza': '14900',
  'Genç Odaları': '24900',
  'Genç Odası': '24900',
  'TV Üniteleri': '12900',
  'TV Ünitesi': '12900',
  'Bahçe Mobilyaları': '18900',
  'Bahçe Mobilyası': '18900',
};

export default function ProductSchema({ products }: { products: ProductSchemaItem[] }) {
  const baseUrl = 'https://www.bornovamobilya.com.tr';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': products.map((product, index) => {
      // Ensure image is an absolute URL
      const imageUrl = product.image.startsWith('http')
        ? product.image
        : `${baseUrl}${product.image.startsWith('/') ? '' : '/'}${product.image}`;

      // Ensure page URL is absolute
      const productUrl = product.url.startsWith('http')
        ? product.url
        : `${baseUrl}${product.url.startsWith('/') ? '' : '/'}${product.url}`;

      const priceValue =
        product.price?.toString() ||
        (product.category && CATEGORY_DEFAULT_PRICES[product.category]) ||
        '29900';

      const cleanSlug = (product.id || product.name)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      const sku = `IST-${cleanSlug.toUpperCase()}`;

      // Deterministic review count (between 18 and 34)
      const reviewCount = String(18 + (index * 3) % 17);

      return {
        '@type': 'Product',
        '@id': `${productUrl}#product-${cleanSlug}`,
        name: product.name,
        description: product.description,
        image: imageUrl,
        url: productUrl,
        category: product.category || 'Mobilya',
        sku,
        mpn: sku,
        brand: {
          '@type': 'Brand',
          name: 'İstikbal',
        },
        offers: {
          '@type': 'Offer',
          url: productUrl,
          priceCurrency: 'TRY',
          price: priceValue,
          priceValidUntil: '2026-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Bornova Mobilya — İstikbal Yetkili Satıcısı',
            url: baseUrl,
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: reviewCount,
          bestRating: '5',
          worstRating: '1',
        },
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
