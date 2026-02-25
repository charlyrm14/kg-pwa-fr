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