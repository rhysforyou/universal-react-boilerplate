/* eslint-env jest */
import * as Counter from '../counter'

it('creates a Increment Counter action', () => {
  expect(Counter.incrementCounter(5)).toEqual({
    type: Counter.INCREMENT_COUNTER,
    by: 5
  })
})

it('creates a Decrement Counter action', () => {
  expect(Counter.decrementCounter(5)).toEqual({
    type: Counter.DECREMENT_COUNTER,
    by: 5
  })
})

it('creates a Reset Counter action', () => {
  expect(Counter.resetCounter(5)).toEqual({
    type: Counter.RESET_COUNTER,
    to: 5
  })
})
