import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('Renders the App Component', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})
