/* @flow */
import {
  SEARCH_PACKAGES_REQUESTED,
  SEARCH_PACKAGES_SUCCEEDED,
  SEARCH_PACKAGES_FAILED
} from '../actions/packages'
import type { Action, SearchResult } from '../actions/types'

import type { SearchesState } from './types'

const searches: (SearchesState, Action) => SearchesState = (
  state = {},
  action
) => {
  switch (action.type) {
    case SEARCH_PACKAGES_REQUESTED:
      return { ...state,
        [action.query]: {
          status: 'loading',
          query: action.query
        }
      }
    case SEARCH_PACKAGES_SUCCEEDED:
      return { ...state,
        [action.query]: {
          status: 'loaded',
          query: action.query,
          packages: action.results.map((r: SearchResult) => r.package.name)
        }
      }
    case SEARCH_PACKAGES_FAILED:
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
