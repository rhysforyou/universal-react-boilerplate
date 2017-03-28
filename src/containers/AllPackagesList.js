/* @flow */
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { searchPackagesRequested } from '../actions/packages'
import PackageList from '../components/PackageList'

import type { MapStateToProps, MapDispatchToProps } from 'react-redux'
import type { Package } from '../actions/types'
import type { State } from '../reducers/demoApp'

type StateProps = { packages: Array<Package> }

type DispatchProps = {
  onRefresh: () => void
}

type OwnProps = {}

const reactSearchSelector = state => state.searches.react || {}
const packagesSelector = state => state.entities.packages

const reactSearchPackageIdsSelector = createSelector(
  reactSearchSelector,
  search => search.status === 'loaded' ? search.packages : []
)

const reactSearchPackagesSelector = createSelector(
  reactSearchPackageIdsSelector,
  packagesSelector,
  (ids, packages) => ids.map(p => packages[p])
)

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = state => ({
  packages: reactSearchPackagesSelector(state)
})

const mapDispatchToProps: MapDispatchToProps<State, OwnProps, DispatchProps> = dispatch => ({
  onRefresh: () => dispatch(searchPackagesRequested('react'))
})

const AllPackagesList = connect(mapStateToProps, mapDispatchToProps)(PackageList)

export default AllPackagesList
