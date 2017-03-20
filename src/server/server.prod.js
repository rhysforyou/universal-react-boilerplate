/* @flow */
import express from 'express'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { StaticRouter as Router } from 'react-router'
import App from '../components/App'
import configureStore from '../store/configureStore'

// eslint-disable-next-line no-duplicate-imports
import type { $Request, $Response } from 'express'

const sources = ['vendor.js', 'bundle.js']
const manifestPath = path.resolve(__dirname, 'public/manifest.json')
const manifest: {[key: string]: string} = JSON.parse(fs.readFileSync(manifestPath).toString())
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
  const store = configureStore()
  const context = {}
  const innerHTML = ReactDOMServer.renderToString(
    <AppContainer>
      <Provider store={store}>
        <Router context={context} location={req.url}>
          <App />
        </Router>
      </Provider>
    </AppContainer>
  )
  const initialState = JSON.stringify(store.getState())
  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    res.writeHead(302, {
      Location: context.url
    })
    res.end()
  } else {
    // we're good, send the response
    res.render('index', { scriptPaths, innerHTML, initialState })
  }
})

// Start server
const port: string = process.env.PORT || '3000'
app.listen(port, () => {
  console.info(`Universal React App listening on http://0.0.0.0:${port}`)
})
