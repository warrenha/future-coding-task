import { generateGameBoard } from '@/utils/minesweeper'
import { printGameBoard } from '@/types/minesweeper'
import { useState } from 'react'

type Props = {
    rows: number,
    columns: number,
    mines: number
}

/*
 * - - - - - - - - - - - - - - -
 *
 * Displays a Minesweeper game
 *
 * - - - - - - - - - - - - - - -
 */
export const MinesweeperGame = (props: Props) => {
    const { rows, columns, mines } = props

    // Run a single time, generate the 2d grid
    const [game] = useState(() => (  // GameBoard
        generateGameBoard(rows, columns, mines)
    ))
    console.debug(printGameBoard(game))

    return (
        <div data-id="MinesweeperGame" >
            <div>Minesweeper!</div>
        </div>
    )
}
