import React from 'react'
import PropTypes from 'prop-types'
import oBracketsIcon from '../assets/images/shapes/o-brackets.svg'
import xBracketsIcon from '../assets/images/shapes/x-brackets.svg'

const Score = ({ players, score, winner }) => {
    return (
        <div className="flexbox-row score">
            <div className="flexbox-column score__container">
                <div
                    className={
                        'flexbox-row score__player' +
                        (winner === null && players.player1.turn ? ' score__turn' : '')
                    }
                >
                    <p>Player 1</p>
                    <img
                        alt="X Symbol"
                        className="score__img"
                        src={xBracketsIcon}
                    />
                </div>
                <p>{score.player1}</p>
            </div>
            <div className="flexbox-column score__container">
                <p>Draw</p>
                <p>{score.draw}</p>
            </div>
            <div className="flexbox-column score__container">
                <div
                    className={
                        'flexbox-row score__player' +
                        (winner === null && players.player2.turn ? ' score__turn' : '')
                    }
                >
                    <p>Player 2</p>
                    <img
                        alt="O Symbol"
                        className="score__img"
                        src={oBracketsIcon}
                    />
                </div>
                <p>{score.player2}</p>
            </div>
        </div>
    )
}

Score.propTypes = {
    players: PropTypes.object.isRequired,
    score: PropTypes.object.isRequired,
    winner: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export { Score as default }
