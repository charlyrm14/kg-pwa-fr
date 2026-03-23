<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
    import  { 
        useProfile,
        type UserProfilePayload, 
        type UserProfileResponse 
    } from '#imports';
    import { useForm } from 'vee-validate';
    import { aboutMeSchema } from '~/validations/users/update-profile.schema';

    const props = defineProps<{
        user: UserProfileResponse | null
    }>()

    const emit = defineEmits<{
        (e: 'refreshData'): void
    }>()

    const { updateProfile } = useProfile()

    const enableEdit = ref<boolean>(false)
    const isSubmitting = ref<boolean>(false)
    
    const { defineField, handleSubmit, errors } = useForm<UserProfilePayload>({
        initialValues: {
            about_me: props?.user ? props?.user?.profile?.about_me : ''
        },
        validateOnMount: false,
        validationSchema: aboutMeSchema
    })

    const [about_me, about_meAttrs] = defineField('about_me')

    const onSubmit = handleSubmit(async values => {

        isSubmitting.value = true
        try {

            const payload: UserProfilePayload = {
                ...values
            }

            await  updateProfile(payload)
            emit('refreshData')
            
        } catch (error) {
            console.error(error)
        } finally {
            isSubmitting.value = false
            enableEdit.value = false
        }
    })
    
</script>

<template>
    <SectionTitle title="Sobre mí"/>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 shadow mb-4">
        <div class="flex flex-row-reverse justify-between items-start mb-2">
            <button
                type="button"
                v-if="!enableEdit"
                class="bg-gray-100 dark:bg-dark-soft dark:text-gray-400 cursor-pointer hover:opacity-75 rounded-full font-semibold p-2"
                @click.prevent="enableEdit = !enableEdit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
            </button>
            <p v-if="!enableEdit" class="text-gray-800 dark:text-white font-semibold mt-3">
                {{ user?.profile?.about_me ?? 'Agrega una breve descripción sobre tu trayectoria o intereses. Un perfil completo ayuda a los instructores y compañeros a conectar contigo más fácilmente' }}
            </p>
        </div>
        <div v-if="enableEdit">
            <form @submit.prevent="onSubmit">
            <label for="about_me" class="text-gray-400 dark:text-gray-300 font-semibold"> Agrega una descripción sobre tí </label>
                <textarea 
                    name="about_me" 
                    id="about_me"
                    v-model="about_me"
                    v-bind="about_meAttrs"
                    class="w-full bg-gray-200 text-gray-700 dark:bg-dark-soft dark:text-white font-bold rounded-xl p-3 focus:outline-none mt-2 h-30"></textarea>
                <span v-if="errors.about_me" class="text-red-500 text-sm px-2 font-bold"> 
                    {{ errors.about_me  }}
                </span>
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