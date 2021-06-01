const fse = require('fs-extra');

module.exports = () => {
  fse.copy('./scss', './dist/scss');
}
