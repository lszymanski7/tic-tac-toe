import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import { LOGOS } from '../data/constants'
import useTheme from '../hooks/useTheme'

const Header = () => {
    // Game name
    const name = 'Tic-Tac-Toe'

    // Context value for dark and light theme
    const { theme, toggleTheme } = useTheme()

    return (
        <header className="header">
            <div className="header__widgets-container">
                <a href="https://github.com/lszymanski7/tic-tac-toe">
                    <img
                        alt="GitHub Logo"
                        className={`header__github-logo header__github-logo--${theme}`}
                        src={LOGOS.github}
                    />
                </a>
                <ToggleSwitch
                    handleOnChange={toggleTheme}
                    isChecked={theme === 'dark'}
                />
            </div>
            <h1 className="header__game-name">{name}</h1>
        </header>
    )
}

export { Header as default }
