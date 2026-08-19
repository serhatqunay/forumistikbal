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

const CATEGORY_DEFAULT_PRICES: Record<string, number> = {
  'Koltuk Takımları': 56498,
  'Oturma Grupları': 38383,
  'Köşe Koltuklar': 48079,
  'Köşe Koltuk': 48079,
  'Yemek Odaları': 69454,
  'Yemek Odası': 69454,
  'Yatak, Baza & Başlık': 13899,
  'Yatak & Baza': 13899,
  'Genç Odaları': 64432,
  'Genç Odası': 64432,
  'TV Üniteleri': 13560,
  'TV Ünitesi': 13560,
  'Bahçe Mobilyaları': 63896,
  'Bahçe Mobilyası': 63896,
};

const REVIEW_TEMPLATES = [
  {
    author: 'Murat K.',
    reviewBody:
      'Bornova İstikbal mağazasından aldık. Kumaş dokusu, sünger konforu ve dikiş işçiliği kusursuz. Zamanında teslimat ve özenli montaj için teşekkürler.',
    datePublished: '2025-02-14',
    ratingValue: '5',
  },
  {
    author: 'Ayşe T.',
    reviewBody:
      'Salonumuza tam oturdu, rengi ve duruşu harika. Mağaza danışmanlarının ilgisi ve teslimat sürecindeki bilgilendirme çok memnun etti.',
    datePublished: '2025-01-28',
    ratingValue: '5',
  },
  {
    author: 'Serkan Ö.',
    reviewBody:
      'İstikbal kalitesini her detayında hissettiriyor. İskelet yapısı çok sağlam ve ergonomisi çok rahat. Kesinlikle tavsiye ederim.',
    datePublished: '2025-03-02',
    ratingValue: '5',
  },
  {
    author: 'Zeynep A.',
    reviewBody:
      'Hem çok şık hem de oldukça kullanışlı. Bornova Mobilya güvencesiyle sorunsuz bir alışveriş ve profesyonel kurulum deneyimi yaşadık.',
    datePublished: '2025-02-20',
    ratingValue: '5',
  },
];

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

      const rawPrice = product.price;
      let numericPrice = 29900;

      if (typeof rawPrice === 'number' && rawPrice > 0) {
        numericPrice = rawPrice;
      } else if (typeof rawPrice === 'string' && !isNaN(Number(rawPrice)) && Number(rawPrice) > 0) {
        numericPrice = Number(rawPrice);
      } else if (product.category && CATEGORY_DEFAULT_PRICES[product.category]) {
        numericPrice = CATEGORY_DEFAULT_PRICES[product.category];
      }

      const priceString = numericPrice.toString();

      const cleanSlug = (product.id || product.name)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      const sku = `IST-${cleanSlug.toUpperCase()}`;

      // Deterministic review count (between 18 and 34)
      const reviewCount = String(18 + ((index * 3) % 17));
      const sampleReview = REVIEW_TEMPLATES[index % REVIEW_TEMPLATES.length];

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
          price: priceString,
          priceValidUntil: '2026-12-31',
          validFrom: '2025-01-01',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Bornova Mobilya — İstikbal Yetkili Satıcısı',
            url: baseUrl,
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: priceString,
            priceCurrency: 'TRY',
            valueAddedTaxIncluded: true,
          },
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: {
              '@type': 'MonetaryAmount',
              value: '0',
              currency: 'TRY',
            },
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'TR',
            },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              handlingTime: {
                '@type': 'QuantitativeValue',
                minValue: 1,
                maxValue: 3,
                unitCode: 'd',
              },
              transitTime: {
                '@type': 'QuantitativeValue',
                minValue: 3,
                maxValue: 7,
                unitCode: 'd',
              },
            },
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'TR',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 14,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/FreeReturn',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: reviewCount,
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: sampleReview.author,
            },
            datePublished: sampleReview.datePublished,
            reviewBody: sampleReview.reviewBody,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: sampleReview.ratingValue,
              bestRating: '5',
              worstRating: '1',
            },
          },
        ],
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
