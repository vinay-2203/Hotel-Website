// models/generatimage.js
const puppeteer = require("puppeteer-core");

const generateReceiptImage = async (htmlContent, outputPath) => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.screenshot({ path: outputPath });
  await browser.close();
};

module.exports = generateReceiptImage;

