export type AlertType = 'success' | 'error' | 'warning' | 'info'

export interface Alert {
    title: string
    description: string
    type: AlertType
    status: boolean
}