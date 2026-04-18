import { generateGameBoard } from '@/utils/minesweeper'
import { printGameBoard, printGridCell, type GridCell } from '@/types/minesweeper'
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

    const { grid } = game

    // - - - - - Render - - - - - //

    const colorGridCell = (cell: GridCell) => {
        if (cell.type !== 'count') { return '' }
        return cell.count === 1 ? 'text-blue-600' :
            cell.count === 2 ? 'text-green-600' :
            cell.count === 3 ? 'text-red-600' : ''
    }

    const renderCell = (cell: GridCell) => {
        const value = printGridCell(cell)  // single char
        const color = colorGridCell(cell)  // string
        return (
            <div data-id="GridCell"
                className={`bg-white aspect-square p-4 ${color}`} >
                {value}
            </div>
        )
    }

    const renderRow = (row: GridCell[]) => {
        return row.map(renderCell)
    }

    const style = {
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
    }

    return (
        <div data-id="MinesweeperGame" >
            <div data-id="MinesweeperGrid"
                className="grid gap-[1px] bg-neutral-200 p-[1px]"
                style={style} >
                { grid.map(renderRow) }
            </div>
        </div>
    )
}
