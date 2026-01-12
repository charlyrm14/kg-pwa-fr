import type { ApiResponse } from "~~/shared/types/ApiResponse"
import type { PaginationContent } from "~~/shared/types/Pagination"
import type { Payment } from "~~/shared/types/Payment"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<PaginationContent<Payment>>>(
        `${config.public.apiBaseUrl}/payments`
    )
})