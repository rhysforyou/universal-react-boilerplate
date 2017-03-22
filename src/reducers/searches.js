/* @flow */
import {
  PACKAGE_SEARCH,
  PACKAGE_SEARCH_SUCCEEDED,
  PACKAGE_SEARCH_FAILED
} from '../actions/packages'
import type { Action } from '../actions/types'

export type Search = { status: 'loading', query: string }
                   | { status: 'loaded', query: string, packages: Array<string> }
                   | { status: 'error', query: string, error: Error }

export type SearchesState = { [key: string]: Search }

const searches: (SearchesState, Action) => SearchesState = (
  state = {},
  action
) => {
  switch (action.type) {
    case PACKAGE_SEARCH:
      return { ...state,
        [action.query]: {
          status: 'loading',
          query: action.query
        }
      }
    case PACKAGE_SEARCH_SUCCEEDED:
      return { ...state,
        [action.query]: {
          status: 'loaded',
          query: action.query,
          packages: action.results.map(r => r.package.name)
        }
      }
    case PACKAGE_SEARCH_FAILED:
      return { ...state,
        [action.query]: {
          status: 'error',
          query: action.query,
          error: action.error
        }
      }
    default:
      return state
  }
}

export default searches
