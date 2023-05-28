import React from 'react'
import { render, screen } from '@testing-library/react'
import Board from '../../components/Board'
import { ThemeProvider } from '../../contexts/ThemeContext'

const props = {
    animation: 'scale',
    board: Array(9).fill(null),
    handleOnClick: jest.fn(),
    winner: null
}

describe('Board', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Board {...props} />, { wrapper: ThemeProvider })
        expect(container).toMatchSnapshot()
    })

    it('should have 9 squares.', () => {
        render(<Board {...props} />, { wrapper: ThemeProvider })
        const squares = screen.getAllByRole('button')
        expect(squares).toHaveLength(9)
    })
})
