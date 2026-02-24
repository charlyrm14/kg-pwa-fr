import type { ApiResponse, PaymentDistribution } from "#imports"

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