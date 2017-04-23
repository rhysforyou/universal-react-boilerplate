/* @flow */
import { Map } from 'immutable'
import { SEARCH_PACKAGES_SUCCEEDED } from '../actions/packages'
import type { Action } from '../actions/types'
import type { PackagesState } from './types'

const counter: (PackagesState, Action) => PackagesState = (
  state = Map({}),
  action
) => {
  switch (action.type) {
    case SEARCH_PACKAGES_SUCCEEDED:
      return state.merge(action.results
        .map(result => result.package)
        .reduce((packages, npmPackage) => {
          return packages.set(npmPackage.name, npmPackage)
        }, Map({})))
    default:
      return state
  }
}

export default counter
