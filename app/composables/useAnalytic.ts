import { 
    fetchPaymentDistributionDataSource,
    fetchAttendancesSummaryDataSource 
} from "~/data/analytics/analytic.datasource"

export function useAnalytic () {

    const fetchPaymentDistribution = async(month?: string) => {
        return await fetchPaymentDistributionDataSource(month)
    }

    const fetchAttendancesSummary = async(month?: string) => {
        return await fetchAttendancesSummaryDataSource(month)
    }

    const getAnalyticsData = async(params?: any) => {

        const [
            payments,
            attendances
        ] = await Promise.all([
            fetchPaymentDistribution(params),
            fetchAttendancesSummary(params)
        ])

        return {
            payments: payments,
            attendances: attendances
        }
    }

    return {
        getAnalyticsData,
    }
}