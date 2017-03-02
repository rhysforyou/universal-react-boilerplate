/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[chunkhash].[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new ManifestPlugin()
  ]
}
