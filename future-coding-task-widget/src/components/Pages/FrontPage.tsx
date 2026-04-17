import { cn } from "@/lib/utils"
import { OffersCard } from '@/components/Cards/OffersCard'

/*
 * - - - - - - - - - - - - - - -
 *
 * Front page of the website.
 *
 * - - - - - - - - - - - - - - -
 */
export const FrontPage = () => {
    console.debug('FrontPage RENDER')
    return (
        <div
            data-id="FrontPage"
            className={cn(
                "flex flex-col content-center items-center h-full w-full",
                "text-center overflow-y-auto bg-white text-gray-800 gap-[25px] pt-2 pb-10")} >
            <div className="flex flex-col gap-2" >
                <h1>Future Coding Task</h1>
                <h2>Widget</h2>
            </div>
            <OffersCard />
        </div>
    )
}
