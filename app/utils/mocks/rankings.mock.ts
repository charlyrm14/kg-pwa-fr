import type { ApiResponse, RankingResponse } from "#imports"

export const MOCK_RANKINGS_WEEKLY: ApiResponse<RankingResponse> = {
    data: {
        data: [
            {
                id: 1,
                period_type_id: 2,
                start_date: "2026-01-12",
                end_date: "2026-01-18",
                calculated_at: "2026-01-14 18:33:38",
                status: "published",
                created_at: "2026-01-14",
                users: [
                    {
                        id: 1,
                        ranking_period_id: 1,
                        total_points: 1900,
                        position: 1,
                        detail: {
                            name: "Valentina E",
                            last_name: "Hérnandez",
                            mother_last_name: null
                        }
                    },
                    {
                        id: 2,
                        ranking_period_id: 1,
                        total_points: 1600,
                        position: 2,
                        detail: {
                            name: "Héctor A",
                            last_name: "Hérnandez",
                            mother_last_name: null
                        }
                    },
                    {
                        id: 3,
                        ranking_period_id: 1,
                        total_points: 1200,
                        position: 3,
                        detail: {
                            name: "Cintia",
                            last_name: "Alcaide",
                            mother_last_name: null
                        }
                    },
                    {
                        id: 4,
                        ranking_period_id: 1,
                        total_points: 1000,
                        position: 4,
                        detail: {
                            name: "Azucena",
                            last_name: "Saldaña",
                            mother_last_name: null
                        }
                    },
                    {
                        id: 5,
                        ranking_period_id: 1,
                        total_points: 900,
                        position: 5,
                        detail: {
                            name: "Antonio",
                            last_name: "Aliaga",
                            mother_last_name: null
                        }
                    },
                    {
                        id: 6,
                        ranking_period_id: 1,
                        total_points: 700,
                        position: 6,
                        detail: {
                            name: "Eliseo",
                            last_name: "Morillo",
                            mother_last_name: null
                        }
                    },
                ]
            }
        ]
    }
}