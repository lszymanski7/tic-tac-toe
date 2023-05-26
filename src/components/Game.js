import React, { useState } from 'react'
import Board from './Board'
import Header from './Header'
import Score from './Score'
import checkWinner from '../utils/game-rules'

const Game = () => {
    /* istanbul ignore next */

    // Game states
    const [board, setBoard] = useState(Array(9).fill(null))
    const [score, setScore] = useState({
        player1: 0,
        draw: 0,
        player2: 0
    })
    const [players, setPlayers] = useState({
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
    })
    const [winner, setWinner] = useState(null)
    const [animation, setAnimation] = useState('scale')
    const [reset, setReset] = useState(false)

    /* istanbul ignore next */

    // Function ➞ updates the board (changes the value of a specific index)
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

    /* istanbul ignore next */

    // Function ➞ updates the score (increases the value by 1)
    const updateScore = (winner) => {
        if (winner !== null) {
            if (winner.symbol === 'X') {
                setScore({ ...score, player1: score.player1 + 1 })
            } else {
                setScore({ ...score, player2: score.player2 + 1 })
            }
        } else {
            setScore({ ...score, draw: score.draw + 1 })
        }
    }

    /* istanbul ignore next */

    // Function ➞ updates the player's priority (determines who will start the game)
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

    /* istanbul ignore next */

    // Function ➞ updates the player's turn (determines who has the next move)
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

    /* istanbul ignore next */

    // Function ➞ gets the player's turn (X or O)
    const getTurn = () => {
        if (players.player1.turn) {
            return players.player1.symbol
        } else {
            return players.player2.symbol
        }
    }

    /* istanbul ignore next */

    // Function ➞ updates the winner (determines who won the game)
    const updateWinner = (board) => {
        const nextState = checkWinner(board)
        setWinner(nextState)

        return nextState
    }

    /* istanbul ignore next */

    // Function ➞ updates the animation displayed after a win or draw
    const updateAnimation = (win) => {
        if (win) {
            setTimeout(() => {
                setAnimation({
                    line: 'blink',
                    notLine: 'fade'
                })
            }, 400)
        } else {
            setTimeout(() => {
                setAnimation('fade')
            }, 400)
        }
    }

    /* istanbul ignore next */

    // Function ➞ resets the game after the animation ends
    const updateReset = (win) => {
        if (win) {
            setTimeout(() => {
                setReset(true)
            }, 2600)
        } else {
            setTimeout(() => {
                setReset(true)
            }, 700)
        }
    }

    /* istanbul ignore next */

    // Function ➞ handles clicking a square on the board
    const handleOnClick = (i) => {
        if (board[i] === null && winner === null) {
            const updatedBoard = updateBoard(i)
            const updatedWinner = updateWinner(updatedBoard)
            updateTurn()

            if (!updatedBoard.includes(null) || updatedWinner !== null) {
                updatePriority()
                updateScore(updatedWinner)
                updateAnimation(updatedWinner)
                updateReset(updatedWinner)
            }
        }

        if (reset) {
            setBoard(Array(9).fill(null))
            setWinner(null)
            setAnimation('scale')
            setReset(false)
        }
    }

    return (
        <div className="fullscreen">
            <Header />
            <Board
                animation={animation}
                board={board}
                handleOnClick={handleOnClick}
                winner={winner}
            />
            <Score
                inProgress={board.includes(null) && winner === null}
                score={score}
                turn={getTurn()}
            />
        </div>
    )
}

export default Game
