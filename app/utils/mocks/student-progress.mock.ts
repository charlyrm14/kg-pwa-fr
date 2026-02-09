import type { ApiResponse } from "#imports"
import type { StudentProgress } from "#imports"

export const STUDENT_PROGRESS: ApiResponse<StudentProgress> = {
    data: {
        name: "Carlos I",
        last_name: "Ramos",
        mother_last_name: null,
        email: "charlyrm14@gmail.com",
        uuid: "9fc11977-5ee9-4f00-b279-9778797b06c3",
        student_code: null,
        current_level: {
            category_slug: "tortuga",
            category_name: "Tortuga",
            category_description: "¡Ya estás avanzando firme como una tortuga en su travesía! Tu técnica mejora y se nota tu esfuerzo. Sigue con esa constancia, que cada brazada te acerca a tu próxima meta.",
            total_progress: 45,
            total_progress_formatted: "45%",
            completed_level_date: null,
            category_skills: [
                {
                    skill: "Patadas firmes y seguras"
                },
                {
                    skill: "Brazos lentos pero fuertes"
                },
                {
                    skill: "Avanza sin prisa, sin pausa"
                }
            ]
        },
        next_level: {
            category_slug: "mantarraya",
            category_name: "MANTARRAYA",
            category_description: "¡Deslizas en el agua como una mantarraya! Has mejorado mucho tu fluidez y control. Mantén tu concentración y disciplina, vas por excelente camino. ¡Sigue brillando!",
            category_skills: [
                {
                    skill: "Desliza como una sombra"
                },
                {
                    skill: "Controla cada brazada"
                },
                {
                    skill: "Coordinación perfecta"
                }
            ]
        },
        progression_history: [
            {
                category_id: 1,
                category_name: "FOCA",
                category_slug: "foca",
                total_progress: 100
            },
            {
                category_id: 2,
                category_name: "TORTUGA",
                category_slug: "tortuga",
                total_progress: 45
            }
        ]
    }
}