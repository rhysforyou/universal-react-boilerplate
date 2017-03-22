/* @flow */
import { combineReducers } from 'redux'
import counter from './counter'
import packages from './packages'
import searches from './searches'

import type { CounterState } from './counter'
import type { SearchesState } from './searches'
import type { PackagesState } from './packages'
import type { Action } from '../actions/types'
import type { Reducer } from 'redux'

export type State = {
  counter: CounterState,
  searches: SearchesState,
  entities: {
    packages: PackagesState
  }
}

const demoApp: Reducer<State, Action> = combineReducers({
  counter,
  searches,
  entities: combineReducers({
    packages
  })
})

export default demoApp
