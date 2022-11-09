import React from 'react'
import PropTypes from 'prop-types'

const ToggleSwitch = ({ id, isChecked, handleOnChange }) => {
    return (
        <div className="toggle-switch">
            <input
                checked={isChecked}
                className="toggle-switch-input"
                id={id}
                onChange={handleOnChange}
                type="checkbox"
            />
            <label
                className="toggle-switch-label"
                htmlFor={id}
            >
                <span className="moon" />
                <span className="sun" />
                <span className="slider" />
            </label>
        </div>
    )
}

ToggleSwitch.propTypes = {
    id: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    handleOnChange: PropTypes.func.isRequired
}

export { ToggleSwitch as default }
