export type Months = 'Enero' | 'Febrero' | 'Marzo' | 'Abril' | 'Mayo' | 'Junio' | 'Julio' | 'Agosto' | 'Septiembre' | 'Octubre' | 'Noviembre' |'Diciembre'

export type WeekDay = {
    day_id: number
    day: string
    shortening: string
    date: string
    assigned: boolean
}

export interface MonthItem {
    id: number
    month: string
    year: number
}