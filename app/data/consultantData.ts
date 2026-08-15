export interface ConsultantInfo {
  name: string;
  title: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  storeName: string;
  storeAddress: string;
  workingHours: string;
  mapsUrl: string;
  mapsEmbed: string;
  experienceYears: string;
  bio: string;
  services: string[];
}

export interface ShowcaseProduct {
  id: string;
  name: string;
  category: 'koltuk' | 'kose' | 'yemek' | 'yatak' | 'genc' | 'tv' | 'bahce';
  categoryLabel: string;
  description: string;
  badge?: string;
  features: string[];
  imageUrl: string;
}

export const consultantInfo: ConsultantInfo = {
  name: 'Serhat Günay',
  title: 'Mobilya Satış Danışmanı',
  phone: '0542 446 80 66',
  phoneRaw: '05424468066',
  whatsappNumber: '905457305107',
  storeName: 'Forum Mobilya — İstikbal Bornova Mağazası',
  storeAddress: 'Kazımdirik, 372/20. Sk. No:12, 35100 Bornova/İzmir',
  workingHours: 'Pzt – Cmt: 09:00–21:00 | Pazar: 10:00–21:00',
  mapsUrl: 'https://maps.app.goo.gl/KFitjCmuZhD3tzBu8',
  mapsEmbed: 'https://www.google.com/maps?q=Kaz%C4%B1mdirik,+372/20.+Sk.+No:12,+35100+Bornova/%C4%B0zmir&z=16&output=embed',
  experienceYears: 'Uzman Danışmanlık',
  bio: 'Bornova İstikbal mağazamızda evinizin ölçüsüne, tarzına ve bütçesine en uygun mobilyayı bulmanız için 3D mimari çizim ve birebir satış danışmanlığı veriyorum. Fiyat teklifi, mimari çizim desteği, katalog gönderimi ve özel indirimler için bana doğrudan ulaşabilirsiniz.',
  services: [
    'Ev Ölçülerinize Göre 3D Mimari Çizim & Modüler Yerleşim',
    'Birebir Kişiye Özel Mobilya Danışmanlığı',
    'Mağaza İçi Özel Fiyat Teklifi ve Taksit Avantajları',
    'İzmir Geneline Ücretsiz Teslimat & Profesyonel Montaj',
    'WhatsApp Üzerinden 3D Çizim, Katalog & Kumaş Seçenekleri',
  ],
};

