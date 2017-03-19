/* @flow */
import express from 'express'
import path from 'path'
import webpack from 'webpack'
import config from '../../webpack.config.dev'

// eslint-disable-next-line no-duplicate-imports
import type { $Request, $Response } from 'express'

const compiler = webpack(config)
const scriptPaths = ['/bundle.js']
const initialState = JSON.stringify(new Object())

const app = express()

// Set up Handlebars to serve our index template
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'hbs')

// Set up webpack dev server as middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler))

// Render index template to all routes
app.get('*', (req: $Request, res: $Response) => {
  res.render('index', { scriptPaths, initialState })
})

// Start server
const port: string = process.env.PORT || '3000'
app.listen(port, () => {
  console.info(`Universal React App listening on http://0.0.0.0:${port}`)
})
