
import type { 
    PaymentFilters, 
    CreatePaymentPayload 
} from "~~/shared/types/Payment"
import { 
    fetchPaymentsApi, 
    createPaymentApi,
    fetchPaymentByIdApi
} from "./payments.api"
import { 
    MOCK_PAYMENTS, 
    fetchPaymentByIdMock, 
    createPaymentMock
} from "~/utils/mocks/payments.mock"

export const fetchPaymentsDataSource = async(pageUrl: string | null = null, filters: PaymentFilters) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_PAYMENTS
    }
    
    return fetchPaymentsApi(pageUrl, filters)
}

export const fetchPaymentByIdDataSource = async(paymentId: number) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return fetchPaymentByIdMock(paymentId)
    }

    return fetchPaymentByIdApi(paymentId)
}

export const createPaymentDataSource = (payload: CreatePaymentPayload) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return createPaymentMock(payload)
    }

    return createPaymentApi(payload)
}