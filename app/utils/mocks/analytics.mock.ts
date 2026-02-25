import type { ApiResponse, AttendanceSummary, PaymentDistribution } from "#imports"

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