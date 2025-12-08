import type { AttendanceType, AttendanceBgColor } from "~~/shared/types/Attendance"
import { ATTENDANCE_STATUS_MAP } from "~~/shared/types/Attendance"

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

/**
 * The function `attendancesColors` returns an array of objects containing attendance status and color
 * information.
 * @returns An array of objects with properties `id`, `status`, and `color` is being returned. Each
 * object corresponds to an entry in the `ATTENDANCE_STATUS_MAP` object, with the `id` being the index
 * of the entry plus one, the `status` being the status value from the entry, and the `color` being the
 * color value from the entry.
 */
export const attendancesColors = (): AttendanceColorMap[] => {
    return (Object.entries(ATTENDANCE_STATUS_MAP) as [AttendanceType, typeof ATTENDANCE_STATUS_MAP[AttendanceType]][])
    .map(([key, value], index) => ({
        id: index + 1,
        status: value.status, 
        color: value.color,
    }));
}

/**
 * The function `attendanceBgColor` takes a type of attendance as input and returns the corresponding
 * background color based on the type.
 * @param {string | AttendanceType} [typeAttendance=PRESENT] - The `typeAttendance` parameter is a
 * string that represents the type of attendance. It can have the following values:
 * @returns The function `attendanceBgColor` returns the background color corresponding to the given
 * type of attendance. The function takes a parameter `typeAttendance` which is a string representing
 * the type of attendance. If no type is provided, it defaults to 'PRESENT'. The function then
 * normalizes the input by converting it to lowercase and maps the normalized type to a specific
 * background color using a lookup table. If the normalized
 */
export const attendanceBgColor = (typeAttendance: AttendanceType = 'PRESENT'): AttendanceBgColor => {

    const normalizedType = typeAttendance.toUpperCase() as AttendanceType;
    const color = ATTENDANCE_STATUS_MAP[normalizedType]?.color;

    if (color) {
        return color;
    }

    return ATTENDANCE_STATUS_MAP.PRESENT.color;
}