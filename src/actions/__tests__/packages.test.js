/* eslint-env jest */
import * as Packages from '../packages'

const query = 'react'
const results = [{packages: {name: 'react'}}]
const error = Error('something went pear-shaped')

it('creates Search Packages Requested actions', () => {
  expect(Packages.searchPackagesRequested(query)).toEqual({
    type: Packages.SEARCH_PACKAGES_REQUESTED,
    query
  })
})

it('creates Search Packages Succeeded actions', () => {
  expect(Packages.searchPackagesSucceeded(query, results)).toEqual({
    type: Packages.SEARCH_PACKAGES_SUCCEEDED,
    query,
    results
  })
})

it('creates Search Packages Failed actions', () => {
  expect(Packages.searchPackagesFailed(query, error)).toEqual({
    type: Packages.SEARCH_PACKAGES_FAILED,
    query,
    error
  })
})
