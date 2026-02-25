export interface PeriodParams {
    month?: string
    from?: string
    to?: string
}

export interface PaymentDistribution {
    total: number
    distribution: Array<{
        id: number
        name: string
        slug: string
        total_amount: string
        percentage: string
    }> | null
}

export interface AttendanceSummary {
    id: number
    name: string
    total_students: number
}

export interface UserComposition {
    total: number
    detail: Array<{
        id: number
        name: string
        slug: string
        total_users: number
        percentage: string
    }>
}

export interface RevenueTimeline {
    meta: {
        year: string
    },
    baseMonth: {
        month: string
        amount: number
    },
    growth: Array<{
        month: string
        percentage: number
    }>
}