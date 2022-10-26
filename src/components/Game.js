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
// Status: Active - Over

const Game = () => {
    const [board, setBoard] = useState(['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'])
    const [score, setScore] = useState({
        draw: 0,
        player1: 0,
        player2: 0
    })
    const [status, setStatus] = useState('Active')
    const [player, setPlayer] = useState('X')
    const [winner, setWinner] = useState(null)

    console.log('Board:', board)
    console.log('Score:', score)
    console.log('Status:', status)
    console.log('Player:', player)
    console.log('Winner:', winner)

    const updateScore = () => {
        if (winner.symbol === 'X') {
            setScore({ ...score, player1: score.player1 + 1 })
        } else if (winner.symbol === 'O') {
            setScore({ ...score, player2: score.player2 + 1 })
        } else {
            setScore({ ...score, draw: score.draw + 1 })
        }
    }

    const updateStatus = () => (winner === null ? setStatus('Active') : setStatus('Over'))

    const updatePlayer = () => (player === 'X' ? setPlayer('O') : setPlayer('X'))

    const handleClick = (index) => {
        console.log('Index:', index)
        updateStatus()
        updatePlayer()

        if (winner !== null) {
            updateScore()
        }
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
