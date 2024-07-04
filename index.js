const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/yt", async (req, res) => {
  const query = req.query.s;
  if (!query) {
    return res.status(400).send("Query parameter 's' is required");
  }
  await scrapeLogic(query, res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
