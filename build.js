const render = require('./render')
const renderOptions = require('./render-options');
const colors = require('colors');
const logger = require('./logger');
const package = require('./package');
const source = require('./source');
const readme = require('./readme');

logger.space()
      .separate()
      .space()
      .info('Mode: Production')
      .info('Inital render call:');
      
// renders one time on initalizing.
render(renderOptions.prod);
// copies the package.json and adjusts it.
package();
// copies the scss directory into dist
source();
// copies the README file into dist
readme();


logger.space()
      .separate();
