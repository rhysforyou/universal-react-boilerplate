/* @flow */
import React from 'react'
import { Route } from 'react-router-dom'
import styles from './App.css'
import GlobalCounter from '../containers/GlobalCounter'
import AllPackages from '../containers/AllPackagesList'
import NavigationLink from './NavigationLink'

type Props = {
  title?: string
}

const App = ({ title }: Props) => (
  <div className={styles.app}>
    <h1 className={styles.title}>{ title }</h1>
    <ul className={styles.navigation}>
      <NavigationLink exact to='/'>Home</NavigationLink>
      <NavigationLink to='/counter'>Counter</NavigationLink>
      <NavigationLink to='/async'>Async</NavigationLink>
    </ul>

    <Route path='/counter' component={GlobalCounter} />
    <Route path='/async' component={AllPackages} />
  </div>
)

App.propTypes = {
  title: React.PropTypes.string.isRequired
}

App.defaultProps = {
  title: 'Hello Universal React'
}

export default App
