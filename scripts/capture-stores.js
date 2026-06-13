// One-off: capture storefront screenshots into public/stores/
// Usage: node scripts/capture-stores.js [name ...]  (no args = all)
const puppeteer = require('puppeteer-core');
const path = require('path');

const stores = [
  { name: 'seabags', url: 'https://seabags.com/' },
  { name: 'craftcellars', url: 'https://craftcellars.ca/' },
  { name: 'artika', url: 'https://pro.artika.com/' },
  { name: 'duluthpack', url: 'https://duluthpack.com/' },
  { name: 'lorisshoes', url: 'https://www.lorisshoes.com/' },
  { name: 'thecoop', url: 'https://thecoop.com/' },
];

// best-effort dismissal of cookie banners / age gates / newsletter modals
async function dismissOverlays(page) {
  const labels = ['accept', 'agree', 'yes', 'i am', "i'm over", 'enter', 'continue', 'got it', 'ok'];
  for (let round = 0; round < 3; round++) {
    const clicked = await page.evaluate((labels) => {
      const els = [...document.querySelectorAll('button, a, [role="button"], input[type="submit"]')];
      for (const el of els) {
        const t = (el.innerText || el.value || '').trim().toLowerCase();
        if (!t || t.length > 30) continue;
        if (labels.some((l) => t.startsWith(l))) {
          el.click();
          return t;
        }
      }
      return null;
    }, labels);
    if (!clicked) break;
    await new Promise((r) => setTimeout(r, 1500));
  }
  // close-button style modals (×)
  await page.keyboard.press('Escape').catch(() => {});
}

(async () => {
  const only = process.argv.slice(2);
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  );

  for (const store of stores) {
    if (only.length && !only.includes(store.name)) continue;
    const out = path.join(__dirname, '..', 'public', 'stores', `${store.name}.jpg`);
    try {
      await page.goto(store.url, { waitUntil: 'networkidle2', timeout: 60000 });
      await new Promise((r) => setTimeout(r, 3000));
      await dismissOverlays(page);
      await new Promise((r) => setTimeout(r, 1500));
      await page.screenshot({ path: out, type: 'jpeg', quality: 80 });
      console.log('ok', store.name);
    } catch (e) {
      console.error('FAIL', store.name, e.message);
    }
  }
  await browser.close();
})();
