const watcher = require('./watcher');
const render = require('./render');
const renderOptions = require('./render-options');
const colors = require('colors');
const logger = require('./logger');

logger.space()
      .separate()
      .space(2)
      .info('Mode: Developement')
      .info('Inital render call:');
/*
  Renders one time on initalizing. The watcher does not fire on initializing.
*/
render(renderOptions.dev);
/*
  Watches for changes on any file change in the './scss' directory with the help
  of chokidar.
*/
watcher((path) => {
  logger.space(5)
        .separate()
        .space(2)
        .change('./' + path);

  render(renderOptions.dev);
});
