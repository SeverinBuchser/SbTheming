/*
  Environment varialbes
*/
module.exports = {
  dev: {
    style: 'expanded',
    out: 'sb-theming.css',
    map: 'sb-theming.css.map',
    omitMap: false
  },
  prod: {
    style: 'compressed',
    out: 'sb-theming.dist.css',
    map: 'sb-theming.dist.css.map',
    omitMap: true
  }
};
