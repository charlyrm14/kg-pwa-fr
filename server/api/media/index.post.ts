export default defineEventHandler(async(event) => {

    const body = await readBody(event)
    const config = useRuntimeConfig();

    try {

        return await $fetch(`${config.public.apiBaseUrl}/media`, {
            method: 'POST',
            body
        })
        
    } catch (error) {
        
        console.error(error)
    }
});
