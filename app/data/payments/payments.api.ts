import type { CursorPagination } from "~~/shared/types/Pagination"
import type { ApiResponse } from "#imports"
import type { Payment, PaymentFilters } from "~~/shared/types/Payment"

export const fetchPaymentsApi = async(
    pageUrl: string | null = null, 
    filters: PaymentFilters
) => {
    
    const config = useRuntimeConfig()
    const endpoint = pageUrl ? pageUrl : `${config.public.apiBaseUrl}/payments`

    return await $fetch<ApiResponse<CursorPagination<Payment>>>(
        endpoint, {
            params: {
                page: 1,
                ...filters
            }
        }
    )
}