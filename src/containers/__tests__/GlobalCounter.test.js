/* eslint-env jest */
import { mapStateToProps, mapDispatchToProps } from '../GlobalCounter'

it('maps the store state to its props', () => {
  expect(mapStateToProps({ counter: 1 }, null)).toEqual({ count: 1 })
})

it('dispatches actions back to the store', () => {
  const dispatch = jest.fn()
  const { onIncrement, onDecrement, onReset } = mapDispatchToProps(dispatch, null)

  onIncrement()
  onDecrement()
  onReset()

  const calls = dispatch.mock.calls
  expect(calls.length).toBe(3)
  expect(calls[0][0].type).toBe('INCREMENT_COUNTER')
  expect(calls[1][0].type).toBe('DECREMENT_COUNTER')
  expect(calls[2][0].type).toBe('RESET_COUNTER')
})
