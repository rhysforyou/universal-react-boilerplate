/* @flow */
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  PACKAGE_SEARCH,
  packageSearchSucceeded,
  packageSearchFailed
} from '../actions/packages'
import searchApi from './searchApi'

import type {
  PackageSearchAction
} from '../actions/types'

export function * searchPackages (action: PackageSearchAction): Generator<*, *, *> {
  const { query } = action
  try {
    const response = yield call(searchApi, query)
    yield put(packageSearchSucceeded(query, response.objects))
  } catch (e) {
    yield put(packageSearchFailed(query, e))
  }
}

export default function * rootSaga (): Generator<*, *, *> {
  yield takeEvery(PACKAGE_SEARCH, searchPackages)
}
