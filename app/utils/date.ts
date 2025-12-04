type Months = 'Enero' | 'Febrero' | 'Marzo' | 'Abril' | 'Mayo' | 'Junio' | 'Julio' | 'Agosto' | 'Septiembre' | 'Octubre' | 'Noviembre' |'Diciembre'
type WeekDay = {
    day_id: number
    day: string
    shortening: string
    date: string
    assigned: boolean
}

export const currentFormattedDateMonthDay = (): string => {
    const date = new Date();

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const currentMonth = months[date.getMonth()] as Months;
    const day = date.getDate();

    return `${currentMonth}, ${day}` as string
} 

export const currentMonth = (): string => {
    const date = new Date();

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const currentMonth = months[date.getMonth()] as Months;
    const currentYear = date.getFullYear();

    return `${currentMonth} ${currentYear}` as string
}

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

