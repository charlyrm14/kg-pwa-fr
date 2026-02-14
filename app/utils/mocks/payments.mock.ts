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
                created_at_formatted: "53 minutes ago",
                user: null,
                type: {
                    name: "Visita",
                    slug: "visita"
                },
                reference: {
                    name: "Efectivo",
                    slug: "efectivo"
                }
            },
            {
                id: 55,
                amount: 250,
                payment_date: "2026-01-09",
                covered_until_date: "2026-01-09",
                notes: null,
                created_at: "2026-01-10",
                created_at_formatted: "53 minutes ago",
                user: {
                    name: "Héctor A",
                    last_name: "Hérnandez",
                    mother_last_name: null,
                    email: "handrekg@gmail.com"
                },
                type: {
                    name: "Visita",
                    slug: "visita"
                },
                reference: {
                    name: "Efectivo",
                    slug: "efectivo"
                }
            },
            {
                id: 54,
                amount: 250,
                payment_date: "2026-01-07",
                covered_until_date: "2026-01-07",
                notes: null,
                created_at: "2026-01-10",
                created_at_formatted: "53 minutes ago",
                user: {
                    name: "Héctor A",
                    last_name: "Hérnandez",
                    mother_last_name: null,
                    email: "handrekg@gmail.com"
                },
                type: {
                    name: "Visita",
                    slug: "visita"
                },
                reference: {
                    name: "Efectivo",
                    slug: "efectivo"
                }
            },
            {
                id: 53,
                amount: 250,
                payment_date: "2026-01-05",
                covered_until_date: "2026-01-05",
                notes: null,
                created_at: "2026-01-10",
                created_at_formatted: "53 minutes ago",
                user: {
                    name: "Héctor A",
                    last_name: "Hérnandez",
                    mother_last_name: null,
                    email: "handrekg@gmail.com"
                },
                type: {
                    name: "Visita",
                    slug: "visita"
                },
                reference: {
                    name: "Efectivo",
                    slug: "efectivo"
                }
            },
            {
                id: 51,
                amount: 1100,
                payment_date: "2026-01-10",
                covered_until_date: "2027-01-10",
                notes: null,
                created_at: "2026-01-10",
                created_at_formatted: "53 minutes ago",
                user: {
                    name: "Valentina E",
                    last_name: "Hérnandez",
                    mother_last_name: null,
                    email: "vhernandezkg@gmail.com"
                },
                type: {
                    name: "Anual",
                    slug: "anual"
                },
                reference: {
                    name: "Efectivo",
                    slug: "efectivo"
                }
            }
        ],
        path: "http://127.0.0.1:8000/api/v1/contents",
        per_page: 15,
        next_cursor: null,
        next_page_url: null,
        prev_cursor: null,
        prev_page_url: null
    }
}
