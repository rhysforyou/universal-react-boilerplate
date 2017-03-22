/* @flow */
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from '../actions/counter'
import type { Action } from '../actions/types'

export type CounterState = number

const counter: (CounterState, Action) => CounterState = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.by
    case DECREMENT_COUNTER:
      return state - action.by
    case RESET_COUNTER:
      return action.to
    default:
      return state
  }
}

export default counter
