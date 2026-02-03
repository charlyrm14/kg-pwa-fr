import type { Schedule } from "./Schedule"
import type { AttendanceUserInfo } from "./Attendance"

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

export interface UserProfileResponse {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    force_password_change: number
    uuid: string
    student_code: string | null
    role: string
    profile: ProfileData | null
    hobbies: Hobby[]
    profile_image: UserProfileImage | null
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

export interface UserFilters {
    email?: string
    role?: string
    student_code?: string
}

export interface UserInfo {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string
    student_code: string | null
    role_id: number
    created_at: string
    role_name: string
    schedules: Schedule[] | null
    attendances: AttendanceUserInfo[] | null
}

export interface UserDelete {
    name: string
    last_name: string
    uuid: string
}

export interface UserProfileBasicInfo {
    about_me: string | null
    birthdate: string | null
    phone_number: string | null
    address: string | null
    gender_name: string | null
}

export interface UserProfileImage {
    id: number
    uuid: string
    path: string
    mime_type: string
    context: string
    created_at: string
}

export interface UserProfileGeneralInfo {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string
    student_code: string | null
    profile: UserProfileBasicInfo
    profile_image: UserProfileImage | null
}

export interface UserProfilePayload {
    about_me?: string | null
    birthdate?: string | null
    phone_number?: string | null
    address?: string | null
    gender_id?: number | null
    profile_image?: number[]
}