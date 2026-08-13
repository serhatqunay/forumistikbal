export interface ProductSchemaItem {
  name: string;
  description: string;
  image: string;
  url: string;
  category?: string;
}

export default function ProductSchema({ products }: { products: ProductSchemaItem[] }) {
  const schema = products.map((product) => ({
    '@context': 'https://schema.org',
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
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
