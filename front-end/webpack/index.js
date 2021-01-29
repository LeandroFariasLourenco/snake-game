const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    home: ['./src/js/home.js', './src/scss/home.scss'],
    game: ['./src/js/game.js', './src/scss/game.scss'],
    global: ['./src/js/globals.js', './src/scss/globals.scss'],
  },
  output: {
    path: path.resolve('./build'),
    filename: 'js/[name].js',
    chunkFilename: './js/vendor.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/home.pug',
      filename: 'views/home.html',
    }),
    new HtmlWebpackPlugin({
      template: './views/game.pug',
      filename: 'views/game.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
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
