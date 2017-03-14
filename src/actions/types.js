/* @flow */

export type IncrementCounterAction = { type: 'INCREMENT_COUNTER', by: number }

export type DecrementCounterAction = { type: 'DECREMENT_COUNTER', by: number }

export type ResetCounterAction = { type: 'RESET_COUNTER', to: number }

export type Action = IncrementCounterAction
                   | DecrementCounterAction
                   | ResetCounterAction
