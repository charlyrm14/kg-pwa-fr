import type { PaginationContent, Content } from "#imports"

export const MOCK_CONTENT_LIST: PaginationContent<Content> = {
    current_page: 1,
    data: [
        {
            title: "¡Épico! Los 'Dragones' Rompen Récord y Aseguran el Liderato en un Partido No Apto para Cardiacos",
            slug: "epico-los-dragones-rompen-record-y-aseguran-el-liderato-en-un-partido-no-apto-para-cardiacos",
            content: "El capitán anotó un doblete crucial, consolidando la mejor racha invicta del equipo en 30 años.\n\nCiudad Deportiva, 13 de noviembre de 2025 — El Estadio de La Muralla fue testigo anoche de una actuación histórica del equipo local, los 'Dragones', que vencieron por un ajustado marcador de 3-2 a su acérrimo rival, 'El Fénix', asegurando así el liderato de la tabla y extendiendo su racha invicta a 15 partidos consecutivos, un hito que no se veía desde la temporada de 1995.\n\nEl partido comenzó con un ritmo frenético. El Fénix tomó la delantera en el minuto 12 con un golazo de tiro libre, silenciando a la afición local. Sin embargo, la reacción de los Dragones fue inmediata, impulsada por su capitán y figura, Raúl \"El Trueno\" Jiménez .\n\nJiménez igualó el marcador en el minuto 35 tras un cabezazo imparable a pase de Luis Ramos. Ya en la segunda mitad, la presión del Fénix se intensificó, logrando el 2-1 en el minuto 60. Cuando parecía que la racha de los Dragones llegaría a su fin, una jugada magistral en el área permitió a Jiménez conseguir su doblete en el minuto 82, desatando la locura en las gradas.\n\nEl gol de la victoria llegó en el tiempo de descuento (minuto 90+4) gracias a un potente remate de larga distancia del mediocampista juvenil, Ricardo Vega, quien debutaba en un clásico.\n\nEl entrenador, Marcos Soler, declaró al final del encuentro: \"Este equipo tiene corazón. Hemos roto récords, sí, pero lo más importante es que demostramos que la fe y la unidad son más fuertes que cualquier marcador adverso. El camino es largo, pero hoy celebramos este liderato con nuestra gente.\"\n\nEl equipo ahora se prepara para su próximo encuentro como visitante el próximo domingo, buscando extender aún más su impresionante marca.",
            created_at: "2025-11-13",
            updated_at: "2025-11-13",
            author: "AI",
            type: "NEWS",
            status: "PUBLISHED",
            event: null
        },
        {
            title: "Triatlón Copa del Océano 2026",
            slug: "triatlon-copa-del-oceano-2026",
            content: "¡Inscríbete y Desafía tus Límites en el Paraíso Costero!\n\nFecha: Sábado 12 de abril de 2026\nLugar: Playa Esmeralda, Costa del Pacífico\nDistancias: Olímpica (1.5 km Natación / 40 km Ciclismo / 10 km Carrera)\n\nDescripción del Evento:\n\nEl Triatlón Copa del Océano regresa en su tercera edición, ofreciendo una de las rutas más desafiantes y espectaculares del calendario nacional. La competencia se desarrollará en el entorno incomparable de Playa Esmeralda, comenzando con un tramo de natación en aguas cristalinas, seguido por un recorrido en bicicleta con vistas panorámicas a la costa y finalizando con una carrera a pie a lo largo del malecón principal. Este evento es apto para atletas de alto rendimiento y aficionados que buscan superar sus marcas personales.\n\nCategorías de Participación\n\nLas categorías están divididas por sexo y grupos de edad (roll-down):\n\nCategoría\n\nEdad (al 31/12/2026)\n\nJuvenil\n\n18 - 24 años\n\nAdulto A\n\n25 - 34 años\n\nAdulto B\n\n35 - 44 años\n\nMaster\n\n45 - 54 años\n\nGran Master\n\n55 años y más\n\nPremios y Reconocimientos\n\nSe otorgarán premios en metálico y en especie para los tres primeros lugares de la Clasificación General y premios en especie para los tres primeros lugares de cada categoría por edad.\n\nClasificación General (Masculina y Femenina)\n\nPosición\n\nPremio en Efectivo\n\nPatrocinio\n\n1er Lugar\n\n$3,000 USD\n\nKit completo de hidratación y nutrición deportiva\n\n2do Lugar\n\n$1,500 USD\n\nBicicleta de Ruta de Alta Gama\n\n3er Lugar\n\n$750 USD\n\nEstancia de fin de semana en Hotel \"Mar Pacífico\"\n\nPremios por Categoría\n\n1er Lugar: Trofeo conmemorativo y Tarjeta de regalo de $200 USD en tienda de deportes.\n\n2do Lugar: Medalla de reconocimiento y accesorios deportivos (lentes de natación, casco, etc.).\n\n3er Lugar: Medalla de reconocimiento y kit de recuperación muscular.\n\nAdemás: Todos los participantes que crucen la meta recibirán una medalla de finisher de diseño exclusivo y una camiseta técnica del evento.\n\nInscripción\n\nCosto: $150 USD (Incluye chip de cronometraje, kit del atleta, seguro médico y acceso a la zona de recuperación post-carrera).\n\nCierre de inscripciones: 15 de marzo de 2026 o al agotar los 500 cupos disponibles.\n\n¡Te esperamos para superar tus límites!",
            created_at: "2025-11-13",
            updated_at: "2025-11-13",
            author: "Virginia",
            type: "EVENTS",
            status: "PUBLISHED",
            event: {
                location: "King dreams",
                start_date: "2026-04-26",
                start_hour: "09:00",
                end_date: "2026-04-26",
                end_hour: "14:00"
            }
        }
    ],
    last_page: 1,
    links: {
        first: "http://127.0.0.1:8000/api/v1/contents?page=1",
        last: "http://127.0.0.1:8000/api/v1/contents?page=1",
        prev: null,
        next: null
    },
    next_page_url: null,
    per_page: 15,
    prev_page_url: null,
    total: 2
}