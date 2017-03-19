/* @flow */
import {
  PACKAGE_SEARCH_SUCCEEDED
} from '../actions/packages'
import type { Action } from '../actions/types'

export type Author = {
  name: string,
  email: string,
  url: string
}

export type Package = {
  name: string,
  version: string,
  description?: string,
  author?: Author
}

export type PackagesState = {
  [key : string]: Package
}

const counter: (PackagesState, Action) => PackagesState = (
  state = {},
  action
) => {
  switch (action.type) {
  case PACKAGE_SEARCH_SUCCEEDED:
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
