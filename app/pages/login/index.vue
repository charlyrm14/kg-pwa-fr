<script setup lang="ts">
    import Shark from '~/assets/media/shark-login.png';
    import { 
        useAuth, 
        useAlert,
        type LoginPayload 
    } from '#imports';
    import { useForm } from 'vee-validate';
    import { loginSchema } from '~/validations/login/login.schema';
    import Alert from '~/components/common/Alert.vue';

    definePageMeta({
        layout: 'login',
        middleware: ['guest']
    })

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const { login } = useAuth()
    const { alert, closeAlert } = useAlert()

    const isSubmitting = ref<boolean>(false)

    const { handleSubmit, defineField, errors } = useForm<LoginPayload>({
        initialValues: {
            email: IS_MOCK_API_MODE ? 'correo@correo.com' : '',
            password: IS_MOCK_API_MODE ? 'qwerty123' : ''
        },
        validateOnMount: false,
        validationSchema: loginSchema
    })

    const [ email, emailAttrs ] = defineField('email')
    const [ password, passwordAttrs ] = defineField('password')

    const onSubmit = handleSubmit(async values => {
        try {

            const { email, password } = values

            await login(email, password)
            
        } catch (error: any) {
            console.error(error)
        }
    })
    
</script>

<template>
    <section>
        <div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-100 dark:bg-dark p-4">
            <div class="w-full md:w-2/3 lg:w-1/3 max-h-full  rounded-xl p-6 overflow-y-auto">

                <Alert 
                    v-if="alert.status" 
                    :title="alert.title" 
                    :description="alert.description" 
                    :type="alert.type" 
                    @closeAlert="closeAlert"/>

                <div class="flex justify-center">
                    <img 
                        :src="Shark" 
                        alt="Shark login"
                        class="w-[70%] drop-shadow drop-shadow-cyan-500">
                </div>

                <div>
                    <p class="text-blue-500 text-xl font-extrabold"> Inicia sesión </p>
                    <h2 class="text-4xl font-bold dark:text-white mb-2"> ¡Hola de nuevo! </h2>
                    <p class="text-gray-600 dark:text-white mb-6 font-extralight text-xs">
                        Estamos listos para que sigas mejorando tu rendimiento.
                    </p>
                </div>

                <form @submit.prevent="onSubmit">
                    <div class="mt-6">
                        <label for="email" class="dark:text-white font-light"> Correo electrónico </label>
                        <div class="relative flex items-center w-full mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail absolute left-3 size-5 text-gray-400 dark:text-gray-300"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                            <input 
                                type="email" 
                                v-model="email"
                                v-bind="emailAttrs"
                                placeholder="correo@correo.com"
                                class="w-full pl-10 py-3 border rounded-full focus:outline-none border-gray-100 bg-white dark:bg-dark-extralight dark:border-dark-extralight dark:text-white shadow"/>
                        </div>
                        <span v-if="errors.email" class="text-red-500 text-sm px-2 font-bold"> 
                            {{ errors.email  }}
                        </span>
                    </div>
                

                    <div class="mt-4">
                        <label for="password" class="dark:text-white font-light"> Contraseña </label>
                            <div class="relative flex items-center w-full mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-icon lucide-lock absolute left-3 size-5 text-gray-400 dark:text-gray-300">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                                <input 
                                    type="password" 
                                    v-model="password"
                                    v-bind="passwordAttrs"
                                    placeholder="•••••••••"
                                    class="w-full pl-10 pr-10 py-3 border rounded-full focus:outline-none border-gray-100 bg-white dark:bg-dark-extralight dark:border-dark-soft dark:text-white shadow"/>                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye absolute right-3 size-5 text-gray-400 dark:text-gray-300 cursor-pointer hover:text-blue-500">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            </div>
                            <span v-if="errors.password" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.password  }}
                            </span>
                    </div>

                    <div class="mt-4">
                        <p class="text-blue-500 underline text-xs text-end cursor-pointer"> ¿Olvidaste tu contraseña? </p>
                    </div>

                    <button 
                        type="submit"
                        class="w-full bg-blue-500 text-white mt-10 py-3 rounded-full hover:opacity-75 font-semibold"
                        :class="isSubmitting ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'">
                            {{ !isSubmitting ? 'Iniciar sesión' : 'Iniciando sesión...'}}
                    </button>

                </form>

            </div>
        </div>
    </section>

</template>
