import { createPaymentApi, fetchPaymentsApi } from "./payments.api"
import type { PaymentFilters, CreatePaymentPayload } from "~~/shared/types/Payment"
import { createPaymentMock, MOCK_PAYMENTS } from "~/utils/mocks/payments.mock"

export const fetchPaymentsDataSource = async(pageUrl: string | null = null, filters: PaymentFilters) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_PAYMENTS
    }
    
    return fetchPaymentsApi(pageUrl, filters)
}

export const createPaymentDataSource = (payload: CreatePaymentPayload) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return createPaymentMock(payload)
    }

    return createPaymentApi(payload)
}