export interface CategorySkill {
    percentage: number
    skill: string
}

export interface SwimCategory {
    name: string
    slug: string
    description: string
    category_skills: CategorySkill[]
}