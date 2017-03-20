/* @flow */

export type IncrementCounterAction = { type: 'INCREMENT_COUNTER', by: number }
export type DecrementCounterAction = { type: 'DECREMENT_COUNTER', by: number }
export type ResetCounterAction = { type: 'RESET_COUNTER', to: number }

export type PackageSearchAction = { type: 'PACKAGE_SEARCH', query: string }
export type PackageSearchSucceededAction = { type: 'PACKAGE_SEARCH_SUCCEEDED', query: string, results: Array<any> }
export type PackageSearchFailedAction = { type: 'PACKAGE_SEARCH_FAILED', query: string, error: string }

export type Action = IncrementCounterAction
                   | DecrementCounterAction
                   | ResetCounterAction
                   | PackageSearchAction
                   | PackageSearchSucceededAction
                   | PackageSearchFailedAction
