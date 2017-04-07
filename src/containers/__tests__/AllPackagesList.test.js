/* eslint-env jest */
import { mapStateToProps, mapDispatchToProps } from '../AllPackagesList'

const npmPackage = { name: 'react' }
const state = {
  entities: {
    packages: {
      react: npmPackage
    }
  },
  searches: {
    react: {
      status: 'loaded',
      query: 'react',
      packages: ['react']
    }
  }
}
const props = { query: 'react' }

it('maps the store state to its props', () => {
  expect(mapStateToProps(state, props)).toEqual({ packages: [ npmPackage ] })
})

it('dispatches actions back to the store', () => {
  const dispatch = jest.fn()
  const { onRefresh } = mapDispatchToProps(dispatch, props)

  onRefresh()

  const calls = dispatch.mock.calls
  expect(calls.length).toBe(1)
  expect(calls[0][0].type).toBe('SEARCH_PACKAGES_REQUESTED')
  expect(calls[0][0].query).toBe(props.query)
})
