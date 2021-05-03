const sass = require('sass');
const fs = require('fs');
const watcher = require('./watcher');

/*
  Builds 'sb-theme.css' and 'sb-theme.css.map' in developement mode.

  With the help of chokidar, on any file change in the './scss' directory, the
  sass render call outputs the above files to the './dist' folder. The
  css is expanded (all whitespace still available) and a sourceMap is created in
  the 'sb-theme.css.map' file.

  The render method includes all scss files inside the './scss' directory and
  then outputs all css into one file: 'sb-theme.css';
*/
watcher((path, status) => {
  sass.render({
    file: './scss/sb-theme.scss',
    sourceMap: 'sb-theme.css.map',
    sourceMapContents: true,
    outFile: './dist/sb-theme.css',
    outputStyle: 'expanded'
  }, (error, result) => {
    if (error) console.log(error)
    else {
      const map = JSON.parse(result.map.toString());
      fs.writeFile(map.file, result.css, () => {})
      fs.writeFile('./dist/sb-theme.css.map', result.map, () => {})
    }
  })
})
