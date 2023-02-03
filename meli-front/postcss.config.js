// PostCSS configuration
module.exports = cfg => {

    const variables = require('./app/styles/globals.json');
  
    const
      dev = cfg.env === 'development',
      scss = cfg.file.extname === '.scss';
  
    return {
      map: dev ? true : false,
      //syntax:  scss ? 'postcss-scss' : false,
      parser:  scss ? 'postcss-scss' : false,
      plugins: [
        require('postcss-import')({
          path: ["app"],
        }),
        require('postcss-mixins'),
        require('precss')({ variables }),
        require('postcss-map-get')(),
        require('autoprefixer')({ env: 'last 2 versions or > 1%' }),
        dev ? null : require('cssnano')(),
      ]
    };
  
  };
  