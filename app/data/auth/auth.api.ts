import { 
    type ApiResponse, 
    type AuthUser 
} from "#imports"

export const authApi = () => {

    const config = useRuntimeConfig()

    return $fetch.create({
        baseURL: config.public.apiBaseUrl,
        credentials: 'include',
        mode: 'cors',
        headers: {
            Accept: 'application/json'
        },
        onResponseError({ response }) {
            if (response.status === 401) {
                const user = useState<AuthUser | null>('auth:user')
                user.value = null
            }
        }
    })
}

export const loginApi = async(email: string, password: string) => {

    const api = authApi()

    return api<ApiResponse<AuthUser>>('/auth/login', {
            method: 'POST',
            body: { email, password }
        }
    )
}

export const authMeApi = async(): Promise<ApiResponse<AuthUser>> => {

    const api = authApi()

    return await api<ApiResponse<AuthUser>>('/auth/me')
}

export const logoutApi = async() => {

    const api = authApi()

    return await api('/auth/logout', {
            method: 'POST',
        }
    )
}