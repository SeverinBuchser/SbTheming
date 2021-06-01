const fs = require('fs');
const logger = require('./logger');

const readmeFileName = 'README.md';
const src = './' + readmeFileName;
const dest = './dist/' + readmeFileName;

/*
  Copies the 'README.md' file into the 'dist' folder.
*/
module.exports = () => {
  fs.copyFileSync(src, dest);
  logger.copy(dest);
}
