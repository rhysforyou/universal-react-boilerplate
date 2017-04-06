/* @flow */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import demoApp from '../reducers/demoApp'
import rootSaga from '../sagas/sagas'

import type { Store } from 'redux'
import type { State } from '../reducers/types'
import type { Action } from '../actions/types'

let initialState: any | void
if (typeof window !== 'undefined' && window.initialReduxState) {
  initialState = window.initialReduxState
}

const configureStore: (Object) => Store<State, Action> = (sagaMiddleware = createSagaMiddleware()) => {
  const store = createStore(demoApp, initialState, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
