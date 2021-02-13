const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashPlugin = require('lodash-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/snake-game-index.jsx',
  output: {
    path: path.resolve('./build'),
    filename: 'js/[name].js',
    chunkFilename: './js/vendor.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/index.pug',
      filename: 'views/index.html',
    }),
    new LodashPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.mp3$/i,
        use: {
          loader: 'file-loader?name=assets/[name].[ext]',
        },
      },
      {
        test: /\.ttf|woff|woff2$/i,
        use: {
          loader: 'file-loader?name=assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
        },
      },
    ],
  },
};
