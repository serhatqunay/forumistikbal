import { contactInfo, stores } from '@/app/data/stores';

export default function OrganizationSchema() {
  const sameAs = [
    ...stores.map((store) => store.instagram).filter(Boolean),
    'https://www.istikbal.com.tr',
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.bornovamobilya.com.tr/#organization',
    name: 'Bornova Mobilya',
    legalName: 'Bornova Mobilya — Forum Mobilya İstikbal Yetkili Satıcısı',
    url: 'https://www.bornovamobilya.com.tr',
    logo: 'https://www.bornovamobilya.com.tr/logo.jpeg',
    image: 'https://www.bornovamobilya.com.tr/logo.jpeg',
    description:
      'İzmir Bornova\'da İstikbal Yetkili Satıcısı Bornova Mobilya (bornovamobilya.com.tr).',
    telephone: contactInfo.phone1,
    email: contactInfo.email,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
