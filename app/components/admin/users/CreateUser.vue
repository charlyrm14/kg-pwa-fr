<script setup lang="ts">
    import { useForm } from 'vee-validate';
    import { type CreateUserPayload } from '#imports';
    import { newUserSchema } from '~/validations/users/new-user.schema';
    import { useUserStore } from '~/stores/users';

    const emit = defineEmits<{
        (e: 'refreshUsers'): void,
        (e: 'closeCreateUserModal'): void
    }>();

    const userStore = useUserStore()

    const currentStep = ref<number>(1)
    const isSubmitting = ref<boolean>(false)

    const { defineField,  handleSubmit, validateField, resetForm,  errors} = useForm<CreateUserPayload>({
        initialValues: {
            role_id: 0
        },
        validationSchema: newUserSchema,
        validateOnMount: false
    })

    const [ name, nameAttrs ] = defineField('name')
    const [ last_name, last_nameAttrs ] = defineField('last_name')
    const [ mother_last_name, mother_last_nameAttrs ] = defineField('mother_last_name')
    const [ email, emailAttrs ] = defineField('email')
    const [ role_id, role_idAttrs ] = defineField('role_id')
    const [ birthdate, birthdateAttrs ] = defineField('birthdate')

    const prevStep = () => {
        if(currentStep.value > 1) currentStep.value--
    }

    const nextStep = async() => {

        const fields = ['name', 'last_name', 'mother_last_name'] as const

        const validations = await Promise.all(
            fields.map(field => validateField(field))
        )

        const hasError = validations.some(v => !v.valid)

        if (hasError) return

        currentStep.value++
    }

    const onSubmit = handleSubmit(async values => {        
        try {

            const payload = { ...values }
            await userStore?.create(payload)
            emit('refreshUsers')
            emit('closeCreateUserModal')
            
        } catch (error) {
            console.error(error)
        } 
    })

    const closeModal = () => {
        emit('closeCreateUserModal')
        resetForm()
    }

</script>

