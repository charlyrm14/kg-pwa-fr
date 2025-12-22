import type { Months, WeekDay, MonthItem } from '~~/shared/types/Dates'

/**
 * The function `currentFormattedDateMonthDay` returns the current month and day in Spanish format.
 * @returns The function `currentFormattedDateMonthDay` returns a string in the format "Month, Day"
 * where Month is the current month in Spanish and Day is the current day of the month.
 */
export const currentFormattedDateMonthDay = (): string => {
    const date = new Date();

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const currentMonth = months[date.getMonth()] as Months;
    const day = date.getDate();

    return `${currentMonth}, ${day}` as string
} 

/**
 * The function `currentMonth` returns the current month and year in Spanish.
 * @returns The function `currentMonth` returns a string representing the current month and year in
 * Spanish format, for example, "Septiembre 2022".
 */
export const currentMonth = (): string => {
    const date = new Date();

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const currentMonth = months[date.getMonth()] as Months;
    const currentYear = date.getFullYear();

    return `${currentMonth} ${currentYear}` as string
}

/**
 * The function `daysByCurrentWeek` returns an array of objects representing the days of the current
 * week with their corresponding day names, shortenings, and dates.
 * @returns The function `daysByCurrentWeek` returns an array of objects representing the days of the
 * current week. Each object contains the following properties:
 * - `day_id`: The ID of the day (1 for Monday, 2 for Tuesday, and so on).
 * - `day`: The full name of the day (e.g., "Lunes", "Martes").
 * - `shortening`: The
 */
export const daysByCurrentWeek = (): WeekDay[] => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const daysOfWeek = [
        { day_id: 1, day: 'Lunes', shortening: 'L' },
        { day_id: 2, day: 'Martes', shortening: 'M' },
        { day_id: 3, day: 'Miércoles', shortening: 'M' },
        { day_id: 4, day: 'Jueves', shortening: 'J' },
        { day_id: 5, day: 'Viernes', shortening: 'V' },
        { day_id: 6, day: 'Sábado', shortening: 'S' },
        { day_id: 7, day: 'Domingo', shortening: 'D' }
    ]

    // Día de la semana (0 = domingo, 1 = lunes...)
    const currentWeekDay = today.getDay();

    // Convertir domingo (0) en 7
    const normalized = currentWeekDay === 0 ? 7 : currentWeekDay;

    // Obtiene fecha del lunes de la semana en curso
    const mondayDate = today.getDate() - (normalized - 1);

    const result: WeekDay[] = [];

    for (let i = 0; i < 7; i++) {
        const d = new Date(year, month, mondayDate + i);

        const dayInfo = daysOfWeek[i];
        if (!dayInfo) continue;

        // Filtra solo los días que pertenezcan al mes actual
        result.push({
            day_id: dayInfo.day_id,
            day: dayInfo.day,
            shortening: dayInfo.shortening,
            date: d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`,
            assigned: false
        });
    }

    return result;
}

/**
 * The function `currentMonthsOfYear` returns an array of objects representing the months of the
 * current year up to the current month in Spanish.
 * @returns An array of objects representing the months of the current year up to the current month.
 * Each object has properties `id` (index + 1), `month` (name of the month), and `year` (current year).
 * The array is sorted in reverse order.
 */
export const currentMonthsOfYear = (): MonthItem[] => {

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]

    const date = new Date()

    return months
    .slice(0, date.getMonth() + 1)
    .map((month, index) => ({
        id: index + 1,
        month: month,
        year: date.getFullYear()
    })).reverse()
}

/**
 * The function `getTodayDate` returns the current date in the format "YYYY-MM-DD".
 * @returns The function `getTodayDate` returns the current date in the format "YYYY-MM-DD".
 */
export function getTodayDate(): string {
    const today = new Date()

    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}

/**
 * The function `extractHourMinutes` extracts and returns the time in HH:mm format from a given
 * date-time string.
 * @param {string} dateTime - The `dateTime` parameter is a string representing a date and time in the
 * format "YYYY-MM-DD HH:mm:ss".
 * @returns The function `extractHourMinutes` takes a `dateTime` string as input, extracts the time
 * part (HH:mm) from it, and returns the extracted time as a string if it is in the correct format
 * (HH:mm). If the input `dateTime` is invalid or does not contain a valid time format, the function
 * returns `null`.
 */
export function extractHourMinutes(dateTime: string): string | null {
    if (!dateTime) return null

    const parts = dateTime.split(' ')
    if (parts.length !== 2) return null

    const time = parts[1] ?? '00:00'

    // Validación básica HH:mm
    const timeRegex = /^\d{2}:\d{2}$/
    if (!timeRegex.test(time)) return null

    return time
}