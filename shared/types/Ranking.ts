export interface RankingDetail {
    id: number
    ranking_period_id: number
    total_points: number
    position: number
    detail: RankingUserDetail
}

export interface RankingUserDetail {
    name: string
    last_name: string
    mother_last_name: string | null
}

export interface Ranking {
    id: number
    period_type_id: number
    start_date: string
    end_date: string
    calculated_at: string
    status: string
    created_at: string
    users: RankingDetail [] 
}

export interface RankingResponse {
    data: Ranking[]
}

export interface RankingPeriodFilter {
    period?: string
}

export type TypePeriod = 'diaria' | 'semanal' | 'mensual'| 'trimestral' | 'anual'