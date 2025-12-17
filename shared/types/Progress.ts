import type { CategorySkill } from "./Swimming"

export interface CurrentLevel {
    category_name: string
    category_description: string
    total_progress: number
    total_progress_formatted: string
    completed_level_date: string | null
    category_skills: CategorySkill[]
}

export interface NextLevel {
    category_name: string
    category_description: string
    category_skills: CategorySkill[]
}

export interface ProgressionHistory {
    category_id: number,
    category_name: string,
    total_progress: number
}

export interface StudentProgress {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string,
    student_code: string | null,
    current_level: CurrentLevel
    next_level: NextLevel,
    progression_history: ProgressionHistory[]
}