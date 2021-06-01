const fse = require('fs-extra');
const logger = require('./logger');

const src = './scss';
const dest = './dist/scss';

module.exports = () => {
  fse.copySync(src, dest);
  logger.copy(dest)
}
