/* @flow */
import type { Map } from 'immutable'
import type { Package } from '../actions/types'

export type CounterState = number

export type PackagesState = Map<string, Package>

export type Search = { status: 'loading', query: string }
                   | { status: 'loaded', query: string, packages: Array<string> }
                   | { status: 'error', query: string, error: Error }

export type SearchesState = Map<string, Search>

export type State = {
  counter: CounterState,
  searches: SearchesState,
  entities: {
    packages: PackagesState
  }
}
