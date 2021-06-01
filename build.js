const render = require('./render')
const renderOptions = require('./render-options');
const colors = require('colors');
const logger = require('./logger');
const package = require('./package');
const source = require('./source');
const readme = require('./readme');

logger.space()
      .separate()
      .space(2)
      .info('Mode: Production')
      .info('Inital render call:');
/*
  Renders one time on initalizing.
*/
render(renderOptions.prod);
package();
source();
readme();


logger.space(2)
      .separate();
