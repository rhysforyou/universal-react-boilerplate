/* @flow */
import { createStore } from 'redux'
import demoApp from '../reducers/demoApp'

import type { Store } from 'redux'
import type { State } from '../reducers/demoApp'
import type { Action } from '../actions/types'

const configureStore: () => Store<State, Action> = () => createStore(demoApp)

export default configureStore
