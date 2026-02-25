import { 
    fetchPaymentDistributionDataSource,
    fetchAttendancesSummaryDataSource, 
    fetchUsersCompositionDataSource,
    fetchRevenueTimelineDataSource
} from "~/data/analytics/analytic.datasource"

export function useAnalytic () {

    const fetchPaymentDistribution = async(month?: string) => {
        return await fetchPaymentDistributionDataSource(month)
    }

    const fetchAttendancesSummary = async(month?: string) => {
        return await fetchAttendancesSummaryDataSource(month)
    }

    const fetchUsersComposition = async() => {
        return await fetchUsersCompositionDataSource()
    }

    const fetchRevenueTimeline = async(year?: string) => {
        return await fetchRevenueTimelineDataSource(year)
    }

    const getAnalyticsData = async(params?: any) => {

        const [
            payments,
            attendances,
            users,
            revenue
        ] = await Promise.all([
            fetchPaymentDistribution(params),
            fetchAttendancesSummary(params),
            fetchUsersComposition(),
            fetchRevenueTimeline(params)
        ])

        return {
            payments: payments,
            attendances: attendances,
            users: users,
            revenue: revenue
        }
    }

    return {
        getAnalyticsData,
    }
}