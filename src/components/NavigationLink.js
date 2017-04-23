/* @flow */
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavigationLink.css'

import type { Element } from 'react'

type Props = {
  to: string,
  exact?: boolean,
  children?: Element<*>
}

const NavigationLink = ({ to, exact, children }: Props) => (
  <li className={styles.listItem}>
    <NavLink
      to={to}
      exact={exact}
      className={styles.navigationLink}
      activeClassName={styles.active}>{ children }</NavLink>
  </li>
)

export default NavigationLink
