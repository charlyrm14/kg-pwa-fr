import { ApiResponse } from "~~/shared/types/ApiResponse";

export default defineEventHandler(async(event) => {

    const slug = event.context.params?.typeSlug as string;
    const config = useRuntimeConfig()

    if (!slug) {
        throw createError({ 
            statusCode: 404, 
            statusMessage: 'slug is required' 
        });
    }

    try {

        return await $fetch<ApiResponse<Content>>(
            `${config.public.apiBaseUrl}/contents/${slug}`
        )

    } catch (error: any) {

        if (error?.statusCode === 404) {
            throw createError({ 
                statusCode: 404, 
                statusMessage: `Es posible que la pagina que estas buscando haya sido eliminada, haya cambiado de nombre o no esté disponible temporalmente..`
            });
        }

        throw error;
    }
})