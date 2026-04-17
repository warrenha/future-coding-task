import { useOffers } from '@/hooks'
import { decodeHtml } from '@/utils'
import { Table, type Column, type Row } from '@/components/ui/simple'
import { useMemo } from 'react'

import type { OfferItem } from '@/models/products'

const columns: Column[] = [
    { title: 'Product', field: 'offerName', className: 'text-left' },
    { title: 'Price', field: 'price' },
    //{ title: 'Link', field: '' },
    //{ title: 'Image', field: '' },
    //{ title: 'Logo', field: '' }
]

const getPrice = (o: OfferItem) => (
    `${decodeHtml(o?.offer?.currency_symbol || '')}${o?.offer?.price}`
)

/*
 * - - - - -  - - - - -  - - - - -
 *
 * - - - - -  - - - - -  - - - - -
 */
export const OffersTable = () => {
    const { offers, statusLabel } = useOffers()  // OfferItem[]

    // Simplify the data for the table.
    const data: Row[] = useMemo(() => offers.map(o => ({
        offerName: o?.offer?.name||'',
        price: getPrice(o)
    })), [offers])

    // - - - - - Render - - - - - //

    return (
        <div data-id="OffersTable" >
            { statusLabel ? (
                <div>{statusLabel}</div>
            ) : (
                <Table
                    columns={columns}
                    data={data} />
            )}
        </div>
    )
}
