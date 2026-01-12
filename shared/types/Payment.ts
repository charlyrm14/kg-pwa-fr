export interface UserPayment {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string
    student_code: string | null
}

export interface PaymentType {
    id: number
    name: string
    description: string
    base_amount: string
    coverage_days: number
}

export interface PaymentReference {
    id: number
    name: string
    description: string
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
    user: UserPayment
    type: PaymentType
    reference: PaymentReference
}