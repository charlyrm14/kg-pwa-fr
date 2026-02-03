import type { UserProfileGeneralInfo } from "~~/shared/types/User";

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig();

    try {

        return await $fetch<UserProfileGeneralInfo>(
            `${config.public.apiBaseUrl}/profile`, 
            {
                method: 'PUT',
            }
        )
        
    } catch (error) {
        console.error(error)
        throw error
    }
});
