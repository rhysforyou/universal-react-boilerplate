import express from 'express'
import path from 'path'

const app = express()

// Figure out what scripts we need to load
let scriptPaths

if (process.env.NODE_ENV === 'production') {
  const sources = ['manifest.js', 'vendor.js', 'bundle.js']
  const manifest = require('./public/manifest.json')
  scriptPaths = sources
    .map(source => `/public/${manifest[source]}`)
} else {
  const webpack = require('webpack')
  const config = require('../../webpack.config.dev')
  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler))
  scriptPaths = ['bundle.js']
}

// Set up Handlebars to serve our index template
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'hbs')

// Serve static webpack assets in production
app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
  res.render('index', { scriptPaths })
})

app.listen(3000, () => {
  console.log('Universal React App listening on http://localhost:3000')
})
