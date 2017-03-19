/* @flow */
import type {
  PackageSearchAction,
  PackageSearchSucceededAction,
  PackageSearchFailedAction
} from './types'

export const PACKAGE_SEARCH = 'PACKAGE_SEARCH'
export const PACKAGE_SEARCH_SUCCEEDED = 'PACKAGE_SEARCH_SUCCEEDED'
export const PACKAGE_SEARCH_FAILED = 'PACKAGE_SEARCH_FAILED'

export const packageSearch: (query: string) => PackageSearchAction = query => (
  { type: PACKAGE_SEARCH, query }
)

export const packageSearchSucceeded: (query: string, results: Array<any>) => PackageSearchSucceededAction = (query, results) => (
  { type: PACKAGE_SEARCH_SUCCEEDED, query, results }
)

export const packageSearchFailed: (query: string, error: string) => PackageSearchFailedAction = (query, error) => (
  { type: PACKAGE_SEARCH_FAILED, query, error }
)
