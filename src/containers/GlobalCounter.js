/* @flow */
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from '../actions/counter'

import type { MapStateToProps, MapDispatchToProps } from 'react-redux'
import type { State } from '../reducers/types'

type StateProps = { count: number }

type DispatchProps = {
  onIncrement: () => void,
  onDecrement: () => void,
  onReset: () => void
}

type OwnProps = {}

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = state => ({
  count: state.counter
})

const mapDispatchToProps: MapDispatchToProps<State, OwnProps, DispatchProps> = dispatch => ({
  onIncrement: () => dispatch(incrementCounter()),
  onDecrement: () => dispatch(decrementCounter()),
  onReset: () => dispatch(resetCounter())
})

const GlobalCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default GlobalCounter
