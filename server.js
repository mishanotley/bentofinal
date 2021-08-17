#!/usr/bin/env node
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require('fs');

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.post('/savePlain', (req, res) => {
  var before = '<html><head><script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script></head><body>';
  var after = '</body></html>';
  for (const [filepath, content] of Object.entries(req.body)) {
    fs.writeFileSync('./public' + filepath, before + content + after);
  }
  res.sendStatus(200);
});

const PORT = process.env.PORT || 51234;
app.listen(PORT, () => {
  console.log(`Watching for messages from Inspector on localhost:${PORT}.`);
});
