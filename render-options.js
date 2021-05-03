/*
  Environment varialbes
*/
module.exports = {
  dev: {
    outStyle: 'expanded',
    outFile: 'sb-theme.css',
    outMapFile: 'sb-theme.css.map'
  },
  prod: {
    outStyle: 'compressed',
    outFile: 'sb-theme.dist.css',
    outMapFile: 'sb-theme.dist.css.map'
  }
};
