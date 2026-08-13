import { stores, buildStoreSchema } from '@/app/data/stores';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': stores.map(buildStoreSchema),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
