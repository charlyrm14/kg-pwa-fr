import type {
    ApiResponse, 
    AttendanceSummary, 
    PaymentDistribution, 
    RevenueTimeline, 
    UserComposition 
} from "#imports"

export const MOCK_PAYMENT_DISTRIBUTION: ApiResponse<PaymentDistribution> = {
    data: {
        total: 1700,
        distribution: [
            {
                id: 2,
                name: "Mensual básica",
                slug: "mensual-basica",
                total_amount: "1400.00",
                percentage: "82.35"
            },
            {
                id: 1,
                name: "Visita",
                slug: "visita",
                total_amount: "300.00",
                percentage: "17.65"
            }
        ]
    }
}

export const MOCK_ATTENDANCE_SUMMARY: ApiResponse<AttendanceSummary[]> = {
    data: [
        {
            id: 4,
            name: "Retardo",
            total_students: 1
        },
        {
            id: 1,
            name: "Asistió",
            total_students: 2
        },
        {
            id: 3,
            name: "Ausencia justificada",
            total_students: 4
        }
    ]
}

export const MOCK_USERS_COMPOSITION: ApiResponse<UserComposition> = {
    data: {
        total: 6,
        detail: [
            {
                id: 1,
                name: "Admin",
                slug: "admin",
                total_users: 2,
                percentage: "33.33"
            },
            {
                id: 2,
                name: "Profesor",
                slug: "profesor",
                total_users: 2,
                percentage: "33.33"
            },
            {
                id: 3,
                name: "Estudiante",
                slug: "estudiante",
                total_users: 2,
                percentage: "33.33"
            }
        ]
    }
}

export const MOCK_REVENUE_TIMELINE: ApiResponse<RevenueTimeline> = {
    data: {
        meta: {
            year: "2026"
        },
        baseMonth: {
            month: "Ene 2026",
            amount: 500
        },
        growth: [
            {
                month: "Ene 2026",
                percentage: 100
            },
            {
                month: "Feb 2026",
                percentage: 400
            },
            {
                month: "Mar 2026",
                percentage: 0
            },
            {
                month: "Abr 2026",
                percentage: 0
            },
            {
                month: "May 2026",
                percentage: 0
            },
            {
                month: "Jun 2026",
                percentage: 0
            },
            {
                month: "Jul 2026",
                percentage: 0
            },
            {
                month: "Ago 2026",
                percentage: 0
            },
            {
                month: "Sep 2026",
                percentage: 0
            },
            {
                month: "Oct 2026",
                percentage: 0
            },
            {
                month: "Nov 2026",
                percentage: 0
            },
            {
                month: "Dic 2026",
                percentage: 0
            }
        ]
    }
}