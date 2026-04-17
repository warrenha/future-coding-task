import { useCallback } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { apiGet } from '../api/api'

import type { Product } from '@/models/products'

const QUERY = '?model_name=xbox_one_s&area=US&rows=10'
const URL = `https://search-api.fie.future.net.uk/widget.php${QUERY}`

// - - - - - API - - - - - //

/*
 * Send a request to the test api.
 */
export const fetchProductOffers = async () => {
    return apiGet(URL)
        .then((response) => {
            // todo validate response, handle error
            return response as Product
        })
}

/*
 * Hook -- Hide the tanstack boilerplate
 */
export const useProductOffers = () => {
    // The returned object is always a new instance
    const { data, isPending, isSuccess, isError } = useQuery({
        queryFn: fetchProductOffers,
        queryKey: ['productOffers']
    })

    // Simplify for the component
    const statusLabel = isPending ? 'Loading...' :
        isError ? 'Error!' :
        isSuccess ? null : null

    return {
        productOffers: data || null,  // Product | null
        pending: isPending,
        error: isError,
        success: isSuccess,
        statusLabel  // string | null
    }
}
