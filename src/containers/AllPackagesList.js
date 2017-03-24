/* @flow */
import { connect } from 'react-redux'
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

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = state => {
  if (state.searches.react != null && state.searches.react.status === 'loaded') {
    return {
      packages: state.searches.react.packages.map((p: string) => {
        return state.entities.packages[p]
      })
    }
  } else {
    return { packages: [] }
  }
}

const mapDispatchToProps: MapDispatchToProps<State, OwnProps, DispatchProps> = dispatch => ({
  onRefresh: () => dispatch(searchPackagesRequested('react'))
})

const AllPackagesList = connect(mapStateToProps, mapDispatchToProps)(PackageList)

export default AllPackagesList
