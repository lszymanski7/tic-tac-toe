import React from 'react'
import PropTypes from 'prop-types'

const Score = ({ inProgress, score, turn }) => {
    /* istanbul ignore next */

    // Player X's turn
    const xTurn = inProgress && turn === 'X' ? 'score__turn' : ''

    /* istanbul ignore next */

    // Player O's turn
    const oTurn = inProgress && turn === 'O' ? 'score__turn' : ''

    return (
        <div className="score">
            <div className="score__container">
                <p
                    className={xTurn}
                    data-testid="player1-caption"
                >
                    Player 1  [X]
                </p>
                <p data-testid="player1-score">{score.player1}</p>
            </div>
            <div className="score__container">
                <p data-testid="draw-caption">Draw</p>
                <p data-testid="draw-score">{score.draw}</p>
            </div>
            <div className="score__container">
                <p
                    className={oTurn}
                    data-testid="player2-caption"
                >
                    Player 2  [O]
                </p>
                <p data-testid="player2-score">{score.player2}</p>
            </div>
        </div>
    )
}

Score.propTypes = {
    inProgress: PropTypes.bool.isRequired,
    score: PropTypes.object.isRequired,
    turn: PropTypes.string.isRequired
}

export { Score as default }
