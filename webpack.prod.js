const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },

  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CssMinimizerPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' })
  ]
})
