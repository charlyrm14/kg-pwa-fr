import { useAlert } from "#imports"
import { loginDataSource, logoutDataSource } from "~/data/auth/auth.datasource"

export function useAuth() {

    const { showAlert } = useAlert()

    const user = useState<any | null>('auth:user', () => null)

    const setUser = (data: any) => {
        user.value = data
    }

    const clearUser = () => {
        user.value = null
    }
    
    const login = async(email: string, password: string) => {
        try {

            const response = await loginDataSource(email, password)
            setUser(response.data.user)
            await navigateTo('/')
            showAlert('Éxito', `Bienvenido ${response.data.user.name ?? ''}`, 'success')
            
        } catch (error: any) {
            console.error(error)
            const status = error?.status || error?.statusCode

            if (status === 401) {
                showAlert('Error', 'Credenciales invalidas', 'error')
            }

            if (status === 403) {
                showAlert('Error', 'Password change required', 'error')
            }

        }
    }

    const logout = async() => {
        try {

            await logoutDataSource()
            
        } catch (error) {
            console.error(error)
        } finally {
            clearUser()
            await navigateTo('/login')
        }
    }

    return {
        user,
        setUser,
        clearUser,
        login,
        logout
    }
}