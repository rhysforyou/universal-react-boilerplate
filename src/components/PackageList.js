/* @flow */
import React from 'react'
import PropTypes from 'prop-types'

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
        <li key={p.name}>{ p.name }</li>
      ))}
    </ul>
  </div>
)

PackageList.propTypes = {
  packages: PropTypes.array.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default PackageList
