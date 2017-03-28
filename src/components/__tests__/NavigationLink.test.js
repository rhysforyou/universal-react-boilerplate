/* eslint-env jest */
import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import NavigationLink from '../NavigationLink'

const setup = (propOverrides, render = shallow) => {
  const props = Object.assign({
    to: '/test',
    location: '/'
  }, propOverrides)

  const router = render(
    <MemoryRouter initialEntries={[props.location]}>
      <NavigationLink {...props} />
    </MemoryRouter>
  )
  const wrapper = router.find(NavigationLink)

  return {
    props,
    wrapper,
    router,
    link: router.find('a')
  }
}

it('renders correctly', () => {
  const { wrapper } = setup()
  expect(wrapper).toMatchSnapshot()
})

it('includes a link to the specified URL', () => {
  const to = '/a/test/url'
  const { link } = setup({ to }, mount)

  expect(link.prop('href')).toBe(to)
})
