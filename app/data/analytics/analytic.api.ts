import type { 
    ApiResponse, 
    PaymentDistribution,
    AttendanceSummary,
    UserComposition,
    RevenueTimeline
} from "#imports"
import { authApi } from "../auth/auth.api"

export const fetchPaymentDistributionApi = async(month?: string): Promise<ApiResponse<PaymentDistribution>> => {
    
    const api = authApi()

    return await api<ApiResponse<PaymentDistribution>>('/analytics/payments/distribution',
        {
            params: { month }
        }
    )
}

export const fetchAttendancesSummaryApi = async(month?: string): Promise<ApiResponse<AttendanceSummary[]>> => {
    
    const api = authApi()

    return await api<ApiResponse<AttendanceSummary[]>>('/analytics/attendances/summary',
        {
            params: { month }
        }
    )
}

export const fetchUsersCompositionApi = async(): Promise<ApiResponse<UserComposition>> => {

    const api = authApi()

    return await api<ApiResponse<UserComposition>>('/analytics/users/composition')
}

export const fetchRevenueTimelineApi = async(year?: string): Promise<ApiResponse<RevenueTimeline>> => {

    const api = authApi()

    return api<ApiResponse<RevenueTimeline>>('/analytics/revenue/timeline', 
        {
            params: { year }
        }
    )
}