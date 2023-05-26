import React from 'react'
import PropTypes from 'prop-types'
import { SHAPES } from '../data/constants'
import useTheme from '../hooks/useTheme'

const Square = ({ animation, className, handleOnClick, index, symbol, winningLine }) => {
    /* istanbul ignore next */

    // Context value for dark and light theme
    const { theme } = useTheme()

    /* istanbul ignore next */

    // Function ➞ sets the animation of a win, draw or game in progress
    const setAnimation = () => {
        if (typeof animation === 'object') {
            return winningLine ? animation.line : animation.notLine
        } else {
            return animation
        }
    }

    return (
        <div className={`square square--${theme}` + (className !== null ? ' ' + className : '')}>
            <button
                aria-label={`Square ${index}`}
                className="square__button"
                onClick={handleOnClick}
            >
                {symbol !== null && (
                    <img
                        alt={symbol}
                        className={`square__symbol square__symbol--${theme}` + ' ' + setAnimation()}
                        src={symbol === 'X' ? SHAPES.x : SHAPES.o}
                    />
                )}
            </button>
        </div>
    )
}

Square.propTypes = {
    animation: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    className: PropTypes.string,
    handleOnClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    symbol: PropTypes.string,
    winningLine: PropTypes.bool.isRequired
}

export default Square
