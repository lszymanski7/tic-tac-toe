import React from 'react'
import { render, screen } from '@testing-library/react'
import Score from '../../components/Score'

const props = {
    inProgress: true,
    score: {
        player1: 0,
        draw: 0,
        player2: 0
    },
    turn: 'X'
}

describe('Score', () => {
    it('should be rendered correctly.', () => {
        const { container } = render(<Score {...props} />)
        expect(container).toMatchSnapshot()
    })

    it('should have the correct captions.', () => {
        render(<Score {...props} />)
        const player1 = screen.getByTestId('player1-caption')
        const draw = screen.getByTestId('draw-caption')
        const player2 = screen.getByTestId('player2-caption')
        expect(player1).toHaveTextContent('Player 1 [X]')
        expect(draw).toHaveTextContent('Draw')
        expect(player2).toHaveTextContent('Player 2 [O]')
    })

    it(`should have a red caption when it's player X's turn.`, () => {
        render(<Score {...props} />)
        const player1 = screen.getByTestId('player1-caption')
        expect(player1).toHaveClass('score__turn')
    })

    it(`should have a red caption when it's player O's turn.`, () => {
        render(<Score {...props} turn="O" />)
        const player2 = screen.getByTestId('player2-caption')
        expect(player2).toHaveClass('score__turn')
    })

    it('should have the correct score (default).', () => {
        render(<Score {...props} />)
        const player1 = screen.getByTestId('player1-score')
        const draw = screen.getByTestId('draw-score')
        const player2 = screen.getByTestId('player2-score')
        expect(player1).toHaveTextContent('0')
        expect(draw).toHaveTextContent('0')
        expect(player2).toHaveTextContent('0')
    })

    it('should have the correct score.', () => {
        render(<Score {...props} score={{ player1: 4, draw: 2, player2: 1 }}/>)
        const player1 = screen.getByTestId('player1-score')
        const draw = screen.getByTestId('draw-score')
        const player2 = screen.getByTestId('player2-score')
        expect(player1).toHaveTextContent('4')
        expect(draw).toHaveTextContent('2')
        expect(player2).toHaveTextContent('1')
    })
})
