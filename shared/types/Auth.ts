export interface AuthUser {
    user: {
        name: string
        last_name: string
        mother_last_name: string | null
        email: string
        force_password_change: boolean
        uuid: string
        student_code: string
        role: string
    }
}

export interface LoginPayload {
    email: string
    password: string
}