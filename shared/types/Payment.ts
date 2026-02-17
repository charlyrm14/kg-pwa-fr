export interface UserPayment {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
}

export interface PaymentType {
    name: string
    slug: string
}

export interface PaymentReference {
    name: string
    slug: string
}

export interface PaymentFilters {
    start_date?: string
    end_date?: string
}

export interface Payment {
    id: number
    folio: string
    amount: number
    payment_date: string
    covered_until_date: string 
    notes: string | null
    created_at: string
    created_at_formatted: string
    user: UserPayment | null
    type: PaymentType
    reference: PaymentReference
}

export interface CreatePaymentPayload {
    user_uuid: string | null
    payment_type_id: number
    amount: number
    payment_date: string
    payment_reference_id: number
    notes: string | null
}

export interface CreatePaymentResponse {
    folio: string
    amount: number
    payment_date: string
    covered_until_date: string
    payment_reference: string
    payment_type: string
    notes: string
    created_at: string
    created_at_formatted: string
}

export interface PaymentDetail {
    id: number
    folio: string
    amount: number
    payment_date: string
    covered_until_date: string
    notes: string | null
    created_at: string
    created_at_formatted: string
    updated_at: string
    updated_at_formatted: string
    user: {
        name: string
        last_name: string
        mother_last_name: string| null
        email: string
    } | null,
    type: {
        name: string
        slug: string
        description: string
        base_amount: string
        is_recurring: boolean
        coverage_days: number
    },
    reference: {
        name: string
        slug: string
        description: string
    }
}

export interface PaymentDeletePayload {
    id: number
    folio: string
}