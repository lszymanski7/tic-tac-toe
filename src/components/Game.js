/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from 'react'
import Board from './Board'
import Header from './Header'
import Score from './Score'
import checkWinner from './../utils/game-rules'

const Game = () => {
    // Default values for game states
    const defaultBoard = Array(9).fill(null)
    const defaultScore = {
        player1: 0,
        draw: 0,
        player2: 0
    }
    const defaultPlayers = {
        player1: {
            priority: true,
            turn: true,
            symbol: 'X'
        },
        player2: {
            priority: false,
            turn: false,
            symbol: 'O'
        }
    }
    const defaultWinner = null

    // Game states
    const [board, setBoard] = useState(defaultBoard)
    const [players, setPlayers] = useState(defaultPlayers)
    const [score, setScore] = useState(defaultScore)
    const [winner, setWinner] = useState(defaultWinner)

    // Update the board (change the value for a specific index)
    const updateBoard = (i) => {
        const nextState = board.map((element, index) => {
            if (index === i) {
                return players.player1.turn ? players.player1.symbol : players.player2.symbol
            } else {
                return element
            }
        })
        setBoard(nextState)

        return nextState
    }

    // Update the score (increase the value by 1)
    const updateScore = (winner) => {
        if (winner.symbol === 'X') {
            setScore({ ...score, player1: score.player1 + 1 })
        } else if (winner.symbol === 'O') {
            setScore({ ...score, player2: score.player2 + 1 })
        } else {
            setScore({ ...score, draw: score.draw + 1 })
        }
    }

    // Update the player's priority (determine who will start the game)
    const updatePriority = () => {
        if (players.player1.priority) {
            setPlayers({
                player1: { ...players.player1, priority: false, turn: false },
                player2: { ...players.player2, priority: true, turn: true }
            })
        } else {
            setPlayers({
                player1: { ...players.player1, priority: true, turn: true },
                player2: { ...players.player2, priority: false, turn: false }
            })
        }
    }

    // Update the player's turn (determine who has the next move)
    const updateTurn = () => {
        if (players.player1.turn) {
            setPlayers({
                player1: { ...players.player1, turn: false },
                player2: { ...players.player2, turn: true }
            })
        } else {
            setPlayers({
                player1: { ...players.player1, turn: true },
                player2: { ...players.player2, turn: false }
            })
        }
    }

    // Update the winner (determine who won the game)
    const updateWinner = (board) => {
        const nextState = checkWinner(board)
        setWinner(nextState)

        return nextState
    }

    // Reset the game
    const resetGame = () => {
        setBoard(defaultBoard)
        setWinner(defaultWinner)
        updatePriority()
    }

    // Call functions after clicking a cell on the board
    const handleOnClick = (i) => {
        if (winner === null && board[i] === null) {
            const updatedBoard = updateBoard(i)
            const updatedWinner = updateWinner(updatedBoard)
            updatedWinner === null ? updateTurn() : updateScore(updatedWinner)
        } 
        
        winner !== null && resetGame()
    }

    // Log values
    console.log('Board:', board)
    console.log('Score:', score)
    console.log('Players:', players)
    console.log('Winner:', winner)

    return (
        <div className="flexbox-column fullscreen">
            <Header />
            <Board
                board={board}
                handleOnClick={handleOnClick}
            />
            <Score
                players={players}
                score={score}
                winner={winner}
            />
        </div>
    )
}

export { Game as default }
