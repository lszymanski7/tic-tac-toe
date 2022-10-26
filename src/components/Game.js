import React, { useState } from 'react'
import Board from './Board'
import Footer from './Footer'
import Header from './Header'
import Score from './Score'

// ================================================================================================
// Game Info
// ================================================================================================
// Board: 3x3
// Score: Player 1 (X) - Draw - Player 2 (O)
// Status: Start - Active - End

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [score, setScore] = useState({
        draw: 0,
        player1: 0,
        player2: 0
    })
    const [status, setStatus] = useState('Start')
    const [player, setPlayer] = useState('X')
    const [winner, setWinner] = useState(null)

    console.log('Board:', board)
    console.log('Score:', score)
    console.log('Status:', status)
    console.log('Player:', player)
    console.log('Winner:', winner)

    const updatePlayer = () => (player === 'X' ? setPlayer('O') : setPlayer('X'))

    const handleClick = (index) => {
        console.log('Index:', index)
        updatePlayer()
    }

    return (
        <div className="flexbox-column fullscreen">
            <Header />
            <Score score={score} />
            <Board
                board={board}
                handleClick={handleClick}
            />
            <Footer />
        </div>
    )
}

export { Game as default }
