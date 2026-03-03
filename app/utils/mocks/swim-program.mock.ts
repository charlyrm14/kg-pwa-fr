import type { 
    ApiResponse, 
    Program 
} from "#imports"

export const MOCK_SWIM_PROGRAMS: ApiResponse<Program[]> = {
    data: [
        {
            id: 4,
            name: "Adultos",
            min_age: 18,
            max_age: 99,
            is_sequential: true,
            is_active: true,
            categories: [
                {
                    id: 16,
                    name: "Foca",
                    slug: "foca",
                    description: "Tu inicio en el mundo acuático. Aprendes confianza y técnica básica.",
                    level_order: 1,
                    swim_program_id: 4,
                    skills: [
                        {
                            id: 46,
                            swim_category_id: 16,
                            description: "Flotación básica",
                            skill_order: 1
                        },
                        {
                            id: 47,
                            swim_category_id: 16,
                            description: "Patada inicial",
                            skill_order: 2
                        },
                        {
                            id: 48,
                            swim_category_id: 16,
                            description: "Respiración controlada",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 17,
                    name: "Tortuga",
                    slug: "tortuga",
                    description: "Te desplazas con mayor control y coordinación.",
                    level_order: 2,
                    swim_program_id: 4,
                    skills: [
                        {
                            id: 49,
                            swim_category_id: 17,
                            description: "Coordinación básica completa",
                            skill_order: 1
                        },
                        {
                            id: 50,
                            swim_category_id: 17,
                            description: "Técnica inicial de crol",
                            skill_order: 2
                        },
                        {
                            id: 51,
                            swim_category_id: 17,
                            description: "Resistencia corta",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 18,
                    name: "Mantarraya",
                    slug: "mantarraya",
                    description: "Deslizamiento fluido y mayor dominio técnico.",
                    level_order: 3,
                    swim_program_id: 4,
                    skills: [
                        {
                            id: 52,
                            swim_category_id: 18,
                            description: "Técnica intermedia de crol",
                            skill_order: 1
                        },
                        {
                            id: 53,
                            swim_category_id: 18,
                            description: "Técnica básica de dorso",
                            skill_order: 2
                        },
                        {
                            id: 54,
                            swim_category_id: 18,
                            description: "Resistencia media",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 19,
                    name: "Pez Vela",
                    slug: "pez-vela",
                    description: "Técnica avanzada y mayor velocidad en el agua.",
                    level_order: 4,
                    swim_program_id: 4,
                    skills: [
                        {
                            id: 55,
                            swim_category_id: 19,
                            description: "Dominio avanzado de crol",
                            skill_order: 1
                        },
                        {
                            id: 56,
                            swim_category_id: 19,
                            description: "Virajes eficientes",
                            skill_order: 2
                        },
                        {
                            id: 57,
                            swim_category_id: 19,
                            description: "Resistencia intermedia-alta",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 20,
                    name: "Tiburón",
                    slug: "tiburon",
                    description: "Dominio total del agua. Velocidad, potencia y técnica avanzada.",
                    level_order: 5,
                    swim_program_id: 4,
                    skills: [
                        {
                            id: 58,
                            swim_category_id: 20,
                            description: "Dominio de múltiples estilos",
                            skill_order: 1
                        },
                        {
                            id: 59,
                            swim_category_id: 20,
                            description: "Virajes técnicos",
                            skill_order: 2
                        },
                        {
                            id: 60,
                            swim_category_id: 20,
                            description: "Alta resistencia",
                            skill_order: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "Adolescentes",
            min_age: 13,
            max_age: 17,
            is_sequential: true,
            is_active: true,
            categories: [
                {
                    id: 11,
                    name: "Tritón",
                    slug: "triton",
                    description: "Bases técnicas sólidas con enfoque en eficiencia.",
                    level_order: 1,
                    swim_program_id: 3,
                    skills: [
                        {
                            id: 31,
                            swim_category_id: 11,
                            description: "Técnica depurada de crol",
                            skill_order: 1
                        },
                        {
                            id: 32,
                            swim_category_id: 11,
                            description: "Resistencia media-alta",
                            skill_order: 2
                        },
                        {
                            id: 33,
                            swim_category_id: 11,
                            description: "Coordinación avanzada",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 12,
                    name: "Marlin",
                    slug: "marlin",
                    description: "Tu potencia y técnica avanzan hacia un nivel competitivo.",
                    level_order: 2,
                    swim_program_id: 3,
                    skills: [
                        {
                            id: 34,
                            swim_category_id: 12,
                            description: "Técnica completa en tres estilos",
                            skill_order: 1
                        },
                        {
                            id: 35,
                            swim_category_id: 12,
                            description: "Virajes rápidos",
                            skill_order: 2
                        },
                        {
                            id: 36,
                            swim_category_id: 12,
                            description: "Control de tiempos",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 13,
                    name: "Tiburón Azul",
                    slug: "tiburon-azul",
                    description: "Alto nivel técnico y resistencia sólida.",
                    level_order: 3,
                    swim_program_id: 3,
                    skills: [
                        {
                            id: 37,
                            swim_category_id: 13,
                            description: "Dominio de cuatro estilos",
                            skill_order: 1
                        },
                        {
                            id: 38,
                            swim_category_id: 13,
                            description: "Salidas técnicas",
                            skill_order: 2
                        },
                        {
                            id: 39,
                            swim_category_id: 13,
                            description: "Resistencia avanzada",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 14,
                    name: "Leviatán",
                    slug: "leviatan",
                    description: "Nivel casi competitivo, con gran dominio del agua.",
                    level_order: 4,
                    swim_program_id: 3,
                    skills: [
                        {
                            id: 40,
                            swim_category_id: 14,
                            description: "Estrategia de competencia",
                            skill_order: 1
                        },
                        {
                            id: 41,
                            swim_category_id: 14,
                            description: "Ritmo constante en largas distancias",
                            skill_order: 2
                        },
                        {
                            id: 42,
                            swim_category_id: 14,
                            description: "Técnica refinada",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 15,
                    name: "Poseidón",
                    slug: "poseidon",
                    description: "Máximo nivel juvenil. Técnica, potencia y resistencia en equilibrio.",
                    level_order: 5,
                    swim_program_id: 3,
                    skills: [
                        {
                            id: 43,
                            swim_category_id: 15,
                            description: "Dominio total de estilos",
                            skill_order: 1
                        },
                        {
                            id: 44,
                            swim_category_id: 15,
                            description: "Preparación competitiva",
                            skill_order: 2
                        },
                        {
                            id: 45,
                            swim_category_id: 15,
                            description: "Control físico y técnico completo",
                            skill_order: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Niños",
            min_age: 6,
            max_age: 12,
            is_sequential: true,
            is_active: true,
            categories: [
                {
                    id: 6,
                    name: "Caballito de Mar",
                    slug: "caballito-de-mar",
                    description: "Aprendes técnica básica mientras ganas confianza y resistencia.",
                    level_order: 1,
                    swim_program_id: 2,
                    skills: [
                        {
                            id: 16,
                            swim_category_id: 6,
                            description: "Patada técnica de crol",
                            skill_order: 1
                        },
                        {
                            id: 17,
                            swim_category_id: 6,
                            description: "Respiración lateral básica",
                            skill_order: 2
                        },
                        {
                            id: 18,
                            swim_category_id: 6,
                            description: "Flotación sin asistencia",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 7,
                    name: "Estrella de Mar",
                    slug: "estrella-de-mar",
                    description: "Tu coordinación mejora y comienzas a nadar distancias más largas.",
                    level_order: 2,
                    swim_program_id: 2,
                    skills: [
                        {
                            id: 19,
                            swim_category_id: 7,
                            description: "Coordinación completa en crol",
                            skill_order: 1
                        },
                        {
                            id: 20,
                            swim_category_id: 7,
                            description: "Técnica básica de dorso",
                            skill_order: 2
                        },
                        {
                            id: 21,
                            swim_category_id: 7,
                            description: "Giros simples en pared",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 8,
                    name: "Delfín",
                    slug: "delfin",
                    description: "Tu técnica es cada vez más sólida. Ya dominas más de un estilo.",
                    level_order: 3,
                    swim_program_id: 2,
                    skills: [
                        {
                            id: 22,
                            swim_category_id: 8,
                            description: "Dominio de crol y dorso",
                            skill_order: 1
                        },
                        {
                            id: 23,
                            swim_category_id: 8,
                            description: "Resistencia media",
                            skill_order: 2
                        },
                        {
                            id: 24,
                            swim_category_id: 8,
                            description: "Salidas básicas desde borde",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 9,
                    name: "Barracuda",
                    slug: "barracuda",
                    description: "Velocidad y técnica comienzan a combinarse. Tu control en el agua es notable.",
                    level_order: 4,
                    swim_program_id: 2,
                    skills: [
                        {
                            id: 25,
                            swim_category_id: 9,
                            description: "Técnica intermedia de pecho",
                            skill_order: 1
                        },
                        {
                            id: 26,
                            swim_category_id: 9,
                            description: "Virajes básicos",
                            skill_order: 2
                        },
                        {
                            id: 27,
                            swim_category_id: 9,
                            description: "Control de ritmo en distancia media",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 10,
                    name: "Orca",
                    slug: "orca",
                    description: "Estás listo para entrenamiento avanzado. Tu técnica y resistencia destacan.",
                    level_order: 5,
                    swim_program_id: 2,
                    skills: [
                        {
                            id: 28,
                            swim_category_id: 10,
                            description: "Dominio de tres estilos",
                            skill_order: 1
                        },
                        {
                            id: 29,
                            swim_category_id: 10,
                            description: "Virajes técnicos",
                            skill_order: 2
                        },
                        {
                            id: 30,
                            swim_category_id: 10,
                            description: "Resistencia prolongada",
                            skill_order: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 1,
            name: "Bebés",
            min_age: 0,
            max_age: 5,
            is_sequential: true,
            is_active: true,
            categories: [
                {
                    id: 1,
                    name: "Pollito de Agua",
                    slug: "pollito-de-agua",
                    description: "¡Tus primeros pasos en el agua! Empiezas a sentir confianza y a descubrir lo divertido que puede ser nadar.",
                    level_order: 1,
                    swim_program_id: 1,
                    skills: [
                        {
                            id: 1,
                            swim_category_id: 1,
                            description: "Adaptación básica al agua",
                            skill_order: 1
                        },
                        {
                            id: 2,
                            swim_category_id: 1,
                            description: "Control de respiración inicial",
                            skill_order: 2
                        },
                        {
                            id: 3,
                            swim_category_id: 1,
                            description: "Flotación asistida",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Pececillo",
                    slug: "pececillo",
                    description: "Ya te mueves con más seguridad. Comienzas a flotar y desplazarte con ayuda mínima.",
                    level_order: 2,
                    swim_program_id: 1,
                    skills: [
                        {
                            id: 4,
                            swim_category_id: 2,
                            description: "Flotación dorsal y ventral",
                            skill_order: 1
                        },
                        {
                            id: 5,
                            swim_category_id: 2,
                            description: "Patada básica con apoyo",
                            skill_order: 2
                        },
                        {
                            id: 6,
                            swim_category_id: 2,
                            description: "Inmersión corta controlada",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Patito",
                    slug: "patito",
                    description: "¡Cada vez más independiente! Te desplazas pequeñas distancias sin miedo.",
                    level_order: 3,
                    swim_program_id: 1,
                    skills: [
                        {
                            id: 7,
                            swim_category_id: 3,
                            description: "Desplazamiento corto sin apoyo",
                            skill_order: 1
                        },
                        {
                            id: 8,
                            swim_category_id: 3,
                            description: "Coordinación básica brazos-piernas",
                            skill_order: 2
                        },
                        {
                            id: 9,
                            swim_category_id: 3,
                            description: "Entrada segura al agua",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 4,
                    name: "Tortuguita",
                    slug: "tortuguita",
                    description: "Te mueves con calma y seguridad. Tu equilibrio y control mejoran en cada clase.",
                    level_order: 4,
                    swim_program_id: 1,
                    skills: [
                        {
                            id: 10,
                            swim_category_id: 4,
                            description: "Flotación prolongada",
                            skill_order: 1
                        },
                        {
                            id: 11,
                            swim_category_id: 4,
                            description: "Patada constante sin asistencia",
                            skill_order: 2
                        },
                        {
                            id: 12,
                            swim_category_id: 4,
                            description: "Control respiratorio rítmico",
                            skill_order: 3
                        }
                    ]
                },
                {
                    id: 5,
                    name: "Delfincito",
                    slug: "delfincito",
                    description: "¡Listo para el siguiente nivel! Tu confianza y control te preparan para el programa infantil.",
                    level_order: 5,
                    swim_program_id: 1,
                    skills: [
                        {
                            id: 13,
                            swim_category_id: 5,
                            description: "Desplazamiento autónomo continuo",
                            skill_order: 1
                        },
                        {
                            id: 14,
                            swim_category_id: 5,
                            description: "Coordinación básica de crol",
                            skill_order: 2
                        },
                        {
                            id: 15,
                            swim_category_id: 5,
                            description: "Seguridad total en el agua",
                            skill_order: 3
                        }
                    ]
                }
            ]
        }
    ]
}