/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import PackageList from '../PackageList'

const setup = (propOverrides) => {
  const props = Object.assign({
    onRefresh: () => null,
    packages: [
      {
        name: 'react',
        version: '15.4.2',
        description: 'React is a JavaScript library for building user interfaces.'
      },
      {
        name: 'redux',
        version: '3.6.0',
        description: 'Predictable state container for JavaScript apps'
      }
    ]
  }, propOverrides)

  const wrapper = shallow(<PackageList {...props} />)

  return {
    props,
    wrapper,
    refreshButton: wrapper.find('button')
  }
}

it('renders correctly', () => {
  const { wrapper } = setup()
  expect(wrapper).toMatchSnapshot()
})

it('calls its onRefresh handler', () => {
  const onRefresh = jest.fn()
  const { refreshButton } = setup({ onRefresh })

  refreshButton.simulate('click')

  expect(onRefresh.mock.calls.length).toBe(1)
})
