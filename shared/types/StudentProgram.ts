import type { Program } from "./SwimProgram"

export interface StudentProgram {
    user: UserProgram
    completed_levels_count: number | null
    program: Omit<Program, 'is_sequential' | 'is_active' | 'categories'>
    current_level: CurrentLevelCategory
    next_level: NextLevelCategory
    progression_history: ProgressionHistoryProgram[]
}

export interface UserProgram {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string
    student_code: string | null
}

export interface CurrentLevelCategory {
    category_id: number
    category_name: string
    category_slug: string
    category_description: string
    progress_percentage: number
    skills_completed: number
    skills_total: number
    started_at: string
    completed_at: string | null
}

export interface NextLevelCategory {
    category_id: number
    category_name: string
    category_slug: string
    category_description: string
}

export interface ProgressionHistoryProgram {
    category_id: number
    category_name: string
    category_slug: string
    category_description: string
    progress_percentage: number
    is_completed: boolean
    is_current: boolean
    skills_completed: number
    skills_total: number
    started_at: string
    completed_at: string | null
    skills: SkillCategoryProgress[]
}

export interface SkillCategoryProgress {
    skill_progress_id: number
    skill_id: number
    skill_description: string
    skill_order: number
    skill_progress_percentage: number
    skill_progress_completed_at: string | null
}