/* @flow */
import GlobalCounter from './containers/GlobalCounter'
import AllPackagesList from './containers/AllPackagesList'

import rootSaga from './sagas/sagas'
import { searchPackagesRequested } from './actions/packages'

type Route = {|
  component: ReactClass<*>,
  path?: string,
  exact?: boolean,
  routes?: Array<Route>,
  loadData?: () => Generator<*, void, *>
|}

const routes: Array<Route> = [
  { component: GlobalCounter,
    path: '/counter'
  },
  { component: AllPackagesList,
    path: '/async',
    loadData: function * () {
      yield rootSaga(searchPackagesRequested('react'))
    }
  }
]

export default routes
