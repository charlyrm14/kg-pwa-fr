import { useAuth } from "#imports"

export default defineNuxtRouteMiddleware(async() => {

    const { user } = useAuth()
    
    const initialized = useState<boolean>('auth:initialized')

    if (!initialized.value) return

    if (!user.value) {
        return navigateTo('/login')
    }
})