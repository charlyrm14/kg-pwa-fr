<script setup lang="ts">
    import { 
        bgRoleUserColor, 
        type UserInfo 
    } from '#imports';

    defineProps<{
        user: UserInfo
    }>()

</script>

<template>
    <div>
        <div class="bg-white dark:bg-dark-light rounded-2xl p-4">
            <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg mb-2"> Información de usuario </h4>
                <button class="text-sm md:text-base bg-blue-500 text-white font-semibold rounded-full px-4 py-1 cursor-pointer hover:opacity-75 mb-2"> Editar </button>
            </div>
            <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                <span class="text-gray-500 font-semibold text-sm md:text-base"> Nombre </span>
                <p class="text-sm md:text-lg text-black dark:text-white font-bold"> {{ user?.name ?? 'Unknown' }} </p>
            </div>
            <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                <span class="text-gray-500 font-semibold text-sm md:text-base"> Apellido paterno </span>
                <p class="text-sm md:text-lg text-black dark:text-white font-bold"> {{  user?.last_name ?? 'Unknown' }} </p>
            </div>
            <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                <span class="text-gray-500 font-semibold text-sm md:text-base"> Apellido materno </span>
                <p class="text-sm md:text-lg text-black dark:text-white font-bold"> {{ user?.mother_last_name ?? '' }} </p>
            </div>
            <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                <span class="text-gray-500 font-semibold text-sm md:text-base"> Correo electrónico </span>
                <p class="text-sm md:text-lg text-black dark:text-white font-bold"> {{ user?.email ?? 'Sin correo electrónico' }} </p>
            </div>
            <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                <span class="text-gray-500 font-semibold text-sm md:text-base"> Código de estudiante </span>
                <p class="text-sm md:text-lg text-black dark:text-white font-bold"> {{ user?.student_code ?? 'Sin código de estudiante' }} </p>
            </div>
            <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                <span class="text-gray-500 font-semibold text-sm md:text-base"> Rol </span>
                <span 
                    class="text-sm md:text-base text-white font-bold px-3 py-0.5 rounded-full" 
                    :class="bgRoleUserColor(user?.role_id)"> 
                        {{ user?.role_name ?? 'unknown' }} 
                </span>
            </div>
            <div class="mt-3 flex justify-between items-center gap-x-4">
                <span class="text-gray-500 font-semibold text-sm md:text-base inline-flex justify-between items-center gap-x-2"> 
                    Fecha de nacimiento
                </span>
                <p class="text-sm md:text-lg text-black dark:text-white font-bold"> {{ user?.profile?.birthdate ?? 'S/N' }} </p>
            </div>
        </div>
    </div>
</template>