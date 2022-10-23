import React from 'react'
import PropTypes from 'prop-types'

const Score = ({ score }) => {
    return (
        <div className="flexbox-row">
            <div className="flexbox-column">
                <span>Player 1 (X)</span>
                <span>{score.player1}</span>
            </div>
            <div className="flexbox-column">
                <span>Draw</span>
                <span>{score.draw}</span>
            </div>
            <div className="flexbox-column">
                <span>Player 2 (O)</span>
                <span>{score.player2}</span>
            </div>
        </div>
    )
}

Score.propTypes = {
    score: PropTypes.object.isRequired
}

export { Score as default }
