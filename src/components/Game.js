/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import Board from './Board'
import Footer from './Footer'
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
    const [score, setScore] = useState(defaultScore)
    const [players, setPlayers] = useState(defaultPlayers)
    const [winner, setWinner] = useState(defaultWinner)

    // Update the board (change the value for a specific index)

    const updateBoard = (i) => {
        const newState = board.map((element, index) => {
            if (index === i) {
                return players.player1.turn ? players.player1.symbol : players.player2.symbol
            }
            return element
        })
        setBoard(newState)
    }

    // Update the score (increase the value by 1)

    const updateScore = () => {
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

    const updateWinner = () => {
        const newState = checkWinner(board)
        setWinner(newState)
    }

    // Reset the game

    const resetGame = () => {
        setBoard(defaultBoard)
        updatePriority()
        setWinner(null)
    }

    // Call functions after clicking a cell on the board

    const handleOnClick = (i) => {
        if (board[i] === null) {
            updateBoard(i)
            updateTurn()
        }

        winner !== null && resetGame()
    }

    // Call the updateWinner() function if the board values have changed

    useEffect(() => {
        updateWinner()
    }, [board])

    // Call the updateScore() function if someone has won the game or it's a draw

    useEffect(() => {
        winner !== null && updateScore()
    }, [winner])

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
                winner={winner}
            />
            <Score score={score} />
            <Footer />
        </div>
    )
}

export { Game as default }
