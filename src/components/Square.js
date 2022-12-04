import React from 'react'
import PropTypes from 'prop-types'
import oIcon from '../assets/images/shapes/o.svg'
import xIcon from '../assets/images/shapes/x.svg'

const Square = ({ animation, className, handleOnClick, index, symbol, winningLine }) => {
    const icon = symbol === 'O' ? oIcon : symbol === 'X' ? xIcon : symbol
    const winAnimation = winningLine ? animation.line : animation.notLine

    return (
        <div className={className}>
            <button
                aria-label={`Square ${index}`}
                className="square__button"
                onClick={handleOnClick}
            >
                {icon && (
                    <img
                        alt={`${symbol} Icon`}
                        className={'square__symbol' + (winAnimation !== undefined ? winAnimation : ' ' + animation)}
                        src={icon}
                    />
                )}
            </button>
        </div>
    )
}

Square.propTypes = {
    animation: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    className: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    symbol: PropTypes.string,
    winningLine: PropTypes.bool.isRequired
}

export { Square as default }
