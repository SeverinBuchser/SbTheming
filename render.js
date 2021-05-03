const sass = require('sass');
const fs = require('fs');

const entryFile = './scss/sb-theme.scss';

/*
  Builds 'sb-theme.css' and 'sb-theme.css.map' in developement mode.

  The sass render call outputs the above files to the './dist' folder. The css
  is expanded (all whitespace still available) and a sourceMap is created in
  the 'sb-theme.css.map' file.

  The render method includes all scss files inside the './scss' directory and
  then outputs all css into one file: 'sb-theme.css';
*/
module.exports = function render(renderOptions) {
  console.log("Entry file: ".green + entryFile.yellow);
  sass.render({
    file: entryFile,
    sourceMap: renderOptions.outMapFile,
    sourceMapContents: true,
    outFile: './dist/' +  renderOptions.outFile,
    outputStyle: renderOptions.outStyle
  }, (error, result) => {
    if (error) console.log(error);
    else {
      const map = JSON.parse(result.map.toString());
      fs.writeFile(map.file, result.css, () => {});
      fs.writeFile('./dist/' +  renderOptions.outMapFile, result.map, () => {});
      console.log("Output File: ".green + ('./dist/' + renderOptions.outFile).yellow);
      console.log("Output Map File: ".green + ('./dist/' + renderOptions.outMapFile).yellow);
    }
  })
}
