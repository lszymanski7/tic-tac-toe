import React from 'react'

const Score = () => {
    return (
        <div className="flexbox-row">
            <div className="flexbox-column">
                <span>Player 1 (X)</span>
                <span>0</span>
            </div>
            <div className="flexbox-column">
                <span>Draw</span>
                <span>1</span>
            </div>
            <div className="flexbox-column">
                <span>Player 2 (O)</span>
                <span>2</span>
            </div>
        </div>
    )
}

export { Score as default }
