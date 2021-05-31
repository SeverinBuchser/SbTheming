const render = require('./render')
const renderOptions = require('./render-options');
const colors = require('colors');
const logger = require('./logger');

logger.space()
      .separate()
      .space(2)
      .info('Mode: Production')
      .info('Inital render call:');
/*
  Renders one time on initalizing.
*/
render(renderOptions.prod);
