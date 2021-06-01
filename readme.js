const fs = require('fs');
const logger = require('./logger');

const readmeFileName = 'README.md';
const src = './' + readmeFileName;
const dest = './dist/' + readmeFileName;

module.exports = () => {
  fs.copyFileSync(src, dest);
  logger.create(dest);
}
