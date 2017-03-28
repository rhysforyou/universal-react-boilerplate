/* eslint-env jest */
import fetch from 'isomorphic-fetch'
import searchApi from '../searchApi.js'

// Mock fetch to return something response-like
jest.mock('isomorphic-fetch', () => {
  return jest.fn(() => Promise.resolve({
    json: () => true
  }))
})

describe('search api', () => {
  it('fetches a url containing the query', () => {
    const query = 'react'
    searchApi(query)
    expect(fetch.mock.calls.length).toBe(1)
    expect(fetch.mock.calls[0][0]).toMatch(query)
  })
})
