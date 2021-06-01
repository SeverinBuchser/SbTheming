const fs = require('fs');
const logger = require('./logger');

const packageFileName = 'package.json';
const src = './' + packageFileName;
const dest = './dist/' + packageFileName;

module.exports = () => {
  let content = JSON.parse(fs.readFileSync(src).toString());

  delete content.scripts;
  delete content.dependencies;
  delete content.devDependencies;

  fs.writeFileSync(dest, JSON.stringify(content, null, 2))
  logger.copy(dest);
}
