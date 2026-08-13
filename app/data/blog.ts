export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
  readTime: number;
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'kucuk-salon-buyuk-gorunen-mobilya-secimi',
    title: 'Küçük Salonunuzu Büyük Gösterecek Mobilya Seçimi İpuçları',
    excerpt: 'Küçük bir salonu geniş ve ferah göstermenin sırrı doğru mobilya seçiminde yatıyor. İşte uzmanlardan pratik öneriler.',
    content: `
Küçük bir salona sahip olmak, şık ve konforlu bir dekorasyon yapamayacağınız anlamına gelmiyor. Doğru mobilya seçimi ve yerleşim planıyla küçük alanları çok daha büyük gösterebilirsiniz.

## Açık Renkli Mobilyalar Tercih Edin

Açık renkler ışığı yansıtarak mekânın daha büyük görünmesini sağlar. Krem, bej, açık gri ve beyaz gibi renkler küçük salonlar için idealdir.

## Çok Fonksiyonlu Mobilyalar Kullanın

Depolama alanı olan koltuklar, açılır kapanır masalar ve yataklı kanepe modelleri küçük alanlarda hem yer kazandırır hem de işlevsellik sağlar.

## Duvarlara Yakın Yerleştirme

Mobilyaları duvarlara yakın yerleştirerek ortada daha fazla yürüyüş alanı bırakabilirsiniz. Bu basit teknik mekânın ne kadar büyük hissettirdiğini değiştirir.

## Aynalar ve Cam Elementler

Dekorasyon unsuru olarak büyük aynalar ve cam üst yüzeyli sehpalar, ışığı yansıtarak alanı görsel olarak genişletir.
    `,
    imageUrl: '/images/urunler/alin-koltuk-takimi.jpg',
    category: 'Dekorasyon İpuçları',
    publishedAt: '2025-10-15',
    readTime: 4,
    metaTitle: 'Küçük Salon için Mobilya Seçimi İpuçları | Forum Mobilya Blog',
    metaDescription: 'Küçük salonunuzu daha büyük gösterecek mobilya seçimi ve dekorasyon ipuçları. İstikbal\'in space-saving koleksiyonlarıyla tanışın.',
  },
  {
    slug: 'yatak-odasi-renk-uyumu-rehberi',
    title: 'Yatak Odası Renk Uyumu: Huzurlu Bir Uyku İçin Rehber',
    excerpt: 'Renk psikolojisi yatak odanızın havasını doğrudan etkiler. Doğru renk kombinasyonuyla uyku kalitenizi artırabilirsiniz.',
    content: `
Yatak odanızın renk seçimi, sadece estetik değil, uyku kalitenizi de doğrudan etkiler. Renk psikolojisi bize sakinleştirici tonların uyku kalitesini artırdığını gösteriyor.

## Sakinleştirici Renkler

Mavi, yeşil ve lavanta gibi soğuk tonlar, yatak odası için en ideal renklerdir. Bu renkler kalp atış hızını ve kan basıncını düşürerek rahat bir uyku ortamı yaratır.

## Nötr Tonlar Her Zaman Güvenli

Bej, krem ve gri tonlar evrensel olarak çalışır ve farklı aksesuar renkleriyle kolayca kombine edilebilir.

## Parlak Renklerden Kaçının

Kırmızı, turuncu gibi uyarıcı renkler yatak odası için önerilmez. Bu renkler zihni aktif tutarak uykuya dalmayı zorlaştırabilir.
    `,
    imageUrl: '/images/destina-yatak-odasi001_min.webp',
    category: 'Yatak Odası',
    publishedAt: '2025-11-02',
    readTime: 5,
    metaTitle: 'Yatak Odası Renk Uyumu Rehberi | Forum Mobilya Blog',
    metaDescription: 'Yatak odanız için ideal renk kombinasyonları ve uyku kalitesini artıran renk psikolojisi ipuçları. Forum Mobilya uzmanlarından öneriler.',
  },
  {
    slug: 'istikbal-2025-koleksiyonlari',
    title: 'İstikbal 2025 Koleksiyonları: Bu Yılın Mobilya Trendleri',
    excerpt: 'İstikbal\'in 2025 yılı yeni koleksiyonlarında ön plana çıkan stiller, renkler ve tasarım anlayışını keşfedin.',
    content: `
İstikbal\'in 2025 koleksiyonu, modern yaşamın ihtiyaçlarına cevap verecek yenilikçi tasarımlar sunuyor. Forum Mobilya olarak bu yeni koleksiyonları İzmir Bornova mağazamızda sizlerle buluşturuyoruz.

## Doğal Malzemelerin Yükselişi

2025 koleksiyonunda doğal ahşap dokular, taş efektli yüzeyler ve organik formlar ön plana çıkıyor. Bu trend, sürdürülebilir yaşamın mobilya tasarımına yansıması.

## Çok Fonksiyonlu Tasarımlar

Hem estetik hem de işlevsel olan açılır koltuklar, depolama alanı olan yatak altları ve dönüştürülebilir mobilyalar bu yılın vazgeçilmezleri arasında.

## Pastel Tonlar

Toz pembe, mint yeşili ve pudra mavisi gibi pastel tonlar, 2025 koleksiyonunda sıkça yer alıyor.
    `,
    imageUrl: '/images/urunler/shine-koltuk-takimi.jpg',
    category: 'Yeni Koleksiyonlar',
    publishedAt: '2025-12-10',
    readTime: 3,
    metaTitle: 'İstikbal 2025 Koleksiyonları | Forum Mobilya Blog',
    metaDescription: '2025 yılının mobilya trendleri ve İstikbal\'in yeni koleksiyonları. Forum Mobilya Bornova mağazasında inceleyin.',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
