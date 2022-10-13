import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Scoreboard from './Scoreboard'

const Game = () => {
    return (
        <div className="flexbox-column fullscreen">
            <Header />
            <Scoreboard />
            <Footer />
        </div>
    )
}

export { Game as default }
