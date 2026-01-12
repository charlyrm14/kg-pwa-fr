import type { ApiResponse } from "#imports"
import type { CursorPagination } from "#imports"
import type { Payment } from "#imports"
import type { PaymentFilters } from "#imports"

export const MOCK_PAYMENTS: ApiResponse<CursorPagination<Payment>> = {
    data: {
        data: [
        {
            id: 56,
            amount: 250,
            payment_date: "2026-01-10",
            covered_until_date: "2026-01-10",
            notes: null,
            created_at: "2026-01-10",
            user: {
                name: "Héctor A",
                last_name: "Hérnandez",
                mother_last_name: null,
                email: "handrekg@gmail.com",
                uuid: "107a8f2d-f52d-438f-a093-7e1d3dac490c",
                student_code: "STU-20260110-2791"
            },
            type: {
                id: 3,
                name: "Visita",
                description: "Pase de un día para una clase de prueba o un evento especial. No recurrente.",
                base_amount: "250.00",
                coverage_days: 1
            },
            reference: {
                id: 1,
                name: "Efectivo",
                description: "Pago en efectivo"
            }
        },
        {
            id: 55,
            amount: 250,
            payment_date: "2026-01-09",
            covered_until_date: "2026-01-09",
            notes: null,
            created_at: "2026-01-10",
            user: {
                name: "Héctor A",
                last_name: "Hérnandez",
                mother_last_name: null,
                email: "handrekg@gmail.com",
                uuid: "107a8f2d-f52d-438f-a093-7e1d3dac490c",
                student_code: "STU-20260110-2791"
            },
            type: {
                id: 3,
                name: "Visita",
                description: "Pase de un día para una clase de prueba o un evento especial. No recurrente.",
                base_amount: "250.00",
                coverage_days: 1
            },
            reference: {
                id: 1,
                name: "Efectivo",
                description: "Pago en efectivo"
            }
        },
        {
            id: 54,
            amount: 250,
            payment_date: "2026-01-07",
            covered_until_date: "2026-01-07",
            notes: null,
            created_at: "2026-01-10",
            user: {
                name: "Héctor A",
                last_name: "Hérnandez",
                mother_last_name: null,
                email: "handrekg@gmail.com",
                uuid: "107a8f2d-f52d-438f-a093-7e1d3dac490c",
                student_code: "STU-20260110-2791"
            },
            type: {
                id: 3,
                name: "Visita",
                description: "Pase de un día para una clase de prueba o un evento especial. No recurrente.",
                base_amount: "250.00",
                coverage_days: 1
            },
            reference: {
                id: 1,
                name: "Efectivo",
                description: "Pago en efectivo"
            }
        },
        {
            id: 53,
            amount: 250,
            payment_date: "2026-01-05",
            covered_until_date: "2026-01-05",
            notes: null,
            created_at: "2026-01-10",
            user: {
                name: "Héctor A",
                last_name: "Hérnandez",
                mother_last_name: null,
                email: "handrekg@gmail.com",
                uuid: "107a8f2d-f52d-438f-a093-7e1d3dac490c",
                student_code: "STU-20260110-2791"
            },
            type: {
                id: 3,
                name: "Visita",
                description: "Pase de un día para una clase de prueba o un evento especial. No recurrente.",
                base_amount: "250.00",
                coverage_days: 1
            },
            reference: {
                id: 1,
                name: "Efectivo",
                description: "Pago en efectivo"
            }
        },
        {
            id: 51,
            amount: 1100,
            payment_date: "2026-01-10",
            covered_until_date: "2027-01-10",
            notes: null,
            created_at: "2026-01-10",
            user: {
                name: "Valentina E",
                last_name: "Hérnandez",
                mother_last_name: null,
                email: "vhernandezkg@gmail.com",
                uuid: "d4baf454-bb18-49de-a4a9-a709487e8037",
                student_code: "STU-20260110-7808"
            },
            type: {
                id: 2,
                name: "Anual",
                description: "Membresía anual con un 10% de descuento y acceso prioritario a eventos y clínicas.",
                base_amount: "1100.00",
                coverage_days: 365
            },
            reference: {
                id: 1,
                name: "Efectivo",
                description: "Pago en efectivo"
            }
        }
    ],
    path: "http://127.0.0.1:8000/api/v1/contents",
    per_page: 15,
    next_cursor: null,
    next_page_url: "http://127.0.0.1:8000/api/v1/contents?page=1",
    prev_cursor: null,
    prev_page_url: "http://127.0.0.1:8000/api/v1/contents?page=1"
    }
}
