// - - - - - Types - - - - - //

/*
 * Placeholder types for code readability.
 */

export type Offer = {
    name: string,  // "Download Xbox Series X|S Xbox One Dustborn"

    price: string,  // "29.99"
    in_stock: boolean,  // true
    currency_iso: string,  // "USD"
    currency_symbol: string,  // "&#36;"

    link: string  // "https://.../click-6361382-13502820"
    // ...
}

export type Merchant = {
    id: number,  // 1925
    name: string,  // "Dell"
    url: string,  // "http://www.dell.com/en-us/"
    logo_url: string  // "https://images.fie.futurecdn.net/dtjgztywpah612bk-16685390008939-100-80.png.webp"
    // ..
}

export type OfferItem = {
    id: number,  // 907959531
    match_id: number,  // 907959531
    product_key: string,  // 56456-ad120370"

    image: string,  // "https://.../products/9147591b43e9b932f8d80a733f1f5cb82106e5e5-100-80.jpg.webp"
    model_image: string,  // "https://m.media-amazon.com/images/I/41nq3jfIMPL.jpg"

    model: string,  // "Microsoft Xbox One S"
    model_id: number,  // 250620

    offer: Offer,
    merchant: Merchant
    // ...
}
