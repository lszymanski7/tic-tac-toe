import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Score from './Score'

const Game = () => {
    return (
        <div className="flexbox-column fullscreen">
            <Header />
            <Score />
            <Footer />
        </div>
    )
}

export { Game as default }
