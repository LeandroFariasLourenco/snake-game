const { merge } = require('webpack-merge');
const config = require('./webpack');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3333,
    liveReload: true,
    contentBase: './build',
    historyApiFallback: {
      index: '/',
    },
    index: './views/index.html',
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false,
    },
  },
});
