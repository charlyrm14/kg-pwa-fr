<script setup lang="ts">

    const emit = defineEmits<{
        (e: 'closeAssignUserAttendanceModal'): void
    }>();

    const isSubmitting = ref<boolean>(false)

    const handleSubmit = () => {

        isSubmitting.value = true

        setTimeout(() => {
            isSubmitting.value = false
        }, 4000);
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-dark rounded-2xl shadow-xl w-[90%] max-w-md md:w-4/5 md:max-w-xl mx-4">

            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-search-icon lucide-user-round-search"><circle cx="10" cy="8" r="5"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.9-1.9"/></svg>
                        Asignar asistencia
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click="$emit('closeAssignUserAttendanceModal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="px-6 pb-4 space-y-4">
                <h4 class="dark:text-gray-400"> Buscar usuario </h4>
                <div class="flex flex-row items-center gap-x-2 mt-2">
                    <div class="basis-[90%]">
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ej: correo@correo.com"
                            class="w-full rounded-lg p-4 border border-gray-200 dark:border-dark-extralight dark:text-gray-400">
                    </div>
                    <div class="basis-[10%]">
                        <button class="w-full bg-indigo-500 text-white rounded-lg cursor-pointer hover:opacity-55 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                        </button>
                    </div>
                </div>
                <div>
                    <h4 class="dark:text-white font-light text-sm"> Resultados de busqueda </h4>
                </div>
                <div class="border-l-4 border-blue-500">
                    <div class="flex justify-between items-center pl-3">
                        <div class="flex justify-start items-start gap-x-4">
                            <div class="bg-gray-100 dark:bg-dark-extralight p-4 rounded-lg dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                            <div>
                                <p class="text-gray-600 dark:text-gray-300 font-bold"> 
                                    Jhon W 
                                        <span class="block text-sm font-light"> correo@correo.com </span> 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="mt-4">
                        <label for="date" class="dark:text-gray-400"> Selecciona una fecha </label>
                        <input 
                            type="date"
                            name="date"
                            class="w-full p-4 rounded-lg mt-2 border border-gray-200 dark:border-dark-extralight dark:text-gray-400">
                    </div>
                    <div>
                        <h4 class="dark:text-gray-400 mb-2"> Selecciona una opción </h4>
                        <div class="inline-flex items-center gap-x-3">
                            <button class="flex flex-col items-center bg-gray-100 dark:bg-dark-extralight dark:text-gray-400 border border-gray-200 dark:border-dark-extralight rounded-lg px-4 py-2 cursor-pointer hover:bg-red-500 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-x-icon lucide-user-x"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/></svg>
                                <span class="block"> No asistio </span>
                            </button>
                            <button class="flex flex-col items-center bg-gray-100 dark:bg-dark-extralight dark:text-gray-400 border border-green-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-green-500 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-check-icon lucide-user-round-check"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/></svg>
                                    <span class="block"> Asistio </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    :disabled="isSubmitting"
                    @click="$emit('closeAssignUserAttendanceModal')"> 
                        Cancelar 
                </button>
                <button
                    :disabled="!isSubmitting"
                    @click="handleSubmit"
                    class="text-white px-4 py-2 rounded-lg hover:opacity-75"
                    :class="!isSubmitting ? 'bg-blue-300 cursor-pointer' : 'bg-blue-500 cursor-progress'"> 
                        {{ !isSubmitting ? 'Asignar asistencia' : 'Asignando asistencia' }} 
                </button>
            </div>

        </div>
    </div>
</template>
