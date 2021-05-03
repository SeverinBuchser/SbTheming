const watcher = require('./watcher');
const render = require('./render');
const renderOptions = require('./render-options');
const colors = require('colors');

console.log("Developement:\n".red)
/*
  Renders one time on initalizing. The watcher does not fire on initializing.
*/
console.log("Inital render call:".green)
render(renderOptions.dev);
/*
  Watches for changes on any file change in the './scss' directory with the help
  of chokidar.
*/
watcher((path) => {
  console.log(("\nChange occured in:" + path).green);
  render(renderOptions.dev);
});
