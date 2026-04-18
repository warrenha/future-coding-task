import type { OfferItem } from './Offer'
import type { AnyObject } from '@/types/common/AnyObject'

// - - - - - Types - - - - - //

/*
 * Placeholder types for code readability.
 */

export type Data = {
    title: string,
    offers: OfferItem[]
    // ...
}

export type Widget = {
    data: Data
}

type Models = AnyObject

/*
 * A Product returned from the api.
 */
export type Product = {
    widget: Widget,

    models: Models,

    area: string,

    battle: null,

    version: string
}
