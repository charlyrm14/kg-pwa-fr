export interface CurrentLevelHome {
    category_name: string
    total_progress: number
    total_progress_formatted: string
}

export interface LastEventHome {
    title: string
    slug: string
    content: string
    published_at: string
    location: string
    start_date: string
    start_hour: string
    end_date: string
    end_hour: string
    remaining_time: string
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
    current_level: CurrentLevelHome | null
    next_level: string | null
    last_event: LastEventHome | null
    last_reminder: LastReminderHome | null
    todays_birthdays: TodayBirthdays[] | null
}