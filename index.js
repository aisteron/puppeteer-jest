const puppeteer = require('puppeteer-core');

(async () => {
  
  const browser = await puppeteer.launch({ 
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ["--lang=en-US,en", '--no-sandbox', '--disable-setuid-sandbox', '--disable-extensions'] 
  });
  
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();