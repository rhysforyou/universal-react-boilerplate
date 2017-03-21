/* @flow */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../routes/routes'
import styles from './App.css'

import type { Element } from 'react'

type LinkProps = {
  to: string,
  exact?: boolean,
  children?: Element<*>
}

const Link = ({ to, exact, children }: LinkProps) => (
  <li>
    <NavLink
      to={to}
      exact={exact}
      className={styles.navigationLink}
      activeClassName={styles.activeLink}>{ children }</NavLink>
  </li>
)

type Props = {
  title?: string
}

const App = ({ title }: Props) => (
  <div className={styles.app}>
    <h1 className={styles.title}>{ title }</h1>
    <ul className={styles.navigation}>
      <Link exact to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/async">Async</Link>
    </ul>
    {renderRoutes(routes)}
  </div>
)

App.propTypes = {
  title: React.PropTypes.string.isRequired
}

App.defaultProps = {
  title: 'Hello Universal React'
}

export default App
