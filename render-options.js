/*
  Environment varialbes
*/
module.exports = {
  dev: {
    style: 'expanded',
    out: 'sb-theme.css',
    map: 'sb-theme.css.map',
    omitMap: false
  },
  prod: {
    style: 'compressed',
    out: 'sb-theme.dist.css',
    map: 'sb-theme.dist.css.map',
    omitMap: false
  }
};
