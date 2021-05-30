const { Cluster }  = require("puppeteer-cluster");
const puppeteer    = require("puppeteer");
const express      = require("express");
const app          = express();
const port         = process.env.PORT;

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.disable("x-powered-by");

let URLs       = [];
let appSecret  = "pwn2win-is-even-more-secure-with-this-r34lly-s3cur3-s3cre7";

app.get("/", (req, res) => {
 res.send("This isn't part of the challenge");
});

app.post("/add-87ytgvhbjnk", (req, res) => {
 let url = req.body.url;
 let secret = req.body.secret;
 if (url == undefined || url == "" || Array.isArray(url))
  return res.send("URL failed");
 if (secret == undefined || secret == "" || Array.isArray(secret) || secret != appSecret)
  return res.send("Secret failed");
 URLs.push(url);

 res.send("URL added to the queue");
});

app.listen(port, () => {
 console.log("Listening on port " + port + "...");
});

(async () => {
  
 const cluster = await Cluster.launch({
  concurrency: Cluster.CONCURRENCY_BROWSER,
  maxConcurrency: 1,
  monitor: true,
  puppeteerOptions: {
      executablePath: '/usr/bin/google-chrome',
      args: ['--disable-dev-shm-usage', '--disable-gpu'],
      headless: true
    },
    timeout: process.env.STAY*1000
  });

 await cluster.task(async ({ page, data: url }) => {
     await page.setCookie({
            "url":      `${process.env.BASEURL}`,
            "name":     "FLAG",
            "value":    `${process.env.FLAG}`,
            "sameSite": "None",
            "secure":   true,
            "httpOnly": false
        });

  await page.goto(url);
  await page.waitFor(process.env.STAY*1000);
 });

 setInterval(()=>{
  let url = URLs.shift();
  if (url !== undefined)
   cluster.queue(url);
 }, 100);

})();