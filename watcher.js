const chokidar = require('chokidar');

/*
  Watcher for './scss'. Calls callback when first started and on change of any
  file in the './scss' directory.
*/
module.exports = function watcher(callback) {
  chokidar.watch('./scss', {
    ignoreInitial: true
  })
  .on('change', callback)
  .on('addDir', callback)
}
