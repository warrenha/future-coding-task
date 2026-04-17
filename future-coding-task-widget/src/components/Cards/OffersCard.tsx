import { Card } from '@/components/ui/simple'
import { OffersTable } from './OffersTable'

/*
 * - - - - -  - - - - -  - - - - -
 *
 * Component - List of product offers.
 *
 * - - - - -  - - - - -  - - - - -
 */
export const OffersCard = () => {
    return (
        <Card data-id="OffersCard"
            title="Product Offers"
            className="min-w-100 min-h-25 bg-[#eaf5f9]" >
            <OffersTable />
        </Card>
    )
}
