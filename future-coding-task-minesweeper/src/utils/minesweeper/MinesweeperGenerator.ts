import { isNumber } from '@/utils'

import type { GameBoard, GridCell } from '@/types/minesweeper'

const EmptyBoard: GameBoard = {
    rows: 0, columns: 0, mines: 0, grid: []
}
const emptyCell: GridCell = { type: 'empty' }  // shared instance
const mineCell: GridCell = { type: 'mine' }  // shared instance

const directions = [   // [row, column]
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1],
];

// - - - - - Minesweeper - - - - - //

/*
 * Creates the initial minesweeper board.
 *   If the arguments are invalid, the empty board is returned.
 */
export const generateGameBoard = (
    rows: number,  // grid size (rows x columns)
    columns: number,
    mines: number  // number of mines on the board
): GameBoard => {
    if (!isNumber(rows) || !isNumber(columns) || !isNumber(mines) ||
        (rows <= 0) || (columns <= 0)) {
        return EmptyBoard
    }
    const grid: GridCell[][] = []   // [row][column]
    const total = rows * columns

    // Fill the 2d grid, each cell is the 'empty' shared instance.
    const initGrid = () => {
        for (let r = 0; r < rows; r++) {
            const row: GridCell[] = new Array(columns).fill(emptyCell)
            grid.push(row)
        }
    }

    // Fisher–Yates shuffle (in-place)
    const getMineIndices = (): number[] => {
        const list = Array.from({ length: total }, (_, i) => i)

        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]]  // swap
        }
        return list.slice(0, mines)
    }

    // Adds the mines to the 2d grid, at random positions.
    const placeMines = () => {
        const mineIndices = getMineIndices()
        for (const i of mineIndices) {
            const r = Math.floor(i / columns)
            const c = i % columns
            grid[r][c] = mineCell
        }
    }

    const countMinesAroundCell = (r: number, c: number): number => {
        let count = 0
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if ((nr >= 0) && (nr < rows) &&  // check bounds
                (nc >= 0) && (nc < columns) &&
                grid[nr][nc].type === 'mine') {
                count++
            }
        }
        return count
    }

    const applyCountsToEmptyCells = () => {
        for (let r = 0; r < grid.length; r++) {
            const row = grid[r]  // GridCell[]
            for (let c = 0; c < row.length; c++) {
                const cell = row[c]  // GridCell
                if (cell.type !== 'empty') { continue; }
                const count = countMinesAroundCell(r, c)
                if (count > 0) {  // replace the 'empty' cell
                    grid[r][c] = { type: 'count', count }
                }
            }
        }
    }

    // Initialize the 2d grid and place the mines.
    initGrid()
    placeMines()
    applyCountsToEmptyCells()

    return {
        rows, columns, mines, grid
    }
}
