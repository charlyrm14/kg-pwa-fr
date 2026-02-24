import type { 
    ApiResponse, 
    PaymentDistribution 
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