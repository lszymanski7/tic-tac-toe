import React, { useState } from 'react'
import Board from './Board'
import Footer from './Footer'
import Header from './Header'
import Score from './Score'
import checkWinner from '../utils/game-rules'

const Game = () => {
    const [board, setBoard] = useState(['X', 'O', '', 'X', 'O', '', 'X', '', ''])
    const [score, setScore] = useState({
        draw: 0,
        player1: 0,
        player2: 0
    })
    
    const winner = checkWinner(board)

    console.log(board)
    console.log(score)
    console.log(winner)

    return (
        <div className="flexbox-column fullscreen">
            <Header />
            <Score score={score} />
            <Board board={board} setBoard={setBoard} />
            <Footer />
        </div>
    )
}

export { Game as default }
