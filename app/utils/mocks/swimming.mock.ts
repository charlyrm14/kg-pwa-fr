import type { ApiResponse, SwimCategory } from '#imports'

export const SWIM_CATEGORIES_LIST: ApiResponse<SwimCategory[]> = {
    data: [
        {
            name: "Foca",
            slug: "foca",
            description: "¡Felicidades por comenzar tu aventura acuática! Como una foca, ya estás ganando confianza en el agua. Sigue practicando y pronto estarás nadando como un experto. ¡Vamos paso a paso!",
            category_skills: [
                {
                    skill: "Flota como una foca feliz"
                },
                {
                    skill: "Manos al agua sin miedo"
                },
                {
                    skill: "Respira y relájate"
                }
            ]
        },
        {
            name: "Tortuga",
            slug: "tortuga",
            description: "¡Ya estás avanzando firme como una tortuga en su travesía! Tu técnica mejora y se nota tu esfuerzo. Sigue con esa constancia, que cada brazada te acerca a tu próxima meta.",
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
        {
            name: "Mantarraya",
            slug: "mantarraya",
            description: "¡Deslizas en el agua como una mantarraya! Has mejorado mucho tu fluidez y control. Mantén tu concentración y disciplina, vas por excelente camino. ¡Sigue brillando!",
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
        {
            name: "Pez vela",
            slug: "Pez-vela",
            description: "¡Vuelas sobre el agua como un pez vela! Tu velocidad y técnica están en otro nivel. Estás muy cerca de dominarlo todo. Mantén tu energía al máximo, ¡ya casi llegas!",
            category_skills: [
                {
                    skill: "Velocidad bajo control"
                },
                {
                    skill: "Potencia en cada vuelta"
                },
                {
                    skill: "Resistencia como un pro"
                }
            ]
        },
        {
            name: "Tiburón",
            slug: "tiburon",
            description: "¡Eres un tiburón en la piscina! Has llegado al nivel más alto y tu esfuerzo es evidente. Sigue entrenando con pasión, ahora eres un ejemplo para otros nadadores. ¡Orgullo total!",
            category_skills: [
                {
                    skill: "Nada como un depredador"
                },
                {
                    skill: "Dominio total del agua"
                },
                {
                    skill: "Estrategia y potencia"
                }
            ]
        }
    ]
}