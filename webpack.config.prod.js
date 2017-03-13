/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: './src/index.js'
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new ManifestPlugin()
  ]
}
