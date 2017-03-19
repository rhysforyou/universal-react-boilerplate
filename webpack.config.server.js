/* eslint-env node */
const path = require('path')
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: {
    index: './src/server/server.prod.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
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
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  externals: [ nodeExternals() ],
  plugins: [
    new CopyWebpackPlugin([{from: './src/server/views', to: './views'}])
  ]
}
