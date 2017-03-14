/* @flow */
import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import demoApp from '../reducers/demoApp'

import type { Store } from 'redux'
import type { State } from '../reducers/demoApp'
import type { Action } from '../actions/types'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore: () => Store<State, Action> = () => createStore(
  demoApp,
  undefined,
  composeEnhancers(applyMiddleware(createLogger({ collapsed: true })))
)

export default configureStore
