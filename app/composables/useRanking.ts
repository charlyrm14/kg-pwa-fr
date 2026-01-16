import { fetchRankingData } from "~/data/ranking/ranking.datasource"
import type { RankingPeriodFilter } from "~~/shared/types/Ranking"

export function useRanking () {

    const fetchRanking = async(filters: RankingPeriodFilter = {}) => {
        try {
            return await fetchRankingData(filters)

        } catch (error) {
            console.error(error)
        }
    }

    return {
        fetchRanking
    }
}
