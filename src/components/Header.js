import React from 'react'

const Header = () => {
    const title = 'Tic-Tac-Toe'

    return (
        <header>
            <div className="flexbox-column">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export { Header as default }
