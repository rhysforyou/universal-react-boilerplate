/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { StaticRouter } from 'react-router-dom'
import NavigationLink from '../NavigationLink'

const setup = (propOverrides) => {
  const props = Object.assign({
    to: '/test',
    location: '/'
  }, propOverrides)

  const router = shallow(
    <StaticRouter location={props.location} context={{}}>
      <NavigationLink {...props} />
    </StaticRouter>
  )
  const wrapper = router.find(NavigationLink)

  return {
    props,
    wrapper,
    router
  }
}

it('renders correctly', () => {
  const { wrapper } = setup()
  expect(wrapper).toMatchSnapshot()
})
