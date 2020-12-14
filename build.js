const sass = require('sass');
const fs = require('fs');

/*
  Builds 'sb-theme.dist.css' and 'sb-theme.dist.css.map'.

  Sass render call, which outputs the above files to the './dist' folder. The
  css is compressed (all whitespace is removed) and a sourceMap is created in
  the 'sb-theme.dist.css.map' file. The render method is called only once since
  this is production mode.

  The render method includes all scss files inside the './scss' directory and
  then outputs all css into one file: 'sb-theme.dist.css';
*/
sass.render({
  file: './scss/sb-theme.scss',
  sourceMap: 'sb-theme.dist.css.map',
  sourceMapContents: true,
  outFile: './dist/sb-theme.dist.css',
  outputStyle: 'compressed',
}, (error, result) => {
  const map = JSON.parse(result.map.toString());
  fs.writeFile(map.file, result.css, () => {})
  fs.writeFile('./dist/sb-theme.dist.css.map', result.map, () => {})
})
