const express = require('express');
const app = express();
const port = 8080;
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const liveReloadServer = livereload.createServer();
const dev = require('./dev');

liveReloadServer.watch([
  path.join(__dirname, '/example'),
  path.join(__dirname, '/dist')
]);
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const files = {
  map: {
    file: '/sb-theme.css.map',
    dir: '/dist'
  },
  themeCss: {
    file: '/sb-theme.css',
    dir: '/dist'
  },
  indexHtml: {
    file: '/index.html',
    dir: '/example'
  },
  indexCss: {
    file: '/index.css',
    dir: '/example'
  }
}

function sendFile(res, file) {
  res.sendFile(path.join(__dirname, file.dir, file.file));
}

app.use(connectLivereload())
.get('/', (req, res) => sendFile(res, files.indexHtml))
.get(files.map.file, (req, res) => sendFile(res, files.map))
.get(files.themeCss.file, (req, res) => sendFile(res, files.themeCss))
.get(files.indexCss.file, (req, res) => sendFile(res, files.indexCss))
.listen(port, () => {
  console.log('Example server listening at ' + `http://localhos:${port}`.green)
})

dev();
