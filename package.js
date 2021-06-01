const fs = require('fs');
const logger = require('./logger');

module.exports = (entry, out) => {
  fs.readFile(entry + '/package.json', (err, content) => {
    if (err) logger.error(err.message);
    content = JSON.parse(content.toString());
    delete content.scripts;
    delete content.dependencies;
    delete content.devDependencies;
    fs.writeFile(out + '/package.json', JSON.stringify(content, null, 2), () => {})
  })
}
