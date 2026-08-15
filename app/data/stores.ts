export interface Store {
  id: string;
  name: string;
  address: string;
  streetAddress: string;
  postalCode: string;
  district: string;
  city: string;
  phone: string;
  telephoneIntl: string;
  mobilePhone?: string;
  email: string;
  workingHours: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  instagram?: string;
  lat: number;
  lng: number;
  schemaDescription: string;
  seoText: string;
  images: string[];
}

export const stores: Store[] = [
  {
    id: 'bornova',
    name: 'Forum Mobilya — Bornova',
    address: 'Kazımdirik, 372/20. Sk. No:12, 35100 Bornova/İzmir',
    streetAddress: 'Kazımdirik, 372/20. Sk. No:12',
    postalCode: '35100',
    district: 'Bornova',
    city: 'İzmir',
    phone: '0232 339 29 19',
    telephoneIntl: '+902323392919',
    mobilePhone: '0542 446 80 66',
    email: 'info@forummobilya.com.tr',
    workingHours: 'Pzt – Cmt: 09:00–21:00 | Pazar: 10:00–21:00',
    googleMapsUrl: 'https://maps.app.goo.gl/KFitjCmuZhD3tzBu8',
    googleMapsEmbed:
      'https://www.google.com/maps?q=Kaz%C4%B1mdirik,+372/20.+Sk.+No:12,+35100+Bornova/%C4%B0zmir&z=16&output=embed',
    instagram: 'https://www.instagram.com/istikbalforummobilya/',
    lat: 38.4487566,
    lng: 27.2115294,
    schemaDescription:
      'İzmir Bornova\'da İstikbal Yetkili Satıcısı Forum Mobilya. Oturma odası, yatak odası, yemek odası takımları.',
    seoText: `Forum Mobilya Bornova mağazamız, İzmir'in en işlek bölgelerinden Bornova'da İstikbal'in resmi yetkili satıcısı olarak hizmet vermektedir. Bornova mobilya alışverişinde aradığınız koltuk takımı, oturma grubu, yatak odası, yemek odası ve genç odası modellerinin tamamını showroomumuzda birebir inceleyebilirsiniz.
Bornova ve çevresindeki Evka mahalleleri, Kazımdirik, Erzene, Manavkuyu ve Çamdibi gibi bölgelerden gelen müşterilerimize uzman satış danışmanlarımız eşliğinde doğru mobilya seçiminde destek oluyoruz. Satın aldığınız ürünler için İzmir geneline ücretsiz montajlı teslimat imkânı sunuyoruz.
İstikbal'in güncel koleksiyonlarını uygun taksit seçenekleriyle Bornova mağazamızda keşfedin; ihtiyacınıza en uygun mobilyayı bulmanız için yanınızdayız.`,
    images: ['/images/bornova-1.webp', '/images/bornova-2.webp', '/images/bornova-3.webp'],
  },
];

export function getStoreBySlug(id: string): Store | undefined {
  return stores.find((s) => s.id === id);
}

export const contactInfo = {
  phone1: '0232 339 29 19',
  phone2: '0542 446 80 66',
  email: 'info@bornovamobilya.com.tr',
  whatsapp: '905457305107',
  whatsappMessage: 'Merhaba Serhat Bey, Bornova İstikbal mobilya modelleri, mimari çizim ve özel fiyat teklifi hakkında bilgi almak istiyorum.',
  instagram: 'https://www.instagram.com/istikbalforummobilya/',
  facebook: null as null,
};

const LOGO_URL = 'https://www.bornovamobilya.com.tr/logo.jpeg';

export function buildStoreSchema(store: Store) {
  return {
    '@type': 'FurnitureStore',
    '@id': `https://www.bornovamobilya.com.tr/#${store.id}-store`,
    name: `${store.name} — Bornova Mobilya İstikbal Yetkili Satıcısı`,
    url: `https://www.bornovamobilya.com.tr/magazalarimiz/${store.id}`,
    logo: LOGO_URL,
    image: LOGO_URL,
    description: store.schemaDescription,
    priceRange: '₺₺',
    telephone: store.telephoneIntl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: store.streetAddress,
      addressLocality: store.district,
      addressRegion: store.city,
      postalCode: store.postalCode,
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: store.lat,
      longitude: store.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '21:00',
      },
    ],
    sameAs: [store.instagram, 'https://www.istikbal.com.tr'].filter(Boolean),
  };
}
