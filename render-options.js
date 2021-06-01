/*
  Environment varialbes
*/
module.exports = {
  dev: {
    style: 'expanded',
    out: './example/sb-theming.css',
    map: './example/sb-theming.css.map',
    omitMap: false
  },
  prod: {
    style: 'compressed',
    out: './dist/sb-theming.css',
    map: './dist/sb-theming.css.map',
    omitMap: true
  }
};
