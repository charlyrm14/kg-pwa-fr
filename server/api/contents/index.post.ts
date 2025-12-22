import type { ApiResponse } from "~~/shared/types/ApiResponse";
import type { NewEventContent } from "~~/shared/types/Content";
import type { ContentCreated } from "~~/shared/types/Content";

export default defineEventHandler(async(event) => {

    const body = await readBody<NewEventContent>(event)
    const config = useRuntimeConfig();

    try {

        return await $fetch<ApiResponse<ContentCreated>>(`${config.public.apiBaseUrl}/contents`, {
            method: 'POST',
            body
        })
        
    } catch (error) {
        
        console.error(error)
    }
});
