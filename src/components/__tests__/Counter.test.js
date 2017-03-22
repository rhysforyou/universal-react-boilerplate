/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../Counter'

const setup = propOverrides => {
  const props = Object.assign({
    count: 0,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
    onReset: jest.fn()
  }, propOverrides)

  const wrapper = shallow(<Counter {...props} />)

  return {
    props,
    wrapper,
    count: wrapper.find('.count')
  }
}

it('renders correctly', () => {
  const { wrapper } = setup()
  expect(wrapper).toMatchSnapshot()
})

it('displays the correct count', () => {
  const { count } = setup({ count: 1 })
  expect(count.text()).toEqual('Counter: 1')
})

const testClickButton = (buttonTitle, property) => {
  it(`calls the '${property}' property when '${buttonTitle}' is clicked`, () => {
    const { props, wrapper } = setup()
    wrapper.find(`button[children="${buttonTitle}"]`).simulate('click')
    expect(props[property].mock.calls.length).toEqual(1)
  })
}

testClickButton('Increment', 'onIncrement')
testClickButton('Decrement', 'onDecrement')
testClickButton('Reset', 'onReset')

const testRenderButton = (buttonTitle, property) => {
  it(`doesn't render '${buttonTitle}' if '${property}' is null`, () => {
    const { wrapper } = setup({ [property]: null })
    const button = wrapper.find(`button[children="${buttonTitle}"]`)
    expect(button.length).toEqual(0)
  })
}

testRenderButton('Increment', 'onIncrement')
testRenderButton('Decrement', 'onDecrement')
testRenderButton('Reset', 'onReset')
