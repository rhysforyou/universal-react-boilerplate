/* @flow */
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  SEARCH_PACKAGES_REQUESTED,
  searchPackagesSucceeded,
  searchPackagesFailed
} from '../actions/packages'
import searchApi from './searchApi'

import type { SearchApiResponse } from './searchApi'

export type Saga = Generator<Object, void, Object>

export function * searchPackages ({ query }: { query: string }): Saga {
  try {
    const response: SearchApiResponse = yield call(searchApi, query)
    yield put(searchPackagesSucceeded(query, response.objects))
  } catch (e) {
    yield put(searchPackagesFailed(query, e))
  }
}

export default function * rootSaga (): Saga {
  // istanbul ignore next
  yield takeEvery(SEARCH_PACKAGES_REQUESTED, searchPackages)
}
