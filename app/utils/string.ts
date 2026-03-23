import type { 
    AttendanceType, 
    AttendanceBgColor 
} from "~~/shared/types/Attendance"

import type { 
    Gender, 
    ColorBgGender, 
    ColorTextGender, 
    ColorBorderGender 
} from "~~/shared/types/User"
import { ATTENDANCE_STATUS_MAP } from "~~/shared/types/Attendance"
import type { ContentStatus } from "~~/shared/types/Content"

/**
 * The function `capitalizeFirstLetter` takes a string as input and returns the same string with the
 * first letter capitalized.
 * @param {string} text - The `text` parameter in the `capitalizeFirstLetter` function is a string that
 * represents the text you want to capitalize the first letter of.
 * @returns The function `capitalizeFirstLetter` takes a string as input and returns the same string
 * with the first letter capitalized.
 */
export const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}


/**
 * The function `backgroundColorByGender` returns a background color based on the gender provided,
 * defaulting to a masculine color if not specified.
 * @param {string | Gender} [gender=MASCULINO] - The `gender` parameter in the
 * `backgroundColorByGender` function is a string that represents the gender of a person. It has a
 * default value of `'MASCULINO'` if no value is provided. The function also accepts a type `Gender`,
 * which is used as a fallback if the
 * @returns The function `backgroundColorByGender` returns a background color based on the gender
 * provided. If the gender is not specified or is not recognized, it defaults to a blue background
 * color for masculine gender.
 */
export const backgroundColorByGender = (gender: string | Gender = 'MASCULINO'): ColorBgGender => {

    const normalized = gender?.toLowerCase() as string;

    const color: Record<string, ColorBgGender> = {
        masculino: 'bg-blue-100',
        femenino: 'bg-pink-100'
    }

    return (color[normalized] ?? color.masculino) as ColorBgGender
}

/**
 * The function `textColorByGender` returns a color based on the gender provided, defaulting to blue
 * for masculine and pink for feminine.
 * @param {string | Gender} [gender=MASCULINO] - The `gender` parameter in the `textColorByGender`
 * function is a string that represents the gender of a person. It has a default value of `'MASCULINO'`
 * if no value is provided.
 * @returns The function `textColorByGender` returns a color value based on the input gender. If the
 * input gender is 'masculino' (or any other value that is not 'femenino'), it will return
 * 'text-blue-500'. If the input gender is 'femenino', it will return 'text-pink-500'. If the input
 * gender is not provided or is not
 */
export const textColorByGender = (gender: string | Gender = 'MASCULINO'): ColorTextGender => {

    const normalized = gender?.toLowerCase() as string;

    const color: Record<string, ColorTextGender> = {
        masculino: 'text-blue-500',
        femenino: 'text-pink-500'
    }

    return (color[normalized] ?? color.masculino) as ColorTextGender
}

/**
 * The function `borderColorByGender` returns a color border based on the gender provided, defaulting
 * to blue for masculine and pink for feminine.
 * @param {string | Gender} [gender=MASCULINO] - The `borderColorByGender` function takes a `gender`
 * parameter, which is a string representing the gender of a person. The default value for the `gender`
 * parameter is set to 'MASCULINO' if no value is provided.
 * @returns The function `borderColorByGender` is returning a color value based on the input gender. If
 * the gender is 'masculino' (or any other value not equal to 'femenino'), it will return
 * 'border-blue-500'. If the gender is 'femenino', it will return 'border-pink-500'. The default value
 * is 'MASCULINO', so
 */
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
    return (Object.entries(ATTENDANCE_STATUS_MAP))
    .map(([key, value], index) => ({
        id: index + 1,
        status: value.status, 
        color: value.color,
    }));
}


/**
 * This function returns the background color associated with a given attendance status ID, defaulting
 * to a specific color if none is found.
 * @param {AttendanceType} [attendanceId=1] - The `attendanceId` parameter is used to determine the
 * type of attendance for which we want to retrieve the background color. It has a default value of `1`
 * if not provided.
 * @returns The function `attendanceBgColor` returns the background color associated with the given
 * `attendanceId` from the `ATTENDANCE_STATUS_MAP`. If the color is found in the map, it is returned.
 * If not found, it returns the default color associated with attendanceId 1.
 */
export const attendanceBgColor = (attendanceId: AttendanceType = 1): AttendanceBgColor => {

    const color = ATTENDANCE_STATUS_MAP[attendanceId]?.color;

    if (color) {
        return color;
    }

    return ATTENDANCE_STATUS_MAP[1]?.color;
}

/**
 * The function `getFirstLetterUppercase` takes a string as input and returns the first letter of the
 * string in uppercase, or an empty string if the input is null or undefined.
 * @param {string | null} [value] - The `value` parameter in the `getFirstLetterUppercase` function is
 * a string that represents the input value for which we want to get the first letter in uppercase. It
 * is an optional parameter that can be either a string or `null`. If the `value` is `null
 * @returns An empty string will be returned if the `value` parameter is falsy (null, undefined, or an
 * empty string). Otherwise, the function will return the first letter of the trimmed `value` parameter
 * in uppercase.
 */
export const getFirstLetterUppercase = (text?: string | null): string => {
    if (!text) return ''

    return text.trim().charAt(0).toUpperCase()
}

/**
 * The function `contentStatusColor` returns a color code based on the provided content status.
 * @param {string | ContentStatus} [status] - The `contentStatusColor` function takes a `status`
 * parameter, which can be a string or a `ContentStatus` enum. The function normalizes the status value
 * by converting it to lowercase and replacing any spaces with underscores. It then maps the normalized
 * status to a corresponding color class from the `
 * @returns The function `contentStatusColor` returns a string representing the background color class
 * based on the provided status. If the status is one of the predefined values (draft, pending_review,
 * rejected, scheduled, published, unpublished, deleted), it will return the corresponding background
 * color class. If the status is not recognized, it will default to 'bg-slate-100'.
 */
export const contentStatusColor = (status?: string | ContentStatus): string => {
    const normalized = status
        ?.toLowerCase()
        .replace(/\s+/g, '_') as string

    const colors: Record<string, string> = {
        draft: 'text-slate-500',
        pending_review: 'text-amber-500',
        rejected: 'text-red-500',
        scheduled: 'text-sky-500',
        published: 'text-emerald-500',
        unpublished: 'text-gray-500',
        deleted: 'text-rose-500',
    }

    return colors[normalized] ?? 'text-slate-500'
}


/**
 * The `toSlug` function takes a string input, normalizes it, removes accents, converts it to
 * lowercase, trims it, removes special characters, replaces spaces with hyphens, and ensures single
 * hyphens between words to create a slug.
 * @param {string} text - The `text` parameter is a string that represents the text you want to convert
 * into a slug. The function `toSlug` takes this text as input and returns a slug version of the text,
 * which is a URL-friendly version with spaces replaced by hyphens and special characters removed.
 * @returns The `toSlug` function takes a string input, normalizes it by separating letters and
 * accents, removes accents, converts it to lowercase, trims any leading or trailing whitespace,
 * removes special characters, replaces spaces with hyphens, and ensures there are no consecutive
 * hyphens. The function then returns the processed string as a slug, which is a URL-friendly version
 * of the input text.
 */
export function toSlug(text: string): string {
    return text
        .normalize('NFD') // separa letras y acentos
        .replace(/[\u0300-\u036f]/g, '') // elimina acentos
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '') // elimina caracteres especiales
        .replace(/\s+/g, '-') // espacios → guiones
        .replace(/-+/g, '-') // evita guiones dobles
}