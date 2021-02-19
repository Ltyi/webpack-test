const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js',
    about: './src/script/about.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].[contenthash].js'
  },

  module: {
    rules: []
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html', filename: 'index.html', chunks: ['main'] }),
    new HtmlWebpackPlugin({ template: './public/about/index.html', filename: 'about/index.html', chunks: ['main', 'about'] })
  ]
}
