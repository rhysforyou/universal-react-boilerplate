/* @flow */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import demoApp from '../reducers/demoApp'
import mySaga from '../sagas/sagas'

import type { Store } from 'redux'
import type { State } from '../reducers/demoApp'
import type { Action } from '../actions/types'

let initialState: any | void = undefined
if (typeof window !== 'undefined' && window.initialReduxState) {
  initialState = window.initialReduxState
}

const sagaMiddleware = createSagaMiddleware()

const configureStore: () => Store<State, Action> = () => {
  const store = createStore(demoApp, initialState, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(mySaga)
  return store
}


export default configureStore
