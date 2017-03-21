/* @flow */
import React from 'react'

type Props = {
  packages: Array<Object>
}

const PackageList = ({ packages }: Props) => (
  <ul>
    { packages.map(p => <li>{p.name}</li>) }
  </ul>
)

PackageList.propTypes = {
  package: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default PackageList
