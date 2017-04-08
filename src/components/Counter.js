/* @flow */
import React from 'react'
import PropTypes from 'prop-types'

export type Props = {
  count: number,
  onIncrement?: () => void,
  onDecrement?: () => void,
  onReset?: () => void
}

const Counter = ({ count, onIncrement, onDecrement, onReset }: Props) => (
  <div>
    <p className='count'>Counter: {count}</p>
    {onIncrement && <button onClick={onIncrement.bind(this)}>Increment</button>}
    {onDecrement && <button onClick={onDecrement.bind(this)}>Decrement</button>}
    {onReset && <button onClick={onReset.bind(this)}>Reset</button>}
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onReset: PropTypes.func
}

Counter.defaultProps = {
  count: 0
}

export default Counter
