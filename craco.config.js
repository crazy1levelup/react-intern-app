const path = require('path');

module.exports = {
  eslint: {
    mode: 'file',
  },
  webpack: {
    alias: {
      '@constants': path.resolve(__dirname, './src/constants'),
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
    },
    style: {
      sass: {
        loaderOptions: {
          implementation: require('sass'),
          webpackImporter: false,
        },
      },
    },
  },
};
