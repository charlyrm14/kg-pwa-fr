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
import { authApi } from "../auth/auth.api"

export const fetchPaymentsApi = async(pageUrl: string | null = null, filters: PaymentFilters) => {
    
    const api = authApi()
    const endpoint = pageUrl ? pageUrl : `/payments`

    return await api<ApiResponse<CursorPagination<Payment>>>(
        endpoint, {
            params: {
                page: 1,
                ...filters
            }
        }
    )
}

export const fetchPaymentByIdApi = async(paymentId: number): Promise<ApiResponse<PaymentDetail>> => {

    const api = authApi()

    return await api<ApiResponse<PaymentDetail>>(`/payments/${paymentId}`)
}

export const createPaymentApi = async(payload: CreatePaymentPayload) => {

    const api = authApi()

    return await api<ApiResponse<CreatePaymentResponse>>('/payments/',
        {
            method: 'POST',
            body: payload
        } 
    )
}

export const editPaymentApi = async(paymentId: number, payload: EditPaymentPayload) => {

    const api = authApi()

    return await api<ApiResponse<CreatePaymentResponse>>(`/payments/${paymentId}`,
        {
            method: 'PUT',
            body: payload
        } 
    )
}

export const deletePaymentByIdApi = async(paymentId: number) => {

    const api = authApi()

    return await api<ApiResponse<Payment>>(`/payments/${paymentId}`,
        {
            method: 'DELETE',
        } 
    )
}