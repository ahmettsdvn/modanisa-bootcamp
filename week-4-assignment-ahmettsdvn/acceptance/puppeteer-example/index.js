const puppeteer = require('puppeteer');

let productMap = [];
(async function() {
    const browser = await puppeteer.launch({    headless: false,
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:8081/');
    await console.log('User navigated to site');
    await page.waitForTimeout(4000);
    await page.hover('#app>div.home>div>div:nth-child(3)>div>div.yt-card-img>a>img')
    
    await page.waitForTimeout(3000);
    await page.screenshot({ path: './screenshot.png'});
    await console.log('Page screenshot taken');
    browser.close();
})();

