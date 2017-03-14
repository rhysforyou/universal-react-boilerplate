/* @flow */
import { combineReducers } from 'redux'
import counter from './counter'

import type { CounterState } from './counter'
import type { Action } from '../actions/types'
import type { Reducer } from 'redux'

export type State = {
  counter: CounterState
}

const demoApp: Reducer<State, Action> = combineReducers({ counter })

export default demoApp
