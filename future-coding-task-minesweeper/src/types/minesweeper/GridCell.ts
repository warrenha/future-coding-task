// - - - - - Types - - - - - //

/*
 * There is a mine in the field.
 */
export type MineCell = {
    type: 'mine'
}

/*
 * There is no mine in the field. The number tells you how many mines lay
 * hidden in the eight surrounding squares.
 */
export type CountCell = {
    type: 'count',
    count: number
}

/*
 * There is no mine, and there are no mines in surrounding squares.
 */
export type EmptyCell = {
    type: 'empty'
}

/*
 * An individual grid cell (aka field) in the Minesweeper game.
 */
export type GridCell = MineCell | CountCell | EmptyCell

// - - - - - Helpers - - - - - //

export const printGridCell = (c: GridCell): string => (
    c?.type === 'empty' ? ' ' :
    c?.type === 'mine' ? 'X' :
    c?.type === 'count' ? `${c.count}` :
    'E'  // error
)
