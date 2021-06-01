const fs = require('fs');
const logger = require('./logger');

const packageFileName = 'package.json';
const src = './' + packageFileName;
const dest = './dist/' + packageFileName;


/*
  Gets the 'package.json' file from the file system and deletes the scripts,
  dependencies and devDependencies. After deleting, a new file gets created in
  the 'dist' folder. The new file contains the adjusted content of the original
  'package.json'.
*/
module.exports = () => {
  let content = JSON.parse(fs.readFileSync(src).toString());

  delete content.scripts;
  delete content.dependencies;
  delete content.devDependencies;

  fs.writeFileSync(dest, JSON.stringify(content, null, 2))
  logger.copy(dest);
}
