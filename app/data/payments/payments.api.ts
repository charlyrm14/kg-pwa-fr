import type { CursorPagination } from "~~/shared/types/Pagination"
import type { ApiResponse } from "#imports"
import type { Payment, PaymentFilters } from "~~/shared/types/Payment"

export const fetchPaymentsApi = async(filters: PaymentFilters) => {
    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<CursorPagination<Payment>>>(`
        ${config.public.apiBaseUrl}/payments`, {
            params: {
                page: 1,
                ...filters
            }
        }
    )
}