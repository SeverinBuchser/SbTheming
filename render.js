const sass = require('sass');
const fs = require('fs');
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

  sass.render({
    file: entryFile,
    outFile: renderOptions.out,
    sourceMap: renderOptions.map,
    outputStyle: renderOptions.style,
    omitSourceMapUrl: renderOptions.omitMap
  }, (error, result) => {
    if (error) logger.error(error.message);
    else {
      fs.writeFileSync(renderOptions.out, result.css);
      fs.writeFileSync(renderOptions.map, result.map);

      logger.comiled(result.stats.duration)
            .create(renderOptions.out, renderOptions.map)
            .space(2)
            .separate();
    }
  })
}
