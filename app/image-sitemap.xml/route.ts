import { categories } from '@/app/data/products';
import { blogPosts } from '@/app/data/blog';
import { stores } from '@/app/data/stores';

const BASE_URL = 'https://www.bornovamobilya.com.tr';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatImageUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
}

export async function GET() {
  const urlImageMap = new Map<string, Array<{ loc: string; title: string; caption?: string }>>();

  function addImage(pageUrl: string, imageLoc: string, title: string, caption?: string) {
    if (!urlImageMap.has(pageUrl)) {
      urlImageMap.set(pageUrl, []);
    }
    const fullImgUrl = formatImageUrl(imageLoc);
    urlImageMap.get(pageUrl)!.push({
      loc: fullImgUrl,
      title,
      caption,
    });
  }

  // 1. Ana Sayfa Görselleri
  addImage(BASE_URL, `${BASE_URL}/logo.jpeg`, 'Bornova Mobilya Logo', 'Bornova Mobilya - İzmir Bornova İstikbal Yetkili Mağazası');

  // 2. Kategori ve Ürün Görselleri
  categories.forEach((cat) => {
    const categoryPageUrl = `${BASE_URL}/urunler/${cat.slug}`;
    if (cat.imageUrl) {
      addImage(categoryPageUrl, cat.imageUrl, `${cat.name} — Bornova Mobilya`, cat.description);
    }
    cat.products.forEach((product) => {
      if (product.imageUrl) {
        addImage(
          categoryPageUrl,
          product.imageUrl,
          `${product.name} — Bornova Mobilya`,
          product.description
        );
      }
    });
  });

  // 3. Blog Görselleri
  blogPosts.forEach((post) => {
    const blogPageUrl = `${BASE_URL}/blog/${post.slug}`;
    if (post.imageUrl) {
      addImage(blogPageUrl, post.imageUrl, `${post.title} — Bornova Mobilya Blog`, post.excerpt);
    }
  });

  // 4. Mağaza Görselleri
  stores.forEach((store) => {
    const storePageUrl = `${BASE_URL}/magazalarimiz/${store.id}`;
    if (store.images && store.images.length > 0) {
      store.images.forEach((imgUrl, index) => {
        addImage(
          storePageUrl,
          imgUrl,
          `${store.name} — Mağaza Fotoğrafı ${index + 1}`,
          store.address
        );
      });
    }
  });

  // XML Oluşturma
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  urlImageMap.forEach((images, pageUrl) => {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(pageUrl)}</loc>\n`;
    images.forEach((img) => {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
      if (img.caption) {
        xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`;
      }
      xml += `    </image:image>\n`;
    });
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
