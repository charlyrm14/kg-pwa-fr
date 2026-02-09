import type { ApiResponse, SwimCategory } from "#imports";

export const fetchSwimCategoriesApi = async() => {

    const config = useRuntimeConfig();

    return await $fetch<ApiResponse<SwimCategory[]>>(
        `${config.public.apiBaseUrl}/swim-categories`
    )
}