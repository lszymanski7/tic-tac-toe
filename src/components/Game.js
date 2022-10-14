import React from 'react'
import Board from './Board'
import Footer from './Footer'
import Header from './Header'
import Score from './Score'

const Game = () => {
    return (
        <div className="flexbox-column fullscreen">
            <Header />
            <Score />
            <Board />
            <Footer />
        </div>
    )
}

export { Game as default }
