export const MOCK_STUDENT_PROGRAM_PROGRESS: ApiResponse<StudentProgram> = {
    data: {
        user: {
            name: "Valentina E",
            last_name: "Hérnandez",
            mother_last_name: null,
            email: "vhernandezkg@gmail.com",
            uuid: "018cc99f-a5ee-4db5-93f8-6ea45fd35d2d",
            student_code: "STU-20260226-5065"
        },
        completed_levels_count: 1,
        program: {
            id: 2,
            name: "Niños",
            min_age: 6,
            max_age: 12
        },
        current_level: {
            category_id: 7,
            category_name: "Estrella de Mar",
            category_slug: "estrella-de-mar",
            category_description: "Tu coordinación mejora y comienzas a nadar distancias más largas.",
            progress_percentage: 0,
            skills_completed: 0,
            skills_total: 3,
            started_at: "2026-02-27",
            completed_at: null
        },
        next_level: {
            category_id: 8,
            category_name: "Delfín",
            category_slug: "delfin",
            category_description: "Tu técnica es cada vez más sólida. Ya dominas más de un estilo."
        },
        progression_history: [
            {
                category_id: 6,
                category_name: "Caballito de Mar",
                category_slug: "caballito-de-mar",
                category_description: "Aprendes técnica básica mientras ganas confianza y resistencia.",
                progress_percentage: 100,
                is_completed: true,
                is_current: false,
                skills_completed: 3,
                skills_total: 3,
                started_at: "2026-02-26",
                completed_at: "2026-02-27",
                skills: [
                    {
                        skill_progress_id: 10,
                        skill_id: 16,
                        skill_description: "Patada técnica de crol",
                        skill_order: 1,
                        skill_progress_percentage: 100,
                        skill_progress_completed_at: "2026-02-26 23:52:14"
                    },
                    {
                        skill_progress_id: 12,
                        skill_id: 18,
                        skill_description: "Flotación sin asistencia",
                        skill_order: 3,
                        skill_progress_percentage: 100,
                        skill_progress_completed_at: "2026-02-27 11:53:02"
                    },
                    {
                        skill_progress_id: 11,
                        skill_id: 17,
                        skill_description: "Respiración lateral básica",
                        skill_order: 2,
                        skill_progress_percentage: 100,
                        skill_progress_completed_at: "2026-02-27 12:06:27"
                    }
                ]
            },
            {
                category_id: 7,
                category_name: "Estrella de Mar",
                category_slug: "estrella-de-mar",
                category_description: "Tu coordinación mejora y comienzas a nadar distancias más largas.",
                progress_percentage: 0,
                is_completed: false,
                is_current: true,
                skills_completed: 0,
                skills_total: 3,
                started_at: "2026-02-27",
                completed_at: null,
                skills: [
                    {
                        skill_progress_id: 13,
                        skill_id: 19,
                        skill_description: "Coordinación completa en crol",
                        skill_order: 1,
                        skill_progress_percentage: 0,
                        skill_progress_completed_at: null
                    },
                    {
                        skill_progress_id: 14,
                        skill_id: 20,
                        skill_description: "Técnica básica de dorso",
                        skill_order: 2,
                        skill_progress_percentage: 100,
                        skill_progress_completed_at: null
                    },
                    {
                        skill_progress_id: 15,
                        skill_id: 21,
                        skill_description: "Giros simples en pared",
                        skill_order: 3,
                        skill_progress_percentage: 0,
                        skill_progress_completed_at: null
                    }
                ]
            }
        ]
    }
}