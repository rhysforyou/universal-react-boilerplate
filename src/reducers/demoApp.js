/* @flow */
import { combineReducers } from 'redux'
import counter from './counter'
import packages from './packages'
import searches from './searches'

import type { Reducer } from 'redux'
import type { Action } from '../actions/types'
import type { State } from './types'

const demoApp: Reducer<State, Action> = combineReducers({
  counter,
  searches,
  entities: combineReducers({
    packages
  })
})

export default demoApp
