import { authMeDataSource } from "~/data/auth/auth.datasource";
import { useAuth } from "#imports";

export default defineNuxtPlugin(async () => {

    const route = useRoute()

    if (route.path === '/login') return

    const { user, setUser } = useAuth()

    const initialized = useState('auth:initialized', () => false)

    if (initialized.value) return

    try {
        const response = await authMeDataSource()

        if (response?.data?.user) {
            setUser(response.data.user)
        }

    } catch (error) {
        console.error(error)
        // no hay sesión activa
        user.value = null
    }
})