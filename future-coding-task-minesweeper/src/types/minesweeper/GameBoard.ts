import { isArray, isNumber, isObject } from '@/utils/Utils'
import { printGridCell, type GridCell } from './GridCell'

// - - - - - Types - - - - - //

export type GameBoard = {
    rows: number,
    columns: number,
    mines: number,
    grid: GridCell[][]
}

// - - - - - Helpers - - - - - //

/*
 * A valid GridBoard object, with a correctly sized 2d array.
 */
export const validGameBoard = (g: GameBoard): boolean => (
    isObject(g) &&
    isNumber(g.rows) && isNumber(g.columns) &&
    isNumber(g.mines) && isArray(g.grid) &&
    (g.grid.length === g.rows) &&
    g.grid.every(r => isArray(r) && (r.length === g.columns))
)

const printGrid = (grid: GridCell[][]): string => {
    let debug = ''
    for (let r = 0; r < grid.length; r++) {
        const row = grid[r]  // GridCell[]
        for (let c = 0; c < row.length; c++) {
            const cell = row[c]  // GridCell
            if (c > 0) { debug += ' ' }  // space between cells
            debug += printGridCell(cell)  // 1 char
        }
        debug += '\n'
    }
    return debug;
}

export const printGameBoard = (b: GameBoard): string => {
    if (!b) { return 'null' }
    if (!validGameBoard(b)) { return 'invalid' }
    return ( 
        `GAME (rows=${b.rows}, columns=${b.columns}, mines=${b.mines}):\n` +
        `${printGrid(b.grid)}`
    )
}
