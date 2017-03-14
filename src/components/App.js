/* @flow */
import React from 'react'
import styles from './App.css'

type Props = {
  title?: string
}

const App = ({ title }: Props) => (
  <div className={styles.app}>
    <h1 className="title">{ title }</h1>
  </div>
)

App.propTypes = {
  title: React.PropTypes.string.isRequired
}

App.defaultProps = {
  title: 'Hello Universal React'
}

export default App
