import { useProductOffers } from './useProductOffers'
import type { OfferItem, Product } from '@/types/products'

const NoOfferItems: OfferItem[] = []  // prevents re-renders

const getOfferItems = (p: Product | null): OfferItem[] => (
    p?.widget?.data?.offers || NoOfferItems
)

/*
 * Fetch all offers from the test api.
 */
export const useOffers = () => {
    const { productOffers, statusLabel} = useProductOffers()  // Product | null

    const offers = getOfferItems(productOffers)  // OfferItems[]

    return {
        offers,  // Offer[]
        statusLabel  // string
    }
}
