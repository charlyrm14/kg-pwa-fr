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