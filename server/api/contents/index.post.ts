import type { ApiResponse } from "~~/shared/types/ApiResponse";
import type { CreateContentPayload } from "~~/shared/types/Content";

export default defineEventHandler(async(event) => {

    const body = await readBody<CreateContentPayload>(event)
    const config = useRuntimeConfig();

    try {

        return await $fetch<ApiResponse<CreateContentPayload>>(`${config.public.apiBaseUrl}/contents`, {
            method: 'POST',
            body
        })
        
    } catch (error) {
        
        console.error(error)
    }
});
