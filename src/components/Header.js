import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import githubLogo from '../assets/images/logos/github.svg'

const Header = () => {
    // Game title
    const title = 'Tic-Tac-Toe'

    // Dark and light mode toggle switch states
    const [isChecked, setIsChecked] = useState(false)

    return (
        <header className="flexbox-column header">
            <div className="flexbox-row header__container">
                <a href="https://github.com/lszymanski7/tic-tac-toe">
                    <img
                        alt="GitHub Logo"
                        className="header__github"
                        src={githubLogo}
                    />
                </a>
                <ToggleSwitch
                    handleOnChange={() => setIsChecked(!isChecked)}
                    icons={['moon-icon', 'sun-icon']}
                    id="themeSwitcher"
                    isChecked={isChecked}
                />
            </div>
            <h1 className="header__title">{title}</h1>
        </header>
    )
}

export { Header as default }
