import type { AlertType } from "#imports"

export function getAlertColor(type: AlertType): string {

    const colors: Record<AlertType, string> = {
        success: 'green',
        error: 'red',
        warning: 'amber',
        info: 'blue'
    }

    return colors[type]
}

export function getAlertIcon(type: AlertType): string {
    const icons: Record<AlertType, string> = {
        success: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round" 
                class="lucide lucide-check text-green-500">
                <path d="M20 6 9 17l-5-5"/>
            </svg>
        `,
        warning: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round" 
                class="lucide lucide-triangle-alert text-amber-500">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
                <path d="M12 9v4"/>
                <path d="M12 17h.01"/>
            </svg>
        `,
        error: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round" 
                class="lucide lucide-x text-red-500">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
            </svg>
        `,
        info: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round" 
                class="lucide lucide-info text-blue-500">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
            </svg>
        `
    }

    return icons[type]
}
