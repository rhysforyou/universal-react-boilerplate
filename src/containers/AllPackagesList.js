/* @flow */
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { searchPackagesRequested } from '../actions/packages'
import PackageList from '../components/PackageList'

import type { Dispatch } from 'redux'
import type { Selector as ReselectSelector } from 'reselect'
import type { Action, Package } from '../actions/types'
import type { State, PackagesState, Search } from '../reducers/types'

type StateProps = { packages: Array<Package> }
type DispatchProps = { onRefresh: () => Action }
type OwnProps = { query: string }
type Selector<Result> = ReselectSelector<State, OwnProps, Result>;

const reactSearchSelector: Selector<Search> = (state, { query }) => {
  return state.searches[query] || { query: query, status: 'loading' }
}
const packagesSelector: Selector<PackagesState> = state => state.entities.packages

const reactSearchPackageIdsSelector: Selector<Array<string>> = createSelector(
  reactSearchSelector,
  search => (search.status && search.status === 'loaded') ? search.packages : []
)

const reactSearchPackagesSelector: Selector<Array<Package>> = createSelector(
  reactSearchPackageIdsSelector,
  packagesSelector,
  (ids, packages) => ids.map(id => packages[id])
)

export const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  packages: reactSearchPackagesSelector(state, props)
})

export const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps): DispatchProps => ({
  onRefresh: () => dispatch(searchPackagesRequested(props.query))
})

const AllPackagesList: ReactClass<*> = connect(mapStateToProps, mapDispatchToProps)(PackageList)

AllPackagesList.defaultProps = {
  query: 'react'
}

export default AllPackagesList
