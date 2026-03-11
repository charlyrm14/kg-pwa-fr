import type { CurrentLevelCategory, NextLevelCategory } from "./StudentProgram"

export interface LastEventHome {
    title: string | null
    slug: string | null
    content: string | null
    published_at: string | null
    location: string | null
    start_date: string | null
    start_hour: string | null
    end_date: string | null
    end_hour: string | null
    remaining_time: string | null
}

export interface LastReminderHome {
    title: string
    subtitle: string
}

export interface TodayBirthdays {
    name: string
    last_name: string
    age: number
}

export interface HomeUser {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string
    student_code: string | null
    role: string
    current_level: CurrentLevelCategory | null
    next_level: NextLevelCategory | null
    last_event: LastEventHome
    last_reminder: LastReminderHome | null
    todays_birthdays: TodayBirthdays[] | null
}