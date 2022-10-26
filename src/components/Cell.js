import React from 'react'
import PropTypes from 'prop-types'
import oIcon from '../assets/images/shapes/o.svg'
import xIcon from '../assets/images/shapes/x.svg'

const Cell = ({ className, index, symbol }) => {
    const icon = symbol === 'O' ? oIcon : symbol === 'X' ? xIcon : symbol

    return (
        <div className={className}>
            <button
                className="cell__button"
                onClick={() => console.log('Clicked:', index)}
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
    symbol: PropTypes.string
}

export { Cell as default }
