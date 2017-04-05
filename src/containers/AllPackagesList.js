/* @flow */
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { searchPackagesRequested } from '../actions/packages'
import PackageList from '../components/PackageList'

import type { MapStateToProps, MapDispatchToProps } from 'react-redux'
import type { Selector as ReselectSelector } from 'reselect'
import type { Package } from '../actions/types'
import type { Search } from '../reducers/searches'
import type { PackagesState } from '../reducers/packages'
import type { State } from '../reducers/demoApp'

type Selector<Result> = ReselectSelector<State, void, Result>;

type StateProps = { packages: Array<Package> }

type DispatchProps = {
  onRefresh: () => void
}

type OwnProps = {}

const reactSearchSelector: Selector<Search> = state => state.searches.react || { query: 'react', status: 'loading' }
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

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = state => ({
  packages: reactSearchPackagesSelector(state)
})

const mapDispatchToProps: MapDispatchToProps<State, OwnProps, DispatchProps> = dispatch => ({
  onRefresh: () => dispatch(searchPackagesRequested('react'))
})

const AllPackagesList = connect(mapStateToProps, mapDispatchToProps)(PackageList)

export default AllPackagesList
