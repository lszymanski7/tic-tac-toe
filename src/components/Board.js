import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

const Board = ({ board, handleOnClick }) => {
    // Render the board squares
    const renderSquare = (className, i) => {
        return (
            <Square
                className={className}
                handleOnClick={() => handleOnClick(i)}
                index={i}
                symbol={board[i]}
            />
        )
    }

    return (
        <div className="flexbox-column board">
            <div className="flexbox-row">
                {renderSquare('square', 0)}
                {renderSquare('square left right', 1)}
                {renderSquare('square', 2)}
            </div>
            <div className="flexbox-row">
                {renderSquare('square top bottom', 3)}
                {renderSquare('square left right top bottom', 4)}
                {renderSquare('square top bottom', 5)}
            </div>
            <div className="flexbox-row">
                {renderSquare('square', 6)}
                {renderSquare('square left right', 7)}
                {renderSquare('square', 8)}
            </div>
        </div>
    )
}

Board.propTypes = {
    board: PropTypes.array.isRequired,
    handleOnClick: PropTypes.func.isRequired
}

export { Board as default }
