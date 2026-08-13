export interface ProductSchemaItem {
  name: string;
  description: string;
  image: string;
  url: string;
  category?: string;
}

export default function ProductSchema({ products }: { products: ProductSchemaItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': products.map((product) => ({
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.image,
      url: product.url,
      category: product.category,
      brand: {
        '@type': 'Brand',
        name: 'İstikbal',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'TRY',
        availability: 'https://schema.org/InStock',
        url: product.url,
        seller: {
          '@type': 'Organization',
          name: 'Bornova Mobilya',
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
