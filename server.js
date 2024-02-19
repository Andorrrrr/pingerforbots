const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('cross-fetch');
app.use(bodyParser.json());
app.use(cors());

function fetchData(url) {
              return new Promise((resolve, reject) => {
                  const xhr = new XMLHttpRequest();
                  xhr.open("GET", url);
                  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                  xhr.onload = () => {
                      if (xhr.status === 200) {
                          resolve(xhr.responseText);
                      } else {
                          reject(new Error(`Failed to fetch data from ${url}`));
                      }
                  };
                  xhr.onerror = () => {
                      reject(new Error(`Failed to fetch data from ${url}`));
                  };
                  xhr.send();
              });
          }

app.post('/ping', function(req, res) {
                fetchData("https://lyrical-roasted-exhaust.glitch.me")
                    .then(() => fetchData("https://gem-ahead-breadfruit.glitch.me"))
                    .then(() => fetchData("https://bristle-friendly-archeology.glitch.me"))
                    .then(() => fetchData("https://talented-cooperative-event.glitch.me"))
                    .then(() => fetchData("https://bottlenose-citrine-schooner.glitch.me"))
                    .then(() => fetchData("https://merciful-chlorinated-driver.glitch.me"))
                    .then(() => fetchData("https://torpid-crawling-exception.glitch.me"))
                    .then(() => fetchData("https://seed-silver-shield.glitch.me"))
                    .then(() => fetchData("https://orange-frequent-morning.glitch.me"))
                    .then(() => fetchData("https://coal-charming-iron.glitch.me"))
                    .catch(error => console.error(error));
  res.send("good");
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
