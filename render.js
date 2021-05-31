const sass = require('sass');
const fs = require('fs');
const logger = require('./logger');

const entryFile = './scss/sb-theme.scss';

/*
  Builds 'sb-theme.css' and 'sb-theme.css.map' in developement mode.

  The sass render call outputs the above files to the './dist' folder. The css
  is expanded (all whitespace still available) and a sourceMap is created in
  the 'sb-theme.css.map' or 'sb-theme.dist.css.map' file.

  The render method includes all scss files inside the './scss' directory and
  then outputs all css into one file: 'sb-theme.css' or 'sb-theme.dist.css';
*/
module.exports = function render(renderOptions) {
  logger.entry(entryFile)
        .space();

  sass.render({
    file: entryFile,
    outFile: dist(renderOptions.out),
    sourceMap: dist(renderOptions.map),
    outputStyle: renderOptions.style,
    omitSourceMapUrl: renderOptions.omitMap
  }, (error, result) => {
    if (error) logger.error(error.message);
    else {
      fs.writeFileSync(dist(renderOptions.out), result.css);
      fs.writeFileSync(dist(renderOptions.map), result.map);

      logger.comiled(result.stats.duration)
            .create(dist(renderOptions.out), dist(renderOptions.map))
            .space(2)
            .separate();
    }
  })
}


function dist(file) {
  return './dist/' +  file;
}
