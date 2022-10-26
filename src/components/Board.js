import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'

const Board = ({ board, handleClick }) => {
    return (
        <div className="flexbox-row">
            <div className="flexbox-column">
                <Cell
                    className={'cell'}
                    index={0}
                    onClick={handleClick}
                    symbol={board[0]}
                />
                <Cell
                    className={'cell top bottom'}
                    index={3}
                    onClick={handleClick}
                    symbol={board[3]}
                />
                <Cell
                    className={'cell'}
                    index={6}
                    onClick={handleClick}
                    symbol={board[6]}
                />
            </div>
            <div className="flexbox-column">
                <Cell
                    className={'cell left right'}
                    index={1}
                    onClick={handleClick}
                    symbol={board[1]}
                />
                <Cell
                    className={'cell left right top bottom'}
                    index={4}
                    onClick={handleClick}
                    symbol={board[4]}
                />
                <Cell
                    className={'cell left right'}
                    index={7}
                    onClick={handleClick}
                    symbol={board[7]}
                />
            </div>
            <div className="flexbox-column">
                <Cell
                    className={'cell'}
                    index={2}
                    onClick={handleClick}
                    symbol={board[2]}
                />
                <Cell
                    className={'cell top bottom'}
                    index={5}
                    onClick={handleClick}
                    symbol={board[5]}
                />
                <Cell
                    className={'cell'}
                    index={8}
                    onClick={handleClick}
                    symbol={board[8]}
                />
            </div>
        </div>
    )
}

Board.propTypes = {
    board: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}

export { Board as default }
