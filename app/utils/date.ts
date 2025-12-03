type Months = 'Enero' | 'Febrero' | 'Marzo' | 'Abril' | 'Mayo' | 'Junio' | 'Julio' | 'Agosto' | 'Septiembre' | 'Octubre' | 'Noviembre' |'Diciembre'

export const currentFormattedDateMonthDay = (): Months => {
    const date = new Date();

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const currentMonth = months[date.getMonth()] as Months;
    const day = date.getDate();

    return `${currentMonth}, ${day}` as Months
} 