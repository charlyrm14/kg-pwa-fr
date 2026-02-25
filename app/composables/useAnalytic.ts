import { 
    fetchPaymentDistributionDataSource,
    fetchAttendancesSummaryDataSource, 
    fetchUsersCompositionDataSource
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

    const getAnalyticsData = async(params?: any) => {

        const [
            payments,
            attendances,
            users
        ] = await Promise.all([
            fetchPaymentDistribution(params),
            fetchAttendancesSummary(params),
            fetchUsersComposition()
        ])

        return {
            payments: payments,
            attendances: attendances,
            users: users
        }
    }

    return {
        getAnalyticsData,
    }
}