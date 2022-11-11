import React from 'react'
import PropTypes from 'prop-types'
import oBracketsIcon from '../assets/images/shapes/o-brackets.svg'
import xBracketsIcon from '../assets/images/shapes/x-brackets.svg'

const Score = ({ score }) => {
    return (
        <div className="flexbox-row score">
            <div className="flexbox-column score__container">
                <div className="flexbox-row score__player">
                    <p>Player 1</p>
                    <img
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
                <div className="flexbox-row score__player">
                    <p>Player 2</p>
                    <img
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
    score: PropTypes.object.isRequired
}

export { Score as default }
