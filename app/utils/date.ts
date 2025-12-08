import type { Months, WeekDay } from '~~/shared/types/Dates'

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

