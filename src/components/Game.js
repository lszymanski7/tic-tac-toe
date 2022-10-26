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
    const [board, setBoard] = useState(['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'])
    const [score, setScore] = useState({
        draw: 0,
        player1: 0,
        player2: 0
    })
    const [status, setStatus] = useState('Start')
    const [player, setPlayer] = useState('X')
    const [winner, setWinner] = useState('X')

    console.log('Board:', board)
    console.log('Score:', score)
    console.log('Status:', status)
    console.log('Player:', player)
    console.log('Winner:', winner)

    const updateStatus = () => {
        const emptyCells = board.filter((cell) => cell === null).length

        if (emptyCells === 9) {
            setStatus('Start')
        } else if (winner !== null) {
            setStatus('End')
        } else {
            setStatus('Active')
        }
    }

    const updatePlayer = () => (player === 'X' ? setPlayer('O') : setPlayer('X'))

    const handleClick = (index) => {
        console.log('Index:', index)
        updateStatus()
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
