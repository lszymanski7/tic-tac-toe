import React from 'react'
import PropTypes from 'prop-types'
import oIcon from '../assets/images/shapes/o.svg'
import xIcon from '../assets/images/shapes/x.svg'

const Square = ({ className, handleOnClick, index, symbol }) => {
    const icon = symbol === 'O' ? oIcon : symbol === 'X' ? xIcon : symbol

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
                        className="square__symbol"
                        src={icon}
                    />
                )}
            </button>
        </div>
    )
}

Square.propTypes = {
    className: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    symbol: PropTypes.string
}

export { Square as default }
