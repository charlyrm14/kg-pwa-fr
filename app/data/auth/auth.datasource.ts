import { authMeApi, loginApi, logoutApi } from "./auth.api"

export const authMeDataSource = async() => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return {
            data: {
                user: {
                    name: 'Mock User',
                    last_name: 'User',
                    mother_last_name: null,
                    email: 'mock@email.com',
                    force_password_change: false,
                    uuid: 'mock-uuid',
                    student_code: 'MOCK-001',
                    role: 'Estudiante'
                }
            }
        }
    }

    return authMeApi()
}

export const loginDataSource = (email: string, password: string) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return {
            data: {
                user: {
                name: 'Mock User',
                last_name: 'User',
                mother_last_name: null,
                email,
                force_password_change: false,
                uuid: 'mock-uuid',
                student_code: 'MOCK-001',
                role: 'Estudiante'
                }
            }
        }
    }

    return loginApi(email, password)
}

export const logoutDataSource = async() => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return { success: true }
    }

    return logoutApi()
}