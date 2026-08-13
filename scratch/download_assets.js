const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  { url: 'https://www.forummobilya.com.tr/uploads/settings/forum-mobilya-6879969.webp', dest: 'public/logo.webp' },
  { url: 'https://www.forummobilya.com.tr/uploads/slider/cesme-magazamiz-8709249.webp', dest: 'public/images/cesme-1.webp' },
  { url: 'https://www.forummobilya.com.tr/uploads/slider/cesme-magazamiz-19985.webp', dest: 'public/images/cesme-2.webp' },
  { url: 'https://www.forummobilya.com.tr/uploads/slider/cesme-magazamiz-6439755.webp', dest: 'public/images/cesme-3.webp' },
  { url: 'https://www.forummobilya.com.tr/uploads/slider/forum-bornova-magazamiz-5356282.webp', dest: 'public/images/bornova-1.webp' },
  { url: 'https://www.forummobilya.com.tr/uploads/slider/forum-bornova-magazamiz-4798868.webp', dest: 'public/images/bornova-2.webp' },
  { url: 'https://www.forummobilya.com.tr/uploads/slider/forum-bornova-magazamiz-4096033.webp', dest: 'public/images/bornova-3.webp' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (Status: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${url} -> ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const asset of assets) {
    try {
      await download(asset.url, asset.dest);
    } catch (err) {
      console.error(`Error downloading ${asset.url}:`, err.message);
    }
  }
}

main();
