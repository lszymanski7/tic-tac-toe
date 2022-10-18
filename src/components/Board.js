import React from 'react'
import Cell from './Cell'

const Board = () => {
    return (
        <div className="flexbox-row">
            <div className="flexbox-column">
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div className="flexbox-column">
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div className="flexbox-column">
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
    )
}

export { Board as default }
