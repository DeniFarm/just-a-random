const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/yt', async (req, res) => {
    const searchQuery = req.query.s;

    if (!searchQuery) {
        return res.send('Please provide a search query using the "s" query parameter.');
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`);
    await page.waitForSelector('ytd-thumbnail');

    const screenshotPath = path.join(__dirname, 'screenshot.png');
    await page.screenshot({ path: screenshotPath });
    await browser.close();

    res.sendFile(screenshotPath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
