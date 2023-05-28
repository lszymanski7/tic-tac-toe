import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Square from '../../components/Square'
import { ThemeProvider } from '../../contexts/ThemeContext'

const props = {
    animation: 'scale',
    className: null,
    handleOnClick: jest.fn(),
    index: 0,
    symbol: null,
    winningLine: false
}

describe('Square', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Square {...props} />, { wrapper: ThemeProvider })
        expect(container).toMatchSnapshot()
    })

    it('should render with X symbol.', async () => {
        render(<Square {...props} symbol='X' />, { wrapper: ThemeProvider })
        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('alt', 'X')
        expect(img).toHaveAttribute('src', 'x.svg')
    })

    it('should render with O symbol.', () => {
        render(<Square {...props} symbol='O' />, { wrapper: ThemeProvider })
        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('alt', 'O')
        expect(img).toHaveAttribute('src', 'o.svg')
    })

    it('should handle clicking.', async () => {
        render(<Square {...props} />, { wrapper: ThemeProvider })
        const button = screen.getByRole('button')
        await userEvent.click(button)
        expect(props.handleOnClick).toHaveBeenCalled()
    })
})
