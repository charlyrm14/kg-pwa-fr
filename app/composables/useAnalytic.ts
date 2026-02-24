import { 
    fetchPaymentDistributionDataSource 
} from "~/data/analytics/analytic.datasource"

export function useAnalytic () {

    const fetchPaymentDistribution = async(month?: string) => {
        return await fetchPaymentDistributionDataSource(month)
    }

    const getAnalyticsData = async(params?: any) => {

        const payments = await fetchPaymentDistribution(params)

        return {
            payments: payments
        }
    }

    return {
        getAnalyticsData,
    }
}