/* @flow */
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  SEARCH_PACKAGES_REQUESTED,
  searchPackagesSucceeded,
  searchPackagesFailed
} from '../actions/packages'
import searchApi from './searchApi'

import type { SearchPackagesRequestedAction } from '../actions/types'
import type { SearchApiResponse } from './searchApi'

type Saga = Generator<Object, void, Object>

export function * searchPackages (action: SearchPackagesRequestedAction): Saga {
  const { query } = action
  try {
    const response: SearchApiResponse = yield call(searchApi, query)
    yield put(searchPackagesSucceeded(query, response.objects))
  } catch (e) {
    yield put(searchPackagesFailed(query, e))
  }
}

export default function * rootSaga (): Saga {
  yield takeEvery(SEARCH_PACKAGES_REQUESTED, searchPackages)
}
