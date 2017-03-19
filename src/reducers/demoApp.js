/* @flow */
import { combineReducers } from 'redux'
import counter from './counter'
import packages from './packages'

import type { CounterState } from './counter'
import type { PackagesState } from './packages'
import type { Action } from '../actions/types'
import type { Reducer } from 'redux'

export type State = {
  counter: CounterState,
  entites: {
    packages: PackagesState
  }
}

const demoApp: Reducer<State, Action> = combineReducers({
  counter,
  entities: combineReducers({
    packages
  })
})

export default demoApp
