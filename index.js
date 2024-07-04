const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/yt", (req, res) => {
  const searchQuery = req.query.s;
  if (!searchQuery) {
    return res.send('Please provide a search query using the "s" query parameter.');
  }
  scrapeLogic(res, searchQuery);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
