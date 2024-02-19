const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('cross-fetch');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

// Custom middleware to set the Referer Policy header
app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

function fetchData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      return response.text();
    });
}

app.post('/ping', function(req, res) {
  Promise.all([
    fetchData("https://lyrical-roasted-exhaust.glitch.me"),
    fetchData("https://gem-ahead-breadfruit.glitch.me"),
    fetchData("https://bristle-friendly-archeology.glitch.me"),
    fetchData("https://talented-cooperative-event.glitch.me"),
    fetchData("https://bottlenose-citrine-schooner.glitch.me"),
    fetchData("https://merciful-chlorinated-driver.glitch.me"),
    fetchData("https://torpid-crawling-exception.glitch.me"),
    fetchData("https://seed-silver-shield.glitch.me"),
    fetchData("https://orange-frequent-morning.glitch.me"),
    fetchData("https://coal-charming-iron.glitch.me")
  ])
  .then(() => {
    res.send("good");
  })
  .catch(error => {
    console.error(error);
    res.status(500).send("error");
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
