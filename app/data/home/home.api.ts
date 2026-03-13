import { authApi } from "../auth/auth.api"

export const fetchHomeOverviewApi = async(): Promise<ApiResponse<HomeUser>> => {
    
    const api = authApi()

    return await api<ApiResponse<HomeUser>>('/overview/user')
}