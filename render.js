const sass = require('sass');
const fse = require('fs-extra');
const logger = require('./logger');

const entryFile = './scss/sb-theming.scss';

/*
  Builds 'sb-theme.css' and 'sb-theme.css.map' in developement mode.

  The sass render call outputs the above files to the location which is
  configured inside the 'render-options' file. A sourceMap is created in
  the 'sb-theme.css.map' or 'sb-theme.dist.css.map' file.

  The render method includes all scss files inside the './scss' directory and
  then outputs all css into one file: 'sb-theme.css' or 'sb-theme.dist.css';
*/
module.exports = function render(renderOptions) {
  logger.entry(entryFile)
        .space();

  let result = sass.renderSync({
    file: entryFile,
    outFile: renderOptions.out,
    sourceMap: renderOptions.map,
    outputStyle: renderOptions.style,
    omitSourceMapUrl: renderOptions.omitMap
  })

  fse.outputFileSync(renderOptions.out, result.css);
  fse.outputFileSync(renderOptions.map, result.map);
  
  logger.comiled(result.stats.duration)
        .create(renderOptions.out, renderOptions.map);
}
