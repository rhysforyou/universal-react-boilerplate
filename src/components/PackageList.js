/* @flow */
import React from 'react'

import type { Package } from '../actions/types'

type Props = {
  packages: Array<Package>,
  onRefresh: () => void
}

const PackageList = ({ packages, onRefresh }: Props) => (
  <div className='packages'>
    <button onClick={onRefresh.bind(this)}>Refresh</button>
    <ul>
      {packages.map((p: Package) => (
        <li>{ p.name }</li>
      ))}
    </ul>
  </div>
)

PackageList.propTypes = {
  packages: React.PropTypes.array.isRequired,
  onRefresh: React.PropTypes.func.isRequired
}

export default PackageList
