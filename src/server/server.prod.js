/* @flow */
import express from 'express'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { StaticRouter as Router } from 'react-router'
import { matchRoutes } from 'react-router-config'
import routes from '../routes/routes'
import App from '../components/App'
import configureStore from '../store/configureStore'

// eslint-disable-next-line no-duplicate-imports
import type { $Request, $Response } from 'express'
import type { Store } from 'redux'

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
  initializeStore(req, routes)
    .then(store => render(store, req, res))
})

function initializeStore(req, routes): Promise<Store<*, *>> {
  // Configure our store
  const store = configureStore()

  // Get data loading promises
  const dataPromises = matchRoutes(routes, req.url)
    .map(route => {
      if (route.loadData) {
        return route.loadData()
      } else {
        return Promise.resolve(null)
      }
    })

  // Await data promises and then return our store
  // TODO: Maybe add some eror handling for rejected promises?
  return Promise
    .all(dataPromises)
    .then(() => store)
    .catch(() => store)
}

function render(store: Store<*, *>, req: $Request, res: $Response) {
  // Render app HTML
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

  // Pack store state
  const initialState = JSON.stringify(store.getState())

  // Check if we encountered a redirect
  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    res.writeHead(302, {
      Location: context.url
    })
    res.end()
    return
  }

  // We're good, send the response
  res.render('index', { scriptPaths, innerHTML, initialState })
}

// Start server
const port: string = process.env.PORT || '3000'
app.listen(port, () => {
  console.info(`Universal React App listening on http://0.0.0.0:${port}`)
})
