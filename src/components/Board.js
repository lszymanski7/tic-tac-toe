import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

const Board = ({ animation, board, handleOnClick, winner }) => {
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
                {renderSquare(null, 0)}
                {renderSquare('right left', 1)}
                {renderSquare(null, 2)}
            </div>
            <div className="board__row">
                {renderSquare('top bottom', 3)}
                {renderSquare('top right bottom left', 4)}
                {renderSquare('top bottom', 5)}
            </div>
            <div className="board__row">
                {renderSquare(null, 6)}
                {renderSquare('right left', 7)}
                {renderSquare(null, 8)}
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
