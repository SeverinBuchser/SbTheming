const render = require('./render')
const renderOptions = require('./render-options');
const colors = require('colors');

console.log("Production:\n".red)
/*
  Renders one time on initalizing.
*/
console.log("Render Call:")
render(renderOptions.prod);
