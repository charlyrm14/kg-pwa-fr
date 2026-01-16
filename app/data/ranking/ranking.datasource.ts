import { fetchRankingApi } from "./ranking.api"
import type { ApiResponse, RankingResponse, RankingPeriodFilter } from "#imports"
import { MOCK_RANKINGS_WEEKLY } from "~/utils/mocks/rankings.mock"

export const fetchRankingData = async(filters: RankingPeriodFilter = {}): Promise<ApiResponse<RankingResponse>> => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_RANKINGS_WEEKLY
    }

    return fetchRankingApi(filters)
}