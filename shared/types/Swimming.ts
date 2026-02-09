export type SkillType = 'Fuerza' | 'Velocidad' | 'Resistencia'
export type SkillDescription = 'Patadas firmes y seguras' | 'Brazos lentos pero fuertes' | 'Avanza sin prisa, sin pausa'
export type SkillIndex = 0 | 1 | 2
export type LevelType = 'FOCA' | 'TORTUGA' | 'MANTARRAYA' | 'PEZ-VELA' | 'TIBURON'

export type LevelColors = {
    bg: string
    text: string
    border: string
    gradient: string
}

export interface CategorySkill {
    skill: string
}

export interface SwimCategory {
    name: string
    slug: string
    description: string
    category_skills: CategorySkill[]
}

export interface CategoryWithProgress extends SwimCategory {
    progress: number
    status: string
}