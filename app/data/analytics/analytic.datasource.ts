import { MOCK_PAYMENT_DISTRIBUTION } from "~/utils/mocks/analytics.mock"
import { fetchPaymentDistributionApi } from "./analytic.api"

export const fetchPaymentDistributionDataSource = async(month?: string) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_PAYMENT_DISTRIBUTION
    }

    return fetchPaymentDistributionApi(month)
}