<script setup lang="ts">

    const emit = defineEmits<{
        (e: 'closeEditUserScheduleModal'): void
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check2-icon lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>
                        Editar horario de Jhon W
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click="$emit('closeEditUserScheduleModal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="px-6 pb-4">
                <div class="rounded-lg space-y-4">
                    <div>
                        <p class="text-gray-600 dark:text-gray-400"> Selecciona el horario por día sel usuario </p>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight pb-2">
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 text-xl"> Lunes </p>
                        </div>
                        <div class="flex justify-between items-center gap-x-4">
                            <div>
                                <input 
                                    type="time" 
                                    name="entry_time" 
                                    id="entry_time"
                                    class="border border-gray-100 dark:border-none bg-gray-100 dark:bg-dark-extralight w-full p-1.5 rounded-lg dark:text-white">
                            </div>
                            <div>
                                <input 
                                    type="time" 
                                    name="departure_time" 
                                    id="departure_time"
                                    class="border border-gray-100  dark:border-none bg-gray-100 dark:bg-dark-extralight w-full p-1.5 rounded-lg dark:text-white">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight pb-2">
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 text-xl"> Martes </p>
                        </div>
                        <div class="flex justify-between items-center gap-x-4">
                            <div>
                                <input 
                                    type="time" 
                                    name="entry_time" 
                                    id="entry_time"
                                    class="border border-gray-100  dark:border-none bg-gray-100 dark:bg-dark-extralight w-full p-1.5 rounded-lg dark:text-white">
                            </div>
                            <div>
                                <input 
                                    type="time" 
                                    name="departure_time" 
                                    id="departure_time"
                                    class="border border-gray-100  dark:border-none bg-gray-100 dark:bg-dark-extralight w-full p-1.5 rounded-lg dark:text-white">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight pb-2">
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 text-xl"> Miércoles </p>
                        </div>
                        <div class="flex justify-between items-center gap-x-4">
                            <div>
                                <input 
                                    type="time" 
                                    name="entry_time" 
                                    id="entry_time"
                                    class="border border-gray-100  dark:border-none bg-gray-100 dark:bg-dark-extralight w-full p-1.5 rounded-lg dark:text-white">
                            </div>
                            <div>
                                <input 
                                    type="time" 
                                    name="departure_time" 
                                    id="departure_time"
                                    class="border border-gray-100  dark:border-none bg-gray-100 dark:bg-dark-extralight w-full p-1.5 rounded-lg dark:text-white">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 text-xl"> Jueves </p>
                        </div>
                        <div class="flex justify-between items-center gap-x-4">
                            <div>
                                <input 
                                    type="time" 
                                    name="entry_time" 
                                    id="entry_time"
                                    class="border border-gray-100  dark:border-none bg-gray-100 dark:bg-dark-extralight w-full p-1.5 rounded-lg dark:text-white">
                            </div>
                            <div>
                                <input 
                                    type="time" 
                                    name="departure_time" 
                                    id="departure_time"
                                    class="border border-gray-100  dark:border-none bg-gray-100 dark:bg-dark-extralight w-full p-1.5 rounded-lg dark:text-white">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 mt-8 mb-6">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    :disabled="isSubmitting"
                    @click="$emit('closeEditUserScheduleModal')"> 
                        Cancelar 
                </button>
                <button
                    :disabled="isSubmitting"
                    @click="handleSubmit"
                    class="text-white px-4 py-2 rounded-lg hover:opacity-75"
                    :class="isSubmitting ? 'bg-blue-300 cursor-progress' : 'bg-blue-500 cursor-pointer'"> 
                        {{ !isSubmitting ? 'Guardar cambios' : 'Guardando' }} 
                </button>
            </div>

        </div>
    </div>
</template>