<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div class="bg-white dark:bg-dark rounded-2xl w-[95vw] h-[95vh] md:w-[40vw] md:h-auto max-w-[1200px] flex flex-col overflow-hidden">

            <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-light px-6 py-2">
                <h2 class="text-xl font-semibold text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
                        Agregar usuario
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click.prevent="closeModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <form @submit.prevent="onSubmit">
                <div class="my-6 px-6 py-4 space-y-4">

                    <div class="flex justify-center items-center">
                        <div class=" bg-gray-200 dark:bg-dark-light rounded-xl p-1 flex items-center">
                            <button 
                                class="rounded-xl px-4 py-2 font-bold cursor-pointer"
                                :class="currentStep === 1 ? 'bg-white dark:bg-dark-extralight text-blue-500' : 'bg-gray-200 dark:bg-dark-light text-gray-500 font-semibold'"
                                @click.prevent="currentStep = 1"> 
                                    <span> Información básica </span>
                            </button>
                            <button 
                                class="rounded-xl px-4 py-2 font-bold cursor-pointer"
                                :class="currentStep === 2 ? 'bg-white dark:bg-dark-extralight text-blue-500' : 'bg-gray-200 dark:bg-dark-light text-gray-500 font-semibold'"
                                @click.prevent="nextStep">
                                    <span> Información adicional </span>
                            </button>
                        </div>
                    </div>
                
                    <div v-if="currentStep === 1" class="space-y-3">
                        <div>
                            <label for="name" class="text-gray-500 dark:text-gray-500 font-semibold"> Nombre </label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                v-model="name"
                                v-bind="nameAttrs"
                                placeholder="Jhon W"
                                class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-xl focus:outline-none font-extrabold">
                            <span v-if="errors.name" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.name  }}
                            </span>
                        </div>

                        <div>
                            <label for="last_name" class="text-gray-500 dark:text-gray-500 font-semibold"> Apellido paterno <span class="font-bold text-red-500"> * </span> </label>
                            <input 
                                type="text"
                                id="last_name"
                                name="last_name"
                                v-model="last_name"
                                v-bind="last_nameAttrs"
                                placeholder="Smith"
                                class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-xl focus:outline-none font-extrabold">
                            <span v-if="errors.last_name" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.last_name  }}
                            </span>
                        </div>

                        <div>
                            <label for="mother_last_name" class="text-gray-500 dark:text-gray-500 font-semibold"> Apellido materno </label>
                            <input 
                                type="text"
                                id="mother_last_name"
                                name="mother_last_name"
                                v-model="mother_last_name"
                                v-bind="mother_last_nameAttrs"
                                placeholder="Brown"
                                class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-xl focus:outline-none font-extrabold">
                            <span v-if="errors.mother_last_name" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.mother_last_name  }}
                            </span>
                        </div>
                    </div>

                    <div v-if="currentStep === 2" class="space-y-3">
                        <div>
                            <label for="email" class="text-gray-500 dark:text-gray-500 font-semibold"> Correo electrónico </label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                v-model="email"
                                v-bind="emailAttrs"
                                placeholder="correo@correo.com"
                                class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-xl focus:outline-none font-extrabold">
                            <span v-if="errors.email" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.email  }}
                            </span>
                        </div>

                        <div>
                            <label for="birthdate" class="text-gray-500 dark:text-gray-500 font-semibold"> Fecha de nacimiento </label>
                            <input 
                                type="date"
                                id="birthdate"
                                name="birthdate"
                                v-model="birthdate"
                                v-bind="birthdateAttrs"
                                placeholder="YYYY-mm-dd"
                                class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-xl focus:outline-none font-extrabold dark:[color-scheme:dark]">
                            <span v-if="errors.birthdate" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.birthdate  }}
                            </span>
                        </div>

                        <div>
                            <label for="role_id" class="text-gray-500 dark:text-gray-500 font-semibold"> Tipo de usuario </label>
                            <select 
                                name="role_id" 
                                id="role_id"
                                v-model="role_id"
                                v-bind="role_idAttrs"
                                class="w-full p-4 bg-gray-100 text-black dark:bg-dark-light dark:text-white mt-2 rounded-xl focus:outline-none font-extrabold">
                                    <option :value="0" selected> -- Selecciona -- </option>
                                    <option :value="1"> Administrador </option>
                                    <option :value="2"> Profesor </option>
                                    <option :value="3"> Estudiante </option>
                            </select>
                            <span v-if="errors.role_id" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.role_id  }}
                            </span>
                        </div>
                    </div>

                </div>

                <div class="flex justify-end items-center gap-x-4 px-6 py-4 bg-white dark:bg-dark shrink-0 sticky bottom-0 mt-4">
                    <button
                        type="button"
                        class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-4xl px-4 py-2 font-bold"
                        :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                        :disabled="isSubmitting"
                        @click.prevent="closeModal()"> 
                            Cancelar 
                    </button>
                    <button
                        type="button"
                        v-if="currentStep > 1"
                        @click.prevent="prevStep"
                        class="bg-purple-500 text-white font-semibold px-4 py-2 rounded-full cursor-pointer hover:opacity-75">
                            Volver
                    </button>
                    <button
                        type="button"
                        v-if="currentStep < 2"
                        @click.prevent="nextStep"
                        class="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:opacity-75 font-bold">
                            Siguiente
                    </button>
                    <button
                        type="submit"
                        v-if="currentStep === 2"
                        class="text-white px-4 py-2 rounded-4xl hover:opacity-75 font-extrabold"
                        :class="isSubmitting ? 'bg-blue-300' : 'bg-blue-500 cursor-pointer'"> 
                            {{ !isSubmitting ? 'Crear usuario' : 'Creando usuario' }} 
                    </button>
                </div>
            </form>

        </div>
    </div>
</template>
