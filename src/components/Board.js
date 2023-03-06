import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import useTheme from '../hooks/useTheme'

const Board = ({ animation, board, handleOnClick, winner }) => {
    // Context value for dark and light theme
    const { theme } = useTheme()

    /* istanbul ignore next */

    // Function ➞ renders square on the board
    const renderSquare = (className, i) => {
        return (
            <Square
                animation={animation}
                className={className}
                handleOnClick={() => handleOnClick(i)}
                index={i}
                symbol={board[i]}
                winningLine={winner !== null ? winner.line.includes(i) : false}
            />
        )
    }

    return (
        <div className="board">
            <div className="board__row">
                {renderSquare(`square square--${theme}`, 0)}
                {renderSquare(`square square--${theme} right left`, 1)}
                {renderSquare(`square square--${theme}`, 2)}
            </div>
            <div className="board__row">
                {renderSquare(`square square--${theme} top bottom`, 3)}
                {renderSquare(`square square--${theme} top right bottom left`, 4)}
                {renderSquare(`square square--${theme} top bottom`, 5)}
            </div>
            <div className="board__row">
                {renderSquare(`square square--${theme}`, 6)}
                {renderSquare(`square square--${theme} right left`, 7)}
                {renderSquare(`square square--${theme}`, 8)}
            </div>
        </div>
    )
}

Board.propTypes = {
    animation: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    board: PropTypes.array.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    winner: PropTypes.object
}

export { Board as default }
