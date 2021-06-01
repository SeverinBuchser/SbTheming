const express = require('express');
const app = express();
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const liveReloadServer = livereload.createServer();

const port = 8080;
const rootDir = path.join(__dirname, '/example');

liveReloadServer.watch([rootDir]);
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLivereload())
.use(express.static(rootDir))
.listen(port, () => {
  console.log('Example server listening at ' + `http://localhost:${port}`.green)
})
