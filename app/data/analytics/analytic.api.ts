import type { 
    ApiResponse, 
    PaymentDistribution,
    AttendanceSummary,
    UserComposition
} from "#imports"

export const fetchPaymentDistributionApi = async(month?: string): Promise<ApiResponse<PaymentDistribution>> => {
    
    const config = useRuntimeConfig()

    return $fetch<ApiResponse<PaymentDistribution>>(
        `${config.public.apiBaseUrl}/analytics/payments/distribution`,
        {
            params: { month }
        }
    )
}

export const fetchAttendancesSummaryApi = async(month?: string): Promise<ApiResponse<AttendanceSummary[]>> => {
    
    const config = useRuntimeConfig()

    return $fetch<ApiResponse<AttendanceSummary[]>>(
        `${config.public.apiBaseUrl}/analytics/attendances/summary`,
        {
            params: { month }
        }
    )
}

export const fetchUsersCompositionApi = async(): Promise<ApiResponse<UserComposition>> => {

    const config = useRuntimeConfig()

    return $fetch<ApiResponse<UserComposition>>(
        `${config.public.apiBaseUrl}/analytics/users/composition`
    )
}