import type { ApiResponse, SwimCategory } from '#imports'

export const SWIM_CATEGORIES_LIST: ApiResponse<SwimCategory[]> = {
    data: [
        {
            name: "FOCA",
            slug: "FOCA",
            description: "¡Felicidades por comenzar tu aventura acuática! Como una foca, ya estás ganando confianza en el agua. Sigue practicando y pronto estarás nadando como un experto. ¡Vamos paso a paso!",
            category_skills: [
                {
                    percentage: 20,
                    skill: "Flota como una foca feliz"
                },
                {
                    percentage: 20,
                    skill: "Manos al agua sin miedo"
                },
                {
                    percentage: 20,
                    skill: "Respira y relájate"
                }
            ]
        },
        {
            name: "TORTUGA",
            slug: "TORTUGA",
            description: "¡Ya estás avanzando firme como una tortuga en su travesía! Tu técnica mejora y se nota tu esfuerzo. Sigue con esa constancia, que cada brazada te acerca a tu próxima meta.",
            category_skills: [
                {
                    percentage: 40,
                    skill: "Patadas firmes y seguras"
                },
                {
                    percentage: 40,
                    skill: "Brazos lentos pero fuertes"
                },
                {
                    percentage: 40,
                    skill: "Avanza sin prisa, sin pausa"
                }
            ]
        },
        {
            name: "MANTARRAYA",
            slug: "MANTARRAYA",
            description: "¡Deslizas en el agua como una mantarraya! Has mejorado mucho tu fluidez y control. Mantén tu concentración y disciplina, vas por excelente camino. ¡Sigue brillando!",
            category_skills: [
                {
                    percentage: 60,
                    skill: "Desliza como una sombra"
                },
                {
                    percentage: 60,
                    skill: "Controla cada brazada"
                },
                {
                    percentage: 60,
                    skill: "Coordinación perfecta"
                }
            ]
        },
        {
            name: "PEZ VELA",
            slug: "PEZ-VELA",
            description: "¡Vuelas sobre el agua como un pez vela! Tu velocidad y técnica están en otro nivel. Estás muy cerca de dominarlo todo. Mantén tu energía al máximo, ¡ya casi llegas!",
            category_skills: [
                {
                    percentage: 80,
                    skill: "Velocidad bajo control"
                },
                {
                    percentage: 80,
                    skill: "Potencia en cada vuelta"
                },
                {
                    percentage: 80,
                    skill: "Resistencia como un pro"
                }
            ]
        },
        {
            name: "TIBURÓN",
            slug: "TIBURON",
            description: "¡Eres un tiburón en la piscina! Has llegado al nivel más alto y tu esfuerzo es evidente. Sigue entrenando con pasión, ahora eres un ejemplo para otros nadadores. ¡Orgullo total!",
            category_skills: [
                {
                    percentage: 100,
                    skill: "Nada como un depredador"
                },
                {
                    percentage: 100,
                    skill: "Dominio total del agua"
                },
                {
                    percentage: 100,
                    skill: "Estrategia y potencia"
                }
            ]
        }
    ]
}