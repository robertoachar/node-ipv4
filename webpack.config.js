var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  stats: {
    colors: true
  },
  target: 'node'
};