export const showcaseProducts: ShowcaseProduct[] = [
  {
    id: 'legato-koltuk',
    name: 'Legato Koltuk Takımı',
    category: 'koltuk',
    categoryLabel: 'Koltuk Takımı',
    badge: 'En Çok Tercih Edilen',
    description: 'Sade hatları ve geniş oturum yüzeyiyle her salona uyum sağlayan, pratik yatak olabilme özellikli modern koltuk takımı.',
    features: ['Yatak Olabilme Özelliği', 'Kolay Temizlenebilir Kumaş', 'Yüksek Ortopedik Konfor'],
    imageUrl: '/images/urunler/legato-koltuk-takimi.jpg',
  },
  {
    id: 'truva-koltuk',
    name: 'Truva Koltuk Takımı',
    category: 'koltuk',
    categoryLabel: 'Koltuk Takımı',
    badge: 'Yeni Sezon',
    description: 'Klasik şıklığı modern dokunuşlarla buluşturan, yüksek yoğunluklu sünger dolgusu ve sağlam iskelet yapısına sahip koltuk seti.',
    features: ['Ergonomik Sırt Desteği', 'Zengin Kumaş Seçenekleri', 'Dayanıklı İskelet Yapısı'],
    imageUrl: '/images/urunler/truva-koltuk-takimi.jpg',
  },
  {
    id: 'bloom-kose',
    name: 'Bloom Köşe Koltuk',
    category: 'kose',
    categoryLabel: 'Köşe Koltuk',
    badge: 'L Koltuk Favorisi',
    description: 'Geniş aileler ve misafir ağırlamayı sevenler için tasarlanmış ferah, şık ve son derece rahat L köşe koltuk.',
    features: ['Sandıklı Baza Bölmesi', 'Yatak Fonksiyonu', 'Modüler Yerleşim'],
    imageUrl: '/images/urunler/bloom-kose-koltuk.jpg',
  },
  {
    id: 'teddy-kose',
    name: 'Teddy Trend Köşe Koltuk',
    category: 'kose',
    categoryLabel: 'Köşe Koltuk',
    badge: 'Trend Tasarım',
    description: 'Peluş dokulu yumuşak kumaşı ve oval hatlarıyla salona sıcak ve modern bir hava katan lüks köşe takımı.',
    features: ['Trend Buklet Kumaş', 'Yumuşak Oturum Konforu', 'Geniş U Uyumlu Modüller'],
    imageUrl: '/images/urunler/teddy-kose-koltuk.webp',
  },
  {
    id: 'destina-yemek',
    name: 'Destina Yemek Odası Takımı',
    category: 'yemek',
    categoryLabel: 'Yemek Odası',
    badge: 'İndirimli Paket',
    description: 'Açılabilir konsollu masa seti, ergonomik sandalyeler ve şık konsol aynasıyla sofralarınıza zarafet getiren takım.',
    features: ['Açılabilir Teleskopik Masa', 'Konforlu Sandalyeler', 'Çizilmez Ahşap Yüzey'],
    imageUrl: '/images/urunler/destina-yemek-odasi.jpg',
  },
  {
    id: 'vista-yemek',
    name: 'Vista Yemek Odası Takımı',
    category: 'yemek',
    categoryLabel: 'Yemek Odası',
    badge: 'Zarif Çizgiler',
    description: 'Krem ve naturel ahşap tonlarının mükemmel uyumuyla ferah bir yemek alanı oluşturan modern takım.',
    features: ['Aydınlatmalı Konsol Aynası', 'Ergonomik Sırt Sandalyeler', 'Geniş İç Hacimli Konsol'],
    imageUrl: '/images/urunler/vista-yemek-odasi.webp',
  },
  {
    id: 'active-gold-yatak',
    name: 'Active Life Gold Ortopedik Yatak',
    category: 'yatak',
    categoryLabel: 'Yatak & Baza',
    badge: 'Sağlıklı Uyku',
    description: 'Omurgayı tam destekleyen paket yay teknolojisi ve nefes alabilir kumaşıyla güne zinde başlamanızı sağlayan ortopedik yatak.',
    features: ['Paket Yay Sistemi', 'Antialerjenik Kumaş', 'Çift Taraflı Kullanım'],
    imageUrl: '/images/urunler/active-life-gold-s-yatak.jpg',
  },
  {
    id: 'beta-baza-krem',
    name: 'Beta Sandıklı Baza & Başlık Seti',
    category: 'yatak',
    categoryLabel: 'Yatak & Baza',
    badge: 'Depolama Çözümü',
    description: 'Geniş iç depolama haznesi, emniyet kilitli amortisör sistemi ve lüks başlığıyla yatak odanıza düzen katan set.',
    features: ['Emniyet Kilitli Amortisör', 'Geniş Çelik İskeletli Sandık', 'Lüks Döşeme Başlık'],
    imageUrl: '/images/urunler/beta-baza-krem.jpg',
  },
  {
    id: 'fiona-genc',
    name: 'Fiona Genç Odası Takımı',
    category: 'genc',
    categoryLabel: 'Genç Odası',
    badge: 'Gençlerin Favorisi',
    description: 'Çalışma masası, geniş gardırop ve yatak ünitesini bir araya getiren modüler genç odası seti.',
    features: ['Entegre Kitaplıklı Masa', 'Geniş Gardırop', 'Sağlam Karyola İskeleti'],
    imageUrl: '/images/fiona-genc-odasi001_min.webp',
  },
  {
    id: 'fiona-tv',
    name: 'Fiona TV Ünitesi',
    category: 'tv',
    categoryLabel: 'TV Ünitesi',
    badge: 'Salon Şıklığı',
    description: 'Kablo saklama gözleri, kapaklı dolapları ve açık raflarıyla TV köşenizi düzenleyen estetik ünite.',
    features: ['Gizli Kablo Kanalı', 'Kapaklı Depolama Bölmeleri', 'Modern Şerit Detaylar'],
    imageUrl: '/images/urunler/fiona-tv-unitesi.jpg',
  },
];

export function getConsultantWhatsAppUrl(customMessage?: string): string {
  const defaultText = `Merhaba Serhat Bey, mimari çizim, mobilya modelleri ve mağaza içi fiyat teklifi hakkında bilgi almak istiyorum.`;
  const text = customMessage || defaultText;
  return `https://wa.me/${consultantInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getProductWhatsAppUrl(productName: string): string {
  const text = `Merhaba Serhat Bey, Bornova İstikbal mağazanızda sergilenen "${productName}" modeli hakkında fiyat teklifi ve detaylı bilgi almak istiyorum.`;
  return `https://wa.me/${consultantInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
