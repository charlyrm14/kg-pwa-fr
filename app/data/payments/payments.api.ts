import type { CursorPagination } from "~~/shared/types/Pagination"
import type { ApiResponse } from "#imports"
import type { 
    CreatePaymentPayload, 
    CreatePaymentResponse, 
    Payment, 
    PaymentFilters,
    PaymentDetail, 
    EditPaymentPayload
} from "~~/shared/types/Payment"

export const fetchPaymentsApi = async(pageUrl: string | null = null, filters: PaymentFilters) => {
    
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

export const fetchPaymentByIdApi = async(paymentId: number): Promise<ApiResponse<PaymentDetail>> => {

    const config = useRuntimeConfig()

    return $fetch<ApiResponse<PaymentDetail>>(
        `${config.public.apiBaseUrl}/payments/${paymentId}`
    )
}

export const createPaymentApi = async(payload: CreatePaymentPayload) => {

    const config = useRuntimeConfig()

    return $fetch<ApiResponse<CreatePaymentResponse>>(
        `${config.public.apiBaseUrl}/payments/`,
        {
            method: 'POST',
            body: payload
        } 
    )
}

export const editPaymentApi = async(paymentId: number, payload: EditPaymentPayload) => {

    const config = useRuntimeConfig()

    return $fetch<ApiResponse<CreatePaymentResponse>>(
        `${config.public.apiBaseUrl}/payments/${paymentId}`,
        {
            method: 'PUT',
            body: payload
        } 
    )
}

export const deletePaymentByIdApi = async(paymentId: number) => {

    const config = useRuntimeConfig()

    return $fetch<ApiResponse<Payment>>(
        `${config.public.apiBaseUrl}/payments/${paymentId}`,
        {
            method: 'DELETE',
        } 
    )
}