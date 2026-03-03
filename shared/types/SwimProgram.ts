export interface Program {
    id: number
    name: string
    min_age: number
    max_age: number
    is_sequential: boolean
    is_active: boolean
    categories: CategoryProgram[]
}

export interface CategoryProgram {
    id: number
    name: string
    slug: string
    description: string
    level_order: number
    swim_program_id: number
    skills: CategorySkill[]
}

export interface CategorySkill {
    id: number
    swim_category_id: number
    description: string
    skill_order: number
}