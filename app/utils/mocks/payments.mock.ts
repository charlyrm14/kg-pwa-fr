import type { 
    ApiResponse, 
    CreatePaymentPayload, 
    CursorPagination, 
    Payment,
    PaymentDetail
} from "#imports"
import { adaptPayment} from '~~/server/adapters/payment.adapter'

export const MOCK_PAYMENTS: ApiResponse<CursorPagination<Payment>> = {
    data: {
        data: [
            {
                id: 56,
                folio: "PAY-000056",
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
                folio: "PAY-000055",
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
                folio: "PAY-000054",
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
                folio: "PAY-000053",
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
                folio: "PAY-000051",
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

export const fetchPaymentByIdMock = async(paymentId: number): Promise<ApiResponse<PaymentDetail>> => {

    const payment = MOCK_PAYMENTS.data.data.find(
        p => p.id === paymentId
    )

    if (!payment) {
        throw new Error('Payment not found')
    }

    return {
        data: {
            ...payment,
            updated_at: "2026-12-02",
            updated_at_formatted: "1 day ago",
            user: null,
            type: {
                name: "Visita",
                slug: "visita",
                description: "Pase de un día para una clase.",
                base_amount: "250.00",
                is_recurring: false,
                coverage_days: 1
            },
            reference: {
                name: "Efectivo",
                slug: "efectivo",
                description: "Pago en efectivo"
            }
        }
    }
}

export const createPaymentMock = (payload: CreatePaymentPayload) => {
    return {
        data: MOCK_PAYMENTS.data.data.unshift(adaptPayment(payload))
    }
}

export const deletePaymentByIdMock = (paymentId: number) => {

    const payment = MOCK_PAYMENTS.data.data.filter(
        p => p.id === paymentId
    )

    if (!payment) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Payment not found'
        })
    }

    return {
        data: {
            ...MOCK_PAYMENTS.data.data.filter(p => p.id !== paymentId)
        }
    }
}