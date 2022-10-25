import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'

const Board = ({ board }) => {
    return (
        <div className="flexbox-row">
            <div className="flexbox-column">
                <Cell
                    index={0}
                    symbol={board[0]}
                />
                <Cell
                    index={3}
                    symbol={board[3]}
                />
                <Cell
                    index={6}
                    symbol={board[6]}
                />
            </div>
            <div className="flexbox-column">
                <Cell
                    index={1}
                    symbol={board[1]}
                />
                <Cell
                    index={4}
                    symbol={board[4]}
                />
                <Cell
                    index={7}
                    symbol={board[7]}
                />
            </div>
            <div className="flexbox-column">
                <Cell
                    index={2}
                    symbol={board[2]}
                />
                <Cell
                    index={5}
                    symbol={board[5]}
                />
                <Cell
                    index={8}
                    symbol={board[8]}
                />
            </div>
        </div>
    )
}

Board.propTypes = {
    board: PropTypes.array.isRequired
}

export { Board as default }
