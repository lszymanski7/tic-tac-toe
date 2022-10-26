import React from 'react'
import PropTypes from 'prop-types'
import oIcon from '../assets/images/shapes/o.svg'
import xIcon from '../assets/images/shapes/x.svg'

const Cell = ({ className, index, onClick, symbol }) => {
    const icon = symbol === 'O' ? oIcon : symbol === 'X' ? xIcon : symbol

    return (
        <div className={className}>
            <button
                className="cell__button"
                onClick={() => onClick(index)}
            >
                {icon && (
                    <img
                        alt={`${symbol} Icon`}
                        src={icon}
                    />
                )}
            </button>
        </div>
    )
}

Cell.propTypes = {
    className: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    symbol: PropTypes.string
}

export { Cell as default }
