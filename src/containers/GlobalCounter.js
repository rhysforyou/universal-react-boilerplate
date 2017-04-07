/* @flow */
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from '../actions/counter'

import type { Dispatch } from 'redux'
import type { State } from '../reducers/types'
import type { Action } from '../actions/types'

type StateProps = { count: number }

type DispatchProps = {
  onIncrement: () => Action,
  onDecrement: () => Action,
  onReset: () => Action
}

type OwnProps = {}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  count: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps): DispatchProps => ({
  onIncrement: () => dispatch(incrementCounter()),
  onDecrement: () => dispatch(decrementCounter()),
  onReset: () => dispatch(resetCounter())
})

const GlobalCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default GlobalCounter
