import { 
    MOCK_PAYMENT_DISTRIBUTION, 
    MOCK_ATTENDANCE_SUMMARY,
    MOCK_USERS_COMPOSITION
} from "~/utils/mocks/analytics.mock"
import { 
    fetchPaymentDistributionApi,
    fetchAttendancesSummaryApi,
    fetchUsersCompositionApi
} from "./analytic.api"

export const fetchPaymentDistributionDataSource = async(month?: string) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_PAYMENT_DISTRIBUTION
    }

    return fetchPaymentDistributionApi(month)
}

export const fetchAttendancesSummaryDataSource = async(month?: string) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_ATTENDANCE_SUMMARY
    }

    return fetchAttendancesSummaryApi(month)
}

export const fetchUsersCompositionDataSource = async() => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_USERS_COMPOSITION
    }

    return fetchUsersCompositionApi()
}