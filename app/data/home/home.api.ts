export const fetchHomeOverviewApi = async(): Promise<ApiResponse<HomeUser>> => {
    
    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<HomeUser>>(
        `${config.public.apiBaseUrl}/overview/user`
    )
}