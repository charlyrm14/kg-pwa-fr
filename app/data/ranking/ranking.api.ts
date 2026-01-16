import type { ApiResponse, RankingResponse, RankingPeriodFilter } from "#imports"

export const fetchRankingApi = async(filters: RankingPeriodFilter = {}) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<RankingResponse>>(
        `${config.public.apiBaseUrl}/rankings`, {
            params: filters
        }
    )
}