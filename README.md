
# KG Swimming School – Frontend

Aplicación frontend para la gestión de una escuela de natación.

# Tecnologías utilizadas

Este proyecto está construido con las siguientes tecnologías:

- Nuxt 4 – Framework de aplicación
- Vue 3 – Composition API
- TypeScript – Tipado estático
- Pinia – Manejo de estado global
- Tailwind CSS
- Vee Validate + Yup – Validación de formularios
- GSAP (v-gsap-nuxt) – Animaciones

# Objetivo del proyecto

El objetivo principal de esta aplicación es:

- Gestionar alumnos, asistencias, horarios y perfiles
- Proveer un dashboard administrativo claro y responsivo
- Simular el comportamiento de una aplicación real mediante datos mock
- Implementar un sistema de ranking para alumnos basado en métricas definidas por la escuela (asistencia, progreso, logros, etc.)
- Registrar y consultar el historial de pagos de los alumnos (sin integración con pasarelas de pago). El sistema se enfoca únicamente en el registro administrativo y seguimiento de pagos, no en el procesamiento de transacciones en línea.
- Servir como proyecto de portafolio, con planes futuros de ofrecerse como solución real para una escuela de natación

# Modo Mock (Datos simulados)

⚠️ Nota importante

Este frontend soporta dos modos de obtención de datos:

- Modo Mock (por defecto en producción / demo)
- Modo API (backend local)

# Manejo de estado

El manejo de estado se realiza con Pinia, siguiendo los siguientes principios:

- Stores modulares (usuarios, asistencias, horarios, etc.)
- Lógica centralizada para API / Mock
- Uso de TypeScript para tipado fuerte
- Separación clara entre lógica de negocio y componentes de UI

# Formularios y validación

Los formularios están construidos utilizando:

- Vee Validate
- Yup

Esto permite:

- Validaciones declarativas
- Reglas reutilizables
- Manejo de errores
- Datos de formulario tipados

# UI y Animaciones

Tailwind CSS se utiliza para diseño, layout, responsividad y tematización

GSAP (v-gsap-nuxt) se utiliza para:

- Transiciones de modales
- Micro-interacciones
- Mejora de la experiencia de usuario

La interfaz es completamente responsive, optimizada para móviles y escritorio.

# Backend (solo entorno local)

Este frontend está diseñado para integrarse con un backend desarrollado en Laravel, el cual actualmente funciona únicamente en entornos locales.

👉 Repositorio del backend:
🔗 https://github.com/charlyrm14/kg-pwa-bk

# Instalación y ejecución

Instalar dependencias

`npm install`

Ejecutar en modo desarrollo

`npm run dev`

Variables de entorno

- NUXT_PUBLIC_MOCK_API_MODE=true
- NUXT_PUBLIC_TOKEN_ACCESS_NAME=auth-token
- NUXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api/v1
- NUXT_USER_TEST_UUID=771f8eb5-a52e-40e4-af21-af947bf76048


# Autor

Carlos I. Ramos Morales

Desarrollador Full Stack