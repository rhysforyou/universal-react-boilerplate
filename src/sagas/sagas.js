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

function *searchPackages(action: PackageSearchAction) {
  const { query } = action
  try {
    const response = yield call(() =>
      fetch(`http://registry.npmjs.org/-/v1/search?text=${query}`)
        .then(response => response.json()))

    yield put(packageSearchSucceeded(query, response.objects))
  } catch (e) {
    yield put(packageSearchFailed(query, e))
  }
}

export default function *mySaga() {
  yield takeEvery(PACKAGE_SEARCH, searchPackages)
}
