import type { Alert, AlertType } from '~~/shared/types/Alert'

export function useAlert () {

    const alert = useState<Alert>('global-alert', () => ({
        title: '',
        description: '',
        type: 'success',
        status: false
    }))

    const showAlert = (title: string, description: string, alertType: AlertType = 'success') => {
        alert.value.title = title,
        alert.value.description = description,
        alert.value.type = alertType,
        alert.value.status = true
        setTimeout(() => {
            resetAlert()
        }, 3000);
    }

    const closeAlert = () => {
        resetAlert()
    }

    const resetAlert = () => {
        alert.value.title = '',
        alert.value.description = '',
        alert.value.type = 'success',
        alert.value.status = false
    }

    return {
        alert,
        showAlert,
        closeAlert
    }
}