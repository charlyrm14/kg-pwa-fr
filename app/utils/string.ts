type SkillType = 'Fuerza' | 'Velocidad' | 'Resistencia'
type SkillTypeDescription = 'Patadas firmes y seguras' | 'Brazos lentos pero fuertes' | 'Avanza sin prisa, sin pausa'
type SkillIndex = 0 | 1 | 2

export const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export const skillType = (index: number): SkillType => {

    const type: Record<SkillIndex, SkillType> = {
        0: 'Fuerza',
        1: 'Velocidad',
        2: 'Resistencia'
    }

    return (type[index as SkillIndex] ?? type[0]) as SkillType
}

export const skillTypeDescription = (index: number): SkillTypeDescription => {

    const type: Record<SkillIndex, SkillTypeDescription> = {
        0: 'Patadas firmes y seguras',
        1: 'Brazos lentos pero fuertes',
        2: 'Avanza sin prisa, sin pausa'
    }

    return (type[index as SkillIndex] ?? type[0]) as SkillTypeDescription
}
