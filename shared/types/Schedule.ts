export interface Schedule {
    day_id: number
    day_name: string
    shorting_day: string
    day_formatted_name: string
    entry_time: string
    departure_time: string
}

export interface UserSchedule {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string
    student_code: string | null
    schedules: Schedule[] | null
}