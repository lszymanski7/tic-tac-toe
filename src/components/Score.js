import React from 'react'
import PropTypes from 'prop-types'
import bracketLeftIcon from '../assets/images/shapes/bracket-left.svg'
import bracketRightIcon from '../assets/images/shapes/bracket-right.svg'
import oIcon from '../assets/images/shapes/o.svg'
import xIcon from '../assets/images/shapes/x.svg'

const Score = ({ players, score, winner }) => {
    return (
        <div className="flexbox-row score">
            <div className="flexbox-column score__container">
                <div
                    className={
                        'flexbox-row' +
                        (winner === null && players.player1.turn ? ' score__turn' : '')
                    }
                >
                    <p className="score__name">Player 1</p>
                    <img
                        alt="Bracket Left Icon"
                        className="score__bracket"
                        src={bracketLeftIcon}
                    />
                    <img
                        alt="X Icon"
                        className="score__symbol"
                        src={xIcon}
                    />
                    <img
                        alt="Bracket Right Icon"
                        className="score__bracket"
                        src={bracketRightIcon}
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
                        'flexbox-row' +
                        (winner === null && players.player2.turn ? ' score__turn' : '')
                    }
                >
                    <p className="score__name">Player 2</p>
                    <img
                        alt="Bracket Left Icon"
                        className="score__bracket"
                        src={bracketLeftIcon}
                    />
                    <img
                        alt="O Icon"
                        className="score__symbol"
                        src={oIcon}
                    />
                    <img
                        alt="Bracket Right Icon"
                        className="score__bracket"
                        src={bracketRightIcon}
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
