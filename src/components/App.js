/* @flow */
import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import styles from './App.css'
import NavigationLink from './NavigationLink'
import routes from '../routes'

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

    {renderRoutes(routes)}
  </div>
)

App.propTypes = {
  title: PropTypes.string.isRequired
}

App.defaultProps = {
  title: 'Hello Universal React'
}

export default App
