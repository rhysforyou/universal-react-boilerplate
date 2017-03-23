/* @flow */
import type {
  SearchPackagesRequestedAction,
  SearchPackagesSucceededAction,
  SearchPackagesFailedAction
} from './types'

export const SEARCH_PACKAGES_REQUESTED = 'SEARCH_PACKAGES_REQUESTED'
export const SEARCH_PACKAGES_SUCCEEDED = 'SEARCH_PACKAGES_SUCCEEDED'
export const SEARCH_PACKAGES_FAILED = 'SEARCH_PACKAGES_FAILED'

export const searchPackagesRequested: (query: string) => SearchPackagesRequestedAction = query => (
  { type: SEARCH_PACKAGES_REQUESTED, query }
)

export const searchPackagesSucceeded: (query: string, results: Array<any>) => SearchPackagesSucceededAction = (query, results) => (
  { type: SEARCH_PACKAGES_SUCCEEDED, query, results }
)

export const searchPackagesFailed: (query: string, error: string) => SearchPackagesFailedAction = (query, error) => (
  { type: SEARCH_PACKAGES_FAILED, query, error }
)
