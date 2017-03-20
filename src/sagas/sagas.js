/* @flow */
import { call, put, takeEvery } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import {
  PACKAGE_SEARCH,
  packageSearchSucceeded,
  packageSearchFailed
} from '../actions/packages'
import type {
  PackageSearchAction
} from '../actions/types'

export function searchApi(query: string): Promise<any> {
  return fetch(`http://registry.npmjs.org/-/v1/search?text=${query}`)
    .then(response => response.json())
}

export function *searchPackages(action: PackageSearchAction): Generator<*, *, *> {
  const { query } = action
  try {
    const response = yield call(searchApi, query)

    yield put(packageSearchSucceeded(query, response.objects))
  } catch (e) {
    yield put(packageSearchFailed(query, e))
  }
}

export default function *mySaga(): Generator<*, *, *> {
  yield takeEvery(PACKAGE_SEARCH, searchPackages)
}
