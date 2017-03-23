/* @flow */
import fetch from 'isomorphic-fetch'
import type { SearchResult } from '../actions/types'

export type SearchApiResponse = { objects: Array<SearchResult> }

export default function searchApi (query: string): Promise<SearchApiResponse> {
  return fetch(`http://registry.npmjs.org/-/v1/search?text=${query}`)
    .then(response => response.json())
}
