type SkillType = 'Fuerza' | 'Velocidad' | 'Resistencia'
type SkillTypeDescription = 'Patadas firmes y seguras' | 'Brazos lentos pero fuertes' | 'Avanza sin prisa, sin pausa'
type SkillIndex = 0 | 1 | 2
type Gender = 'MASCULINO' | 'FEMENINO'
type ColorBgGender = 'bg-blue-100' | 'bg-pink-100'
type ColortextGender = 'text-blue-500' | 'text-pink-500'
type ColorBorderGender = 'border-blue-500' | 'border-pink-500'

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

export const backgroundColorByGender = (gender: string | Gender = 'MASCULINO'): ColorBgGender => {

    const normalized = gender?.toLowerCase() as string;

    const color: Record<string, ColorBgGender> = {
        masculino: 'bg-blue-100',
        femenino: 'bg-pink-100'
    }

    return (color[normalized] ?? color.masculino) as ColorBgGender
}

export const textColorByGender = (gender: string | Gender = 'MASCULINO'): ColortextGender => {

    const normalized = gender?.toLowerCase() as string;

    const color: Record<string, ColortextGender> = {
        masculino: 'text-blue-500',
        femenino: 'text-pink-500'
    }

    return (color[normalized] ?? color.masculino) as ColortextGender
}

export const borderColorByGender = (gender: string | Gender = 'MASCULINO'): ColorBorderGender => {

    const normalized = gender?.toLowerCase() as string;

    const color: Record<string, ColorBorderGender> = {
        masculino: 'border-blue-500',
        femenino: 'border-pink-500'
    }

    return (color[normalized] ?? color.masculino) as ColorBorderGender
}