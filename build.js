const render = require('./render')
const renderOptions = require('./render-options');

console.log("Production:\n")
/*
  Renders one time on initalizing.
*/
console.log("Render Call:")
render(renderOptions.prod);
