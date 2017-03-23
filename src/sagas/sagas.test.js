/* eslint-env jest */
import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'
import {
  packageSearch,
  packageSearchSucceeded,
  packageSearchFailed
} from '../actions/packages'
import searchApi from './searchApi'
import { searchPackages } from './sagas'

describe('searchPackages saga', () => {
  const query = 'react'
  const action = packageSearch(query)
  const apiResponse = {
    objects: [{
      package: { name: 'react' }
    }]
  }
  const apiError = new Error('something went wrong')

  describe('with a successful API response', () => {
    const it = sagaHelper(searchPackages(action))

    it('calls the search API', result => {
      expect(result).toEqual(call(searchApi, 'react'))
      return apiResponse
    })

    it('and then dispatches a success action', result => {
      expect(result).toEqual(put(packageSearchSucceeded(query, apiResponse.objects)))
    })

    it('and then nothing', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('with a bad API response', () => {
    const it = sagaHelper(searchPackages(action))

    it('calls the search API', result => {
      expect(result).toEqual(call(searchApi, 'react'))
      return apiError
    })

    it('and then dispatches a failure action', result => {
      expect(result).toEqual(put(packageSearchFailed(query, apiError)))
    })

    it('and then nothing', result => {
      expect(result).toBeUndefined()
    })
  })
})
