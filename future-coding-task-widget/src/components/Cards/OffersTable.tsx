import { useOffers } from '@/hooks'
import { decodeHtml } from '@/utils'
import { Table, type Column, type Row } from '@/components/ui/simple'
import { useMemo } from 'react'

import type { OfferItem } from '@/models/products'

const columns: Column[] = [
    { title: 'Product', field: 'offerName', className: 'text-left' },
    { title: 'Price', field: 'price', className: 'text-right' },
    { title: 'Link', field: 'link', fieldText: 'linkText', type: 'link', className: 'text-center' },
    { title: '', field: 'image', type: 'image', className: 'text-center' },
    { title: 'Logo', field: 'merchantLogo', type: 'image', className: 'text-center' }
]

const getPrice = (o: OfferItem) => (
    `${decodeHtml(o?.offer?.currency_symbol || '')}${o?.offer?.price}`
)

const toRow = (o: OfferItem) => ({
    offerName: o?.offer?.name || '',
    price: getPrice(o),
    link: o?.offer?.link,
    linkText: o?.offer?.link_text,
    image: o?.image,
    merchantLogo: o?.merchant?.logo_url
})

/*
 * - - - - -  - - - - -  - - - - -
 *
 * - - - - -  - - - - -  - - - - -
 */
export const OffersTable = () => {
    const { offers, statusLabel } = useOffers()  // OfferItem[]

    // Simplify the data for the table.
    const data: Row[] = useMemo(() => offers.map(toRow), [offers])

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
