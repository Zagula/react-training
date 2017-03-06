const path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },

  devtool: 'inline-source-map',
  watch: true,

  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }]
  }
};