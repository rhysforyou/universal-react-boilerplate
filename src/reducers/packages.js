/* @flow */
import {
  SEARCH_PACKAGES_SUCCEEDED
} from '../actions/packages'
import type { Action, Package } from '../actions/types'

export type PackagesState = {
  [key : string]: Package
}

const counter: (PackagesState, Action) => PackagesState = (
  state = {},
  action
) => {
  switch (action.type) {
    case SEARCH_PACKAGES_SUCCEEDED:
      return {
        ...state,
        ...action.results
        .map(result => result.package)
        .reduce((packages, npmPackage) => ({
          ...packages,
          [npmPackage.name]: npmPackage
        }), {})
      }
    default:
      return state
  }
}

export default counter
