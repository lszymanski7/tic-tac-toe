import React from 'react'
import { render } from '@testing-library/react'
import Game from '../../components/Game'
import { ThemeProvider } from '../../contexts/ThemeContext'

describe('Game', () => {
  it('should be rendered correctly.', () => {
    const { container } = render(<Game />, { wrapper: ThemeProvider })
    expect(container).toMatchSnapshot()
  })
})
