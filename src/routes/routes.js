/* @flow */
import GlobalCounter from '../containers/GlobalCounter'
import AllPackages from '../containers/AllPackages'

type Route = {|
  component: ReactClass<*>,
  path?: string,
  exact?: boolean,
  routes?: Array<Route>,
  loadData?: () => Promise<*>,
|}

const routes: Array<Route> = [
  { path: '/counter',
    component: GlobalCounter
  },
  { path: '/async',
    component: AllPackages,
    loadData: AllPackages.loadData
  }
]

export default routes
