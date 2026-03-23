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

    const getAnalyticsData = async() => {

        try {

            const [payments, attendances, users, revenue] = await Promise.all([
                fetchPaymentDistribution().catch(() => null),
                fetchAttendancesSummary().catch(() => null),
                fetchUsersComposition().catch(() => null),
                fetchRevenueTimeline().catch(() => null)
            ]);

            return {
                payments,
                attendances,
                users,
                revenue
            }

        } catch (error) {
            console.error(error)
            throw error
        }
    }

    return {
        getAnalyticsData
    }
}