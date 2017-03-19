/* @flow */
import { createStore } from 'redux'
import demoApp from '../reducers/demoApp'

import type { Store } from 'redux'
import type { State } from '../reducers/demoApp'
import type { Action } from '../actions/types'

let initialState: any | void = undefined
if (typeof window !== 'undefined' && window.initialReduxState) {
  initialState = window.initialReduxState
}

const configureStore: () => Store<State, Action> = () => createStore(demoApp, initialState)

export default configureStore
