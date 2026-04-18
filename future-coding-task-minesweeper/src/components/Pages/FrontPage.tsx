import { cn } from "@/lib/utils"
import { MinesweeperGame } from './MinesweeperGame'

const RowCount = 6
const ColumnCount = 8
const MineCount = 5

/*
 * - - - - - - - - - - - - - - -
 *
 * Front page of the website.
 *
 * - - - - - - - - - - - - - - -
 */
export const FrontPage = () => {
    return (
        <div
            data-id="FrontPage"
            className={cn(
                "flex flex-col content-center items-center w-full",
                "text-center overflow-y-auto bg-white text-gray-800 gap-[25px] pt-2 pb-10")} >
            <div className="flex flex-col gap-2" >
                <h1>
                    Future Coding Task:
                    <span className="font-light text-gray-400 ml-2">
                        Minesweeper
                    </span>
                </h1>
            </div>
            <MinesweeperGame
                rows={RowCount}
                columns={ColumnCount}
                mines={MineCount} />
        </div>
    )
}

