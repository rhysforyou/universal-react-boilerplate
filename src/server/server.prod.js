/* @flow */
import express from 'express'
import path from 'path'
import fs from 'fs'

// eslint-disable-next-line no-duplicate-imports
import type { $Request, $Response } from 'express'

const sources = ['manifest.js', 'vendor.js', 'bundle.js']
const manifestPath = path.resolve(__dirname, 'public/manifest.json')
const manifest: {[key: string]: string} = JSON.parse(fs.readFileSync(manifestPath))
const scriptPaths = sources
  .map(source => `/${manifest[source]}`)

const app = express()

// Set up Handlebars to serve our index template
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'hbs')

// Serve static assets
app.use('/', express.static(path.resolve(__dirname, 'public')))

// Render index template to all routes
app.get('*', (req: $Request, res: $Response) => {
  res.render('index', { scriptPaths })
})

// Start server
const port: string = process.env.PORT || '3000'
app.listen(port, () => {
  console.info(`Universal React App listening on http://0.0.0.0:${port}`)
})
