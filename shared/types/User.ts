export type Gender = 'MASCULINO' | 'FEMENINO'
export type ColorBgGender = 'bg-blue-100' | 'bg-pink-100'
export type ColorTextGender = 'text-blue-500' | 'text-pink-500'
export type ColorBorderGender = 'border-blue-500' | 'border-pink-500'

export interface User {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string
    student_code: string | null
    role_id: number
    created_at: string
    role_name: string
}

export interface ProfileData {
    about_me: string | null
    birthdate: string | null
    lada: number | null
    phone_number: string | null
    address: string | null
    gender: string | null
}

export interface Hobby {
    id: number
    name: string
}

export interface UserProfileData {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    force_password_change: number
    uuid: string
    student_code: string | null
    role: string
    profile: ProfileData | null,
    hobbies: Hobby[],
    created_at: string
    updated_at: string
}

export interface UserProfileBirthday {
    about_me: string
    birthdate: string
    age: number
    gender: string
}

export interface UserBirthday {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string
    student_code: string | null
    profile: UserProfileBirthday
    current_level: string | null
}