export type SkillType = 'Fuerza' | 'Velocidad' | 'Resistencia'
export type SkillDescription = 'Patadas firmes y seguras' | 'Brazos lentos pero fuertes' | 'Avanza sin prisa, sin pausa'
export type SkillIndex = 0 | 1 | 2

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