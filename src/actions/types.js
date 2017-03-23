/* @flow */

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

export type Score = {|
  final: number,
  detail: {|
    quality: number,
    popularity: number,
    maintenance: number
  |}
|}

export type SearchResult = {|
  package: Package,
  score: Score,
  searchScore: number
|}

export type IncrementCounterAction = { type: 'INCREMENT_COUNTER', by: number }
export type DecrementCounterAction = { type: 'DECREMENT_COUNTER', by: number }
export type ResetCounterAction = { type: 'RESET_COUNTER', to: number }

export type SearchPackagesRequestedAction = { type: 'SEARCH_PACKAGES_REQUESTED', query: string }
export type SearchPackagesSucceededAction = { type: 'SEARCH_PACKAGES_SUCCEEDED', query: string, results: Array<SearchResult> }
export type SearchPackagesFailedAction = { type: 'SEARCH_PACKAGES_FAILED', query: string, error: string }

export type Action = IncrementCounterAction
                   | DecrementCounterAction
                   | ResetCounterAction
                   | SearchPackagesRequestedAction
                   | SearchPackagesSucceededAction
                   | SearchPackagesFailedAction
