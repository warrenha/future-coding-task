import { useOffers } from '@/hooks'
import { decodeHtml } from '@/utils'

/*
 * - - - - -  - - - - -  - - - - -
 *
 * - - - - -  - - - - -  - - - - -
 */
export const OffersTable = () => {
    const { offers, statusLabel } = useOffers()  // OfferItem[]

    return (
        <div data-id="OffersTable" >
            <div>OffersTable</div>
            <div>
                { offers.map(o => (
                    <div>
                        {o?.offer?.name || ''},
                        {decodeHtml(o?.offer?.currency_symbol || '')}{o?.offer?.price || ''},
                        {o?.merchant?.name || ''}
                    </div>
                ))}
            </div>

            <div>Status: {statusLabel}</div>
        </div>
    )
}
