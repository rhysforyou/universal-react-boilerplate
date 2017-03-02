/* eslint-env node */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
