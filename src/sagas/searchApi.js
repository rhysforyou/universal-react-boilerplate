/* @flow */
import fetch from 'isomorphic-fetch'

export default function searchApi (query: string): Promise<any> {
  return fetch(`http://registry.npmjs.org/-/v1/search?text=${query}`)
    .then(response => response.json())
}
