<script setup lang="ts">
    import SectionTitle from '../shared/SectionTitle.vue';
    import { 
        type UpdateUserPayload, 
        type UserProfileResponse, 
    } from '#imports';
    import { useForm } from 'vee-validate';
    import { usernameSchema } from '~/validations/users/update-user-schema';
    import { useUserStore } from '~/stores/users';

    const props = defineProps<{
        user: UserProfileResponse | null
    }>()

    const emit = defineEmits<{
        (e: 'refreshData'): void
    }>()

    const userStore = useUserStore()

    const enableEdit = ref<boolean>(false)
    const isSubmitting = ref<boolean>(false)

    const { handleSubmit, errors, defineField } = useForm({
        initialValues: {
            username: props?.user ? props?.user?.username : ''
        },
        validateOnMount: false,
        validationSchema: usernameSchema
    })

    const [ username, usernameAttrs] = defineField('username');

    const onSubmit =  handleSubmit(async values => {
        if(!props.user || !props?.user?.profile?.birthdate) return

        isSubmitting.value = true

        try {

            const payload: UpdateUserPayload = {
                ...values,
                name: props?.user?.name,
                last_name: props?.user?.last_name,
                mother_last_name: props?.user?.mother_last_name,
                email: props?.user?.email,
                birthdate: props?.user?.profile?.birthdate 
            }
            
            await userStore?.update(props?.user?.uuid, payload)
            emit('refreshData')

        } catch(error) {
            console.error(error)
        } finally {
            isSubmitting.value = false
            enableEdit.value = false
        }
    })
    
</script>

<template>
    <SectionTitle title="Nombre de usuario"/>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 shadow mb-3">
        <div v-if="!enableEdit">
            <div class="flex justify-between items-center">
                <div class="flex justify-between items-center text-blue-500 gap-x-1">
                    <svg v-if="user?.username" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-at-sign-icon lucide-at-sign"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                    <p class="text-blue-500 font-bold text-base md:text-xl">
                        {{ user?.username ?? 'Agrega tú nombre de usuario' }}
                    </p>
                </div>
                <button 
                    type="button"
                    class="bg-gray-100 dark:bg-dark-soft dark:text-gray-400 cursor-pointer hover:opacity-75 rounded-full p-2"
                    @click.prevent="enableEdit = !enableEdit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                </button>
            </div>
        </div>
        <div v-else>
            <form @submit.prevent="onSubmit">
                <div>
                    <label for="username" class="text-gray-400 dark:text-gray-300 font-semibold"> Nombre de usuario </label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        v-model="username"
                        v-bind="usernameAttrs"
                        class="w-full bg-gray-200 text-gray-700 dark:bg-dark-soft dark:text-white font-bold rounded-xl p-3 focus:outline-none mt-2 px-3 py-2 dark:[color-scheme:dark]">
                    <span v-if="errors.username" class="text-red-500 text-sm px-2 font-bold"> 
                        {{ errors.username  }}
                    </span>
                </div>
                <div class="flex justify-end items-center gap-x-4 mt-3">
                    <button 
                        type="button"
                        class="bg-gray-200 text-gray-500 dark:bg-dark-light dark:text-gray-400 px-3 py-2 font-semibold rounded-full cursor-pointer hover:text-red-500 hover:opacity-75"
                        @click.prevent="enableEdit = !enableEdit">
                            Cancelar
                    </button>
                    <button 
                        type="submit"
                        :disabled="isSubmitting"
                        class=" text-white font-semibold px-3 py-2 rounded-full hover:opacity-75"
                        :class="isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 cursor-pointer'">
                            {{ isSubmitting ? 'Guardando' : 'Guardar' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
