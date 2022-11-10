import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import github from '../assets/images/shapes/github.svg'

const Header = () => {
    const title = 'Tic-Tac-Toe'
    const [isChecked, setIsChecked] = useState(false)

    return (
        <header className="flexbox-column header">
            <div className="flexbox-row header__container">
                <a href="https://github.com/lszymanski7/tic-tac-toe">
                    <img
                        alt="GitHub"
                        className="header__github"
                        src={github}
                    />
                </a>
                <ToggleSwitch
                    handleOnChange={() => setIsChecked(!isChecked)}
                    id="themeSwitcher"
                    isChecked={isChecked}
                />
            </div>
            <h1 className="header__title">{title}</h1>
        </header>
    )
}

export { Header as default }
