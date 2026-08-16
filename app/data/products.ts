export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  istikbalUrl: string;
  featured?: boolean;
  price?: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  imageUrl: string;
  icon: string;
  products: Product[];
  metaTitle: string;
  metaDescription: string;
  seoText?: string;
}

export const categories: Category[] = [
  {
    id: 'koltuk-takimlari',
    slug: 'koltuk-takimlari',
    name: 'Koltuk Takımları',
    shortName: 'Koltuk Takımları',
    description: 'Evlerin en çok vakit geçirilen alanı olan salonlar için modern tasarım anlayışıyla üretilmiş, konforlu ve şık koltuk takımı modelleri.',
    imageUrl: 'https://www.forummobilya.com.tr/uploads/services/koltuk-takimlari-6085746.webp',
    icon: '🛋️',
    metaTitle: 'Bornova Koltuk Takımları Modelleri | Forum Mobilya',
    metaDescription: 'Bornova mobilya mağazamızda İstikbal koltuk takımı modelleri ve oturma grupları. En şık Bornova koltuk modelleri Forum Mobilya\'da.',
    seoText: `İzmir Bornova mobilya mağazamızda sergilenen İstikbal koltuk takımları, modern tasarım anlayışıyla üretilmiş, kalite ve konforla harmanlanmıştır. Evlerin en çok vakit geçirilen alanı olan salonlar için Bornova koltuk takımı ve mobilya arayışınızda en geniş model yelpazesini sunuyoruz. Geniş model yelpazemizde, klasik çizgilerden modern minimalizme, avangart detaylardan sportif tasarımlara kadar her zevke uygun seçenekler yer alır.
Her bir koltuk takımı, dayanıklı iskelet yapısı, yüksek yoğunluklu sünger dolgusu ve kaliteli kumaş kaplamaları ile uzun yıllar ilk günkü formunu koruyacak şekilde tasarlanmıştır. Bornova koltuk takımları modellerimiz modüler yapıda olup küçük ya da büyük alanlara kolayca uyum sağlar. Ayrıca yatak olabilme özelliği ve saklama alanı gibi fonksiyonel detaylar da kullanım kolaylığı sunar.
Koltuk takımlarımız, hem görselliğiyle evinizin havasını değiştirir hem de sağladığı rahatlıkla yaşam kalitenizi artırır. İzmir Bornova mobilya mağazamızda estetik bir bütünlük oluşturmak istiyorsanız, tarzınıza ve ihtiyaçlarınıza en uygun koltuk takımını şimdi keşfedin!`,
    products: [
      {
        id: 'briella-koltuk-takimi',
        name: 'Briella Koltuk Takımı',
        description: 'Zarif kapitöne detayları, yumuşak dokulu kumaşı ve ergonomik oturum yapısıyla salonunuza şıklık katan lüks koltuk takımı.',
        imageUrl: '/images/urunler/briella-koltuk-takimi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/urun/briella-koltuk-takimi',
        featured: true,
      },
      {
        id: 'shine-koltuk-takimi',
        name: 'Shine Koltuk Takımı',
        description: 'Modern geometrik çizgileri, konforlu minder yapısı ve zarif detaylarıyla yaşam alanınızı yenileyen İstikbal takımı.',
        imageUrl: '/images/urunler/shine-koltuk-takimi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/urun/shine-koltuk-takimi',
        featured: true,
      },
      {
        id: 'tetra-koltuk-takimi',
        name: 'Tetra Koltuk Takımı',
        description: 'Geniş oturum alanı, destekleyici sırt mekanizması ve fonksiyonel yapısıyla evinizin gözdesi olacak koltuk takımı.',
        imageUrl: '/images/urunler/tetra-koltuk-takimi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/urun/tetra-koltuk-takimi',
        featured: true,
      },
      {
        id: 'koltuk-1',
        name: 'Legato Koltuk Takımı',
        description: 'Sade hatları ve geniş oturum yüzeyiyle her salona kolayca uyum sağlayan, yatak olabilme özellikli modern koltuk takımı.',
        imageUrl: '/images/urunler/legato-koltuk-takimi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/koltuk-takimlari',
        featured: false,
      },
    ]
  },
  {
    id: 'oturma-gruplari',
    slug: 'oturma-gruplari',
    name: 'Oturma Grupları',
    shortName: 'Oturma Grupları',
    description: 'Konforlu bir yaşam alanının vazgeçilmez parçası olan, hem gündelik kullanıma uygun hem de misafirlerinizi rahat ettirecek oturma grupları.',
    imageUrl: 'https://www.forummobilya.com.tr/uploads/services/oturma-gruplari-2772329.webp',
    icon: '🛋️',
    metaTitle: 'Bornova Oturma Grupları ve Kanepeler | Forum Mobilya',
    metaDescription: 'Bornova mobilya mağazamızda konforlu İstikbal oturma grupları, çekyat ve kanepe modelleri. İzmir Bornova mobilya fiyatları.',
    seoText: `Bornova mobilya şubemizin vazgeçilmez parçalarından biri olan oturma grupları, hem gündelik kullanıma uygun hem de misafirlerinizi en iyi şekilde ağırlayabileceğiniz şık ve rahat çözümler sunar. Farklı tarzlara, ihtiyaçlara ve mekan ölçülerine göre tasarlanan oturma gruplarımız; modern, klasik, retro ve country gibi çeşitli dekorasyon stillerine hitap eder. Bornova mobilya arayışınızda yaşam alanınıza uyum sağlayacak renk, kumaş ve tasarım seçenekleriyle evinizde bütünsel bir estetik yaratabilirsiniz.
Kullanılan kaliteli sünger yapısı, ergonomik tasarımı ve sağlam iskelet sistemleri sayesinde uzun yıllar sorunsuz kullanım vadeden oturma gruplarımız, mobilya ve koltuk modellerimiz arasında hem fonksiyonel hem de göz alıcıdır. Bazı modellerimizde yer alan yatak olabilme ve baza özellikleri, kullanım kolaylığı sunarken özellikle küçük salonlar için pratik çözümler üretir. Geniş oturma yüzeyleri, yumuşak dokulu kumaşları ve destekleyici minderleri ile maksimum konfor sağlar.
Ailenizle huzurlu vakit geçirebileceğiniz, sevdiklerinizi ağırlarken şıklığınızdan ödün vermeyeceğiniz bir oturma grubu arıyorsanız; Bornova İstikbal şubemizde tarzınıza ve yaşam alanınıza uygun seçenekleri mağazamızda keşfedin. Hayalinizdeki konfor ve estetik bir arada!`,
    products: [
      {
        id: 'oturma-1',
        name: 'Vanessa Üçlü Koltuk',
        description: 'Antrasit ve krem tonların bir arada kullanıldığı, geniş oturma yüzeyiyle günlük kullanıma uygun rahat bir kanepe.',
        imageUrl: '/images/urunler/vanessa-uclu-koltuk.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/kanepe-koltuk',
        featured: false,
      },
      {
        id: 'oturma-2',
        name: 'Dora Sehpalı Üçlü Koltuk',
        description: 'Yan sehpa entegrasyonuyla pratik kullanım sunan, misafir ağırlamaya uygun ferah bir oturma grubu.',
        imageUrl: '/images/urunler/dora-sehpali-uclu-koltuk.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/kanepe-koltuk',
        featured: false,
      }
    ]
  },
  {
    id: 'kose-koltuk',
    slug: 'kose-koltuk',
    name: 'Köşe Koltuklar',
    shortName: 'Köşe Koltuk',
    description: 'Hem fonksiyonel hem de modern bir oturma alanı oluşturmak isteyenler için yaşam alanlarında ideal ve estetik çözümler sunan köşe koltuklar.',
    imageUrl: 'https://www.forummobilya.com.tr/uploads/services/kose-koltuk-4514147.webp',
    icon: '🛋️',
    metaTitle: 'Bornova Köşe Koltuk Modelleri ve L Koltuk | Forum Mobilya',
    metaDescription: 'Bornova mobilya mağazamızda en şık İstikbal köşe koltuk ve L koltuk takımları. Bornova koltuk arayışına özel fonksiyonel L koltuklar.',
    seoText: `Hem fonksiyonel hem de modern bir oturma alanı oluşturmak isteyenler için köşe koltuklar, Bornova mobilya şubemizde ideal çözümler sunar. Özellikle dar alanları verimli kullanmak isteyenler veya salonuna daha dinamik bir görünüm kazandırmak isteyen kullanıcılar için köşe koltuklar, estetik ve konforu bir araya getirir. L şeklinde ya da U şeklinde tasarlanan modeller, hem geniş oturma yüzeyine sahiptir hem de kullanıcıya farklı yerleşim alternatifleri sunar.
Köşe koltuk modellerimiz, kaliteli iskelet yapısı, yüksek yoğunluklu sünger dolgusu ve uzun ömürlü döşeme kumaşlarıyla günlük kullanıma uygundur. Bornova şubemizde yatak olabilen ve baza gibi ekstra saklama alanları sunan fonksiyonel köşe koltuk seçenekleri, çok amaçlı kullanım arayanlar için idealdir. Modern, minimal, klasik veya spor çizgiler taşıyan köşe koltuklarımız, farklı renk ve kumaş seçenekleriyle her dekorasyon tarzına kolayca uyum sağlar.
İster küçük bir dairede yer kazanmak isteyin, ister geniş bir salona şık bir oturma alanı kurun; Bornova İstikbal mağazamızdaki köşe koltuklarımız ile tarzınızı yansıtın ve yaşam alanınızı daha işlevsel hale getirin. Uzun süreli konfor, modern çizgiler ve akıllı tasarım bir arada!`,
    products: [
      {
        id: 'mary-kose-takimi',
        name: 'Mary Köşe Koltuk',
        description: 'Maksimum konfor sunan yumuşak minderi, yatak ve depolama hazneli fonksiyonel yapısıyla modern L köşe takımı.',
        imageUrl: '/images/urunler/mary-kose-koltuk.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/urun/mary-kose-takimi',
        featured: true,
      },
      {
        id: 'kose-1',
        name: 'Bloom Köşe Koltuk',
        description: 'Geniş oturma yüzeyi ve yumuşak dolgusuyla konforu ön plana çıkaran, modern çizgili köşe koltuk.',
        imageUrl: '/images/urunler/bloom-kose-koltuk.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/kose-takimlari',
        featured: false,
      }
    ]
  },
  {
    id: 'yemek-odalari',
    slug: 'yemek-odalari',
    name: 'Yemek Odaları',
    shortName: 'Yemek Odası',
    description: 'Aile bireylerinin bir araya geldiği, dostlarla keyifli sofraların kurulduğu, şıklığı ve konforu bir arada sunan yemek odası takımları.',
    imageUrl: 'https://www.forummobilya.com.tr/uploads/services/yemek-odalari-7130351.webp',
    icon: '🪑',
    metaTitle: 'Bornova Yemek Odası Takımı Fiyatları | Forum Mobilya',
    metaDescription: 'Bornova mobilya mağazamızda İstikbal yemek odası modelleri, masalar, sandalyeler ve şık konsollar. İzmir Bornova yemek masaları.',
    seoText: `Aile bireylerinin bir araya geldiği, dostlarla keyifli sofraların kurulduğu yemek odaları; evlerin en özel alanlarından biridir. Şıklığı, konforu ve işlevselliği bir araya getiren yemek odası takımlarımız, Bornova mobilya mağazamızda hem günlük kullanıma hem de özel davetlere uygun çözümler sunar. Masa, sandalye, konsol ve vitrin gibi parçalardan oluşan yemek odası gruplarımız; modern, klasik, rustik ve avangart tarzlarıyla her zevke hitap eder.
Yemek odası takımlarımızda kullanılan yüksek kaliteli malzemeler, hem sağlamlığı hem de estetik görünümü garanti eder. Bornova mobilya şubemizdeki geniş ailelere uygun açılabilir masa modelleri, ergonomik tasarıma sahip konforlu sandalyeler ve eşyalarınızı düzenli bir şekilde saklamanızı sağlayan şık konsollar ile yemek alanınızı fonksiyonel bir yaşam alanına dönüştürebilirsiniz. Detaylardaki zarif işçilik ve renk uyumu sayesinde hem sıcak hem de zarif bir atmosfer elde edilir.
İster günlük sofralarınızda sadeliği tercih edin, ister özel misafirlerinizi ağırlarken ihtişamdan yana olun; Bornova İstikbal yemek odası koleksiyonumuzda aradığınız tarzı mutlaka bulacaksınız. Evinizin kalitesini yansıtan bir yemek odası için Bornova mağazamızı ziyaret edin, stilinizi yansıtan yaşam alanları oluşturun.`,
    products: [
      {
        id: 'shine-yemek-odasi-takimi',
        name: 'Shine Yemek Odası Takımı',
        description: 'Genişleyen açılır yemek masası, aynalı şık konsolu ve konforlu sandalyeleriyle sofralarınıza zarafet katar.',
        imageUrl: '/images/urunler/shine-yemek-odasi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/urun/shine-yemek-odasi-takimi',
        featured: true,
      },
      {
        id: 'yemek-1',
        name: 'Destina Yemek Odası Takımı',
        description: 'Masa, sandalye ve konsolu bir arada sunan, modern ahşap dokusuyla sofralarınıza zarafet katan takım.',
        imageUrl: '/images/urunler/destina-yemek-odasi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/yemek-odasi-takimi',
        featured: false,
      }
    ]
  },
  {
    id: 'yatak-baza-baslik',
    slug: 'yatak-baza-baslik',
    name: 'Yatak, Baza & Başlık',
    shortName: 'Yatak & Baza',
    description: 'Ortopedik yataklar, geniş saklama hacimli sandıklı bazalar ve yatak odanıza lüks görünüm katacak şık başlık modelleri.',
    imageUrl: 'https://www.forummobilya.com.tr/uploads/services/yatak-baza-baslik-3162579.jpg',
    icon: '🛏️',
    metaTitle: 'Bornova Ortopedik Yatak, Baza & Başlık | Forum Mobilya',
    metaDescription: 'Bornova mobilya şubemizde İstikbal kalitesiyle tek kişilik ve çift kişilik baza başlık setleri, ortopedik yatak modelleri ve fiyatları.',
    seoText: `Rahat bir uyku uyumak için kaliteli yatak ve baza bir evde olması gereken mobilyaların başında gelir. Güne zinde başlamak, dinlenmiş şekilde kalkmak ve sağlıklı bir yaşam için yatak baza seçimi önemlidir. Bornova mobilya mağazamızda İstikbal'in yeni nesil yay teknolojileri, hava geçirgenliği yüksek kumaşları ve vücut ergonomisini tam destekleyen yatak modelleri sergilenmektedir.
İyi bir yatakta yatılmadığı zaman vücudun günün yorgunluğunu atması zor olduğu gibi gün içerisinde enerjinizin düşük olmasına neden olur. Bel, sırt ve boyun ağrılarının önemli sebeplerinden biri olan yanlış yatak seçimi ileride ciddi sağlık sorunlarına yol açabilir. Bornova İstikbal şubemizde yer alan sandıklı ve geniş depolama haznesi sunan emniyet kilitli bazalarımız ise evinizdeki düzeni korumanıza yardımcı olur. Yatak odanızın havasını değiştirecek lüks başlık serileriyle kombini tamamlayın.`,
    products: [
      {
        id: 'yatak-1',
        name: 'Active Life Gold S Yatak',
        description: 'Vücut ağırlığını dengeli dağıtan paket yay sistemi ve nefes alan kumaşıyla ortopedik destek sunan yatak.',
        imageUrl: '/images/urunler/active-life-gold-s-yatak.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/yatak',
        featured: false,
      },
      {
        id: 'yatak-2',
        name: 'Beta Baza & Başlık',
        description: 'Geniş iç depolama hacmi ve krem tonlu şık başlığıyla yatak odanıza düzen katan baza takımı.',
        imageUrl: '/images/urunler/beta-baza-krem.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/baza-baslik',
        featured: false,
      }
    ]
  },
  {
    id: 'genc-odalari',
    slug: 'genc-odalari',
    name: 'Genç Odaları',
    shortName: 'Genç Odası',
    description: 'Gençlerin dünyasına hitap eden; ders çalışma, dinlenme ve depolama alanlarını bir arada sunan modüler genç odası takımları.',
    imageUrl: 'https://www.forummobilya.com.tr/uploads/services/genc-odalari-4371491.webp',
    icon: '🎒',
    metaTitle: 'Bornova Genç Odası Takımları ve Fiyatları | Forum Mobilya',
    metaDescription: 'Bornova mobilya mağazamızda İstikbal genç odası modelleri, çalışma masaları, gardıroplar ve bazalar. İzmir Bornova genç odaları.',
    seoText: `Gençlerin kendi dünyalarını yansıttığı genç odaları; çalışma, dinlenme ve eğlence alanlarını bir arada sunan fonksiyonel çözümler gerektirir. Bornova mobilya şubemizde sergilenen İstikbal genç odası takımları, gençlerin dinamik yaşam tarzına uygun modüler ve modern tasarımlar sunar. Karyola, gardırop, çalışma masası, komodin ve kitaplık gibi modüllerden oluşan genç odası gruplarımız, farklı renk ve konsept seçenekleriyle gençlerin beğenisini kazanır.
Genç odalarında düzen ve fonksiyonellik ön plandadır. Bornova mobilya mağazamızdaki genç odası takımlarında yer alan geniş depolama alanına sahip gardıroplar, raflı kitaplıklar ve emniyetli bazalar sayesinde oda düzenini sağlamak kolaylaşır. Ergonomik çalışma masaları ise ders çalışma saatlerini daha verimli ve konforlu hale getirir. Sağlam malzeme yapısı ve güvenli detaylar ile uzun yıllar güvenle kullanılabilir.
Dinamik renk kombinasyonları, ahşap detaylar ve modern çizgilerle tasarlanan İstikbal genç odası koleksiyonumuz, her gencin hayalindeki odayı kurmasına yardımcı olur. Çocuğunuz ya da genciniz için en uygun takımı seçmek ve Bornova şubemizdeki fırsatları değerlendirmek için mağazamıza davetlisiniz!`,
    products: [
      {
        id: 'borneo-bohem-genc-odasi-takimi',
        name: 'Borneo Bohem Genç Odası Takımı',
        description: 'Doğal ahşap detayları, bohem çizgileri ve modüler çalışma/dinlenme üniteleriyle gençlerin hayalindeki takım.',
        imageUrl: '/images/urunler/borneo-genc-odasi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/urun/borneo-bohem-genc-odasi-takimi',
        featured: true,
      },
      {
        id: 'genc-1',
        name: 'Fiona TV Ünitesi & Genç Seti',
        description: 'Çalışma masası ve kitaplık kombinasyonuyla küçük odalar için kompakt ve modüler bir genç odası çözümü.',
        imageUrl: '/images/urunler/fiona-tv-unitesi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/genc-odasi',
        featured: false,
      }
    ]
  },
  {
    id: 'tv-uniteleri',
    slug: 'tv-uniteleri',
    name: 'TV Üniteleri',
    shortName: 'TV Ünitesi',
    description: 'Salonunuza şıklık katan, kablo karmaşasını saklayan ve dekoratif objelerinize alan sağlayan modern TV ünitesi modelleri.',
    imageUrl: '/images/urunler/fiona-tv-unitesi.jpg',
    icon: '📺',
    metaTitle: 'Bornova TV Üniteleri ve Konsollar | Forum Mobilya',
    metaDescription: 'Bornova mobilya mağazamızda İstikbal TV ünitesi modelleri, ahşap ve modüler üniteler. İzmir Bornova TV ünitesi fiyatları.',
    seoText: `Salon dekorasyonunun odak noktalarından biri olan TV üniteleri, hem televizyonunuz için şık bir stant işlevi görür hem de salonunuzda düzen ve estetik sağlar. Bornova mobilya mağazamızda sergilenen İstikbal TV üniteleri; ahşap kaplama detayları, led aydınlatma seçenekleri ve kapaklı dolap modülleriyle farklı zevklere hitap eder.
Bornova mobilya şubemizde küçük salonlar için minimal konsol ünitelerden, geniş duvarları kaplayan raflı ve vitrinli modüler TV ünitelerine kadar zengin seçenekler sunulmaktadır. Kablo gizleme kanalları ve geniş çekmeceler sayesinde televizyon çevresindeki karmaşayı ortadan kaldırarak ferah bir ortam yaratabilirsiniz. İstikbal'in TV ünitesi koleksiyonunu Bornova mağazamızda yerinde inceleyin.`,
    products: [
      {
        id: 'tv-1',
        name: 'Fiona TV Ünitesi',
        description: 'Ahşap ayakları ve füme cam detaylarıyla televizyon köşenize modern bir hava katan şık ünite.',
        imageUrl: '/images/urunler/fiona-tv-unitesi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/tv-unitesi',
        featured: false,
      }
    ]
  },
  {
    id: 'bahce-mobilyalari',
    slug: 'bahce-mobilyalari',
    name: 'Bahçe Mobilyaları',
    shortName: 'Bahçe Mobilyası',
    description: 'Teraslar, balkonlar ve bahçeler için hava koşullarına dayanıklı, şık ve konforlu bahçe mobilyası takımları.',
    imageUrl: '/images/ravel-bahce-mobilyasi001_min.webp',
    icon: '🌿',
    metaTitle: 'Bornova Bahçe Mobilyaları | Forum Mobilya',
    metaDescription: 'Bornova mobilya mağazamızda İstikbal bahçe koltuğu, bahçe masası ve oturma takımları. İzmir bahçe ve balkonlar için dayanıklı bahçe mobilyası.',
    seoText: `İzmir genelindeki balkon, teras ve bahçe alanları için tasarlanan İstikbal bahçe mobilyaları, hem dış mekan koşullarına dayanıklı hem de şık bir görünüm sunar. Forum Mobilya olarak Bornova mağazamızda bahçe koltuk takımları, oturma grupları ve sehpalardan oluşan geniş bir seçki sunuyoruz.
Su ve neme dayanıklı örgü ve kumaş yüzeyler, paslanmaz metal veya hava koşullarına dayanıklı ahşap ayak yapıları sayesinde bahçe mobilyalarımız uzun yıllar açık havada kullanılabilir. Bornova'daki balkonunuzu ya da terasınızı keyifli bir oturma alanına dönüştürmek için mağazamızı ziyaret edebilirsiniz.
Kompakt mini takımlardan geniş oturma gruplarına kadar farklı boyut seçenekleriyle her alana uygun bir model bulabilirsiniz. İstikbal'in bahçe mobilyası koleksiyonunu Bornova showroomumuzda birebir inceleyin.`,
    products: [
      {
        id: 'bahce-1',
        name: 'Ravel Mini Takım',
        description: 'Kompakt oturma grubu ve sehpasıyla küçük balkon ve teraslar için hava koşullarına dayanıklı şık bir çözüm.',
        imageUrl: '/images/ravel-bahce-mobilyasi001_min.webp',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/bahce-mobilyalari',
        featured: false,
      },
      {
        id: 'bahce-2',
        name: 'Pablo Mini Takım',
        description: 'Örgü dokulu yüzeyi ve dayanıklı iskeletiyle bahçe ve teraslarda uzun ömürlü kullanım sunan oturma seti.',
        imageUrl: '/images/urunler/pablo-bahce-takimi.jpg',
        istikbalUrl: 'https://www.istikbal.com.tr/kategori/bahce-mobilyalari',
        featured: false,
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getFeaturedProducts(): Array<Product & { categoryName: string; categorySlug: string }> {
  const featured: Array<Product & { categoryName: string; categorySlug: string }> = [];
  for (const cat of categories) {
    for (const product of cat.products) {
      if (product.featured) {
        featured.push({ ...product, categoryName: cat.name, categorySlug: cat.slug });
      }
    }
  }
  return featured.slice(0, 6);
}
