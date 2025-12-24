<script setup lang="ts">
    import { useModalManager } from '#imports';
    import type { AttendanceCurrentDay } from '#imports';

    const { getPayload } = useModalManager()

    const emit = defineEmits<{
        (e: 'closeAssignAttendanceModal'): void
    }>();

    const props = defineProps<{
        user: AttendanceCurrentDay
    }>()

    const user = getPayload<AttendanceCurrentDay>()
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check-icon lucide-user-check"><path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                        Asignar asistencia
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click="$emit('closeAssignAttendanceModal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="px-6 pb-4 space-y-4">
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-center items-center">
                            <div class="w-20 h-20 border-3 border-gray-200 dark:border-dark-soft rounded-full flex justify-center items-center text-gray-500 dark:text-white bg-gray-100 dark:bg-dark-extralight">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <h4 class="text-blue-500 font-extrabold mb-2 text-2xl text-center"> 
                                {{ user?.user?.name }} <span class="block text-base text-gray-500 dark:text-gray-400"> {{ user?.user?.email }} </span>
                            </h4>
                        </div>
                        <div class="flex justify-center">
                            <span class="block text-base text-gray-800 dark:text-gray-400"> {{ user?.user?.student_code }} </span>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-gray-500 dark:text-white font-bold mb-2"> Selecciona una opción </h4>
                        <div class="space-y-3">
                            <div class="w-full bg-gray-200 dark:bg-dark-light border border-gray-200 dark:border-dark-soft rounded-lg p-3 flex justify-between items-center cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0">
                                <div class="flex justify-between items-center gap-x-4">
                                    <div class="w-8 h-8 bg-lime-500 rounded-full"></div>
                                    <div>
                                        <p class="dark:text-white font-extrabold"> 
                                            Presente <span class="block text-sm text-gray-500 dark:text-gray-400"> El alumno o participante asistió a la sesión. </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-dark-light border border-gray-200 dark:border-dark-soft rounded-lg p-3 flex justify-between items-center cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0">
                                <div class="flex justify-between items-center gap-x-4">
                                    <div class="w-8 h-8 bg-red-500 rounded-full"></div>
                                    <div>
                                        <p class="dark:text-white font-extrabold"> 
                                            Ausencia sin justificación <span class="block text-sm text-gray-500 dark:text-gray-400"> Ausencia sin previo aviso ni justificación. </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-dark-light border border-gray-200 dark:border-dark-soft rounded-lg p-3 flex justify-between items-center cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0">
                                <div class="flex justify-between items-center gap-x-4">
                                    <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
                                    <div>
                                        <p class="dark:text-white font-extrabold"> 
                                            Ausencia justificada <span class="block text-sm text-gray-500 dark:text-gray-400"> Ausencia justificada (ej. enfermedad, etc). </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-dark-light border border-gray-200 dark:border-dark-soft rounded-lg p-3 flex justify-between items-center cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0">
                                <div class="flex justify-between items-center gap-x-4">
                                    <div class="w-8 h-8 bg-orange-400 rounded-full"></div>
                                    <div>
                                        <p class="dark:text-white font-extrabold"> 
                                            Tarde <span class="block text-sm text-gray-500 dark:text-gray-400"> El alumno llegó tarde. </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-dark-light border border-gray-200 dark:border-dark-soft rounded-lg p-3 flex justify-between items-center cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0">
                                <div class="flex justify-between items-center gap-x-4">
                                    <div class="w-8 h-8 bg-teal-600 rounded-full"></div>
                                    <div>
                                        <p class="dark:text-white font-extrabold"> 
                                            Exento <span class="block text-sm text-gray-500 dark:text-gray-400"> Exento de asistir (ej. lesión, descanso). </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-dark-light border border-gray-200 dark:border-dark-soft rounded-lg p-3 flex justify-between items-center cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0">
                                <div class="flex justify-between items-center gap-x-4">
                                    <div class="w-8 h-8 bg-slate-400 rounded-full"></div>
                                    <div>
                                        <p class="dark:text-white font-extrabold"> 
                                            Día no asignado <span class="block text-sm text-gray-500 dark:text-gray-400"> Día no asignado como asistencia. </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    :disabled="isSubmitting"
                    @click="$emit('closeAssignAttendanceModal')"> 
                        Cancelar 
                </button>
                <button
                    @click="handleSubmit"
                    class="text-white px-4 py-2 rounded-lg hover:opacity-75 font-extrabold"
                    :class="!isSubmitting ? 'bg-blue-500 cursor-pointer' : 'bg-blue-300 cursor-progress'"> 
                        {{ !isSubmitting ? 'Guardar' : 'Guardando...' }} 
                </button>
            </div>

        </div>
    </div>
</template>