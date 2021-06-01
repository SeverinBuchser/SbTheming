const fse = require('fs-extra');
const logger = require('./logger');

const src = './scss';
const dest = './dist/scss';

/*
  Copies the 'scss' directory into the 'dist' directory.
*/
module.exports = () => {
  fse.copySync(src, dest);
  logger.copy(dest)
}
