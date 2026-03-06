import type { 
    ApiResponse, 
    Program 
} from "#imports"

export const fetchSwimProgramApi = async(): Promise<ApiResponse<Program[]>> => {
    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<Program[]>>(
        `${config.public.apiBaseUrl}/swim-programs`
    )
}