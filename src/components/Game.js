import React, { useState } from 'react'
import Board from './Board'
import Footer from './Footer'
import Header from './Header'
import Score from './Score'
import checkWinner from '../utils/game-rules'

const Game = () => {
    const [board, setBoard] = useState(['X', 'O', '', 'X', 'O', '', 'X', '', ''])
    const winner = checkWinner(board)

    console.log(board)
    console.log(winner)

    return (
        <div className="flexbox-column fullscreen">
            <Header />
            <Score />
            <Board board={board} setBoard={setBoard} />
            <Footer />
        </div>
    )
}

export { Game as default }
