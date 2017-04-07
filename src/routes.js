/* @flow */
import GlobalCounter from './containers/GlobalCounter'
import AllPackagesList from './containers/AllPackagesList'

import { searchPackages } from './sagas/sagas'

type Route = {|
  component: ReactClass<*>,
  path?: string,
  exact?: boolean,
  routes?: Array<Route>,
  preloaders?: (Object) => Array<Array<*>>
|}

// istanbul ignore next
const routes: Array<Route> = [
  { component: GlobalCounter,
    path: '/counter'
  },
  { component: AllPackagesList,
    path: '/async',
    preloaders: (params) => [
      [ searchPackages, { query: 'react' } ]
    ]
  }
]

export default routes
