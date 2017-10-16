const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      vendor: ['react', 'react-dom','react-redux','redux']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'build', 'manifest.json'),
      name: '[name]_library'
    })
  ]
};