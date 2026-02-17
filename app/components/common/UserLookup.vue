<script setup lang="ts">
    import { userLookupEmailSchema } from '~/validations/users/user-lookup-email'
    import type { UserFilters, User } from '#imports'
    import { useForm } from 'vee-validate'
    import { useUserStore } from '~/stores/users'

    const userStore = useUserStore()

    const { defineField,  handleSubmit,  errors} = useForm<UserFilters>({
        validationSchema: userLookupEmailSchema,
        validateOnMount: false
    })

    const [ email, emailAttrs ] = defineField('email')

    const onSearchSubmit = handleSubmit(async ({email}) => {
        if(!email) return

        try {
            await userStore?.fetchUserLookUp({email}) 
        
        } catch (error) {
            console.error(error)
            userStore.userLookUp = null
        }
    })

    const clearSearch = () => {
        userStore.userLookUp = null
        userStore.errorsUserLookUp.type = 'default'
        userStore.errorsUserLookUp.message = ''
    }
    
</script>

<template>
    <div class="space-y-3 mb-3 bg-gray-200 dark:bg-dark-extralight p-2 rounded-xl">
        <p class="text-gray-500 dark:text-gray-400 font-bold"> Buscar por correo electrónico </p>
        <form @submit.prevent="onSearchSubmit">
            <div class="grid grid-cols-[1fr_auto] gap-2 mt-2">
                <div>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Ej: correo@correo.com"
                        v-model="email"
                        v-bind="emailAttrs"
                        class="w-full rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight dark:text-gray-400 text-base md:text-sm focus:outline-none focus:ring-none p-3">
                    <span v-if="errors.email" class="text-red-500 text-sm px-2 py-0 font-bold m-0"> 
                        {{ errors.email  }}
                    </span>
                </div>
                <button 
                    type="submit"
                    class="bg-pink-500 text-white rounded-xl p-3 sm:px-4 flex items-center justify-center cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="m21 21-4.34-4.34"/>
                            <circle cx="11" cy="11" r="8"/>
                        </svg>
                </button>
            </div>
        </form>
        <div>
            <p 
                class="font-bold text-sm mb-2 px-2"
                :class="userStore.errorsUserLookUp.type === 'not-found' ? 'text-red-500' : 'text-blue-500'"> {{ userStore.errorsUserLookUp.message }} </p>
            <div
                v-if="userStore.userLookUp"
                class="bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-light rounded-xl flex justify-between items-start p-2">
                <div class="flex justify-between items-center gap-x-2">
                    <div class="bg-gray-200 dark:bg-dark-extralight rounded-xl p-2 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <p class="font-bold dark:text-white"> 
                        {{ userStore.userLookUp?.name }} {{ userStore.userLookUp?.last_name }}
                            <span class="block text-sm text-gray-500 dark:text-gray-300 font-normal"> {{ userStore.userLookUp?.email }} </span>
                    </p>
                </div>
                <button 
                    class="text-gray-500 cursor-pointer hover:text-red-500"
                    @click.prevent="clearSearch">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
        </div>
    </div>
</template>