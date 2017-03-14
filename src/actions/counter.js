/* @flow */
import type {
  IncrementCounterAction,
  DecrementCounterAction,
  ResetCounterAction
} from './types'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const RESET_COUNTER = 'RESET_COUNTER'

export const incrementCounter: (by?: number) => IncrementCounterAction = (by = 1) => (
  { type: INCREMENT_COUNTER, by }
)

export const decrementCounter: (by?: number) => DecrementCounterAction = (by = 1) => (
  { type: DECREMENT_COUNTER, by }
)

export const resetCounter: (to?: number) => ResetCounterAction = (to = 0) => (
  { type: RESET_COUNTER, to }
)
