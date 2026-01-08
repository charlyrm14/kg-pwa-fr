<script setup lang="ts">
    import { useModalManager } from '#imports';
    import type { AttendanceCurrentDay } from '#imports';
    import { useAttendanceStore } from '~/stores/attendances';
    import { bgAttendanceStatusColors } from '#imports';

    const { getPayload } = useModalManager()
    const attendanceStore = useAttendanceStore()

    const emit = defineEmits<{
        (e: 'closeAssignAttendanceModal'): void
    }>();

    const props = defineProps<{
        user: AttendanceCurrentDay
    }>()

    const user = getPayload<AttendanceCurrentDay>()
    const isSubmitting = ref<boolean>(false)
    const statusSelected = ref<number>(0)
    const errorMessage = ref<boolean>(false)

    onMounted(async() => {
        try {

            await attendanceStore?.fetchAttendanceStatuses()
            
        } catch (error) {
            console.error('Error to get attendance statuses')
        }
    })

    const statuses = computed(() => attendanceStore.attendanceStatuses?.data ?? [])


    const handleSubmit = async() => {

        if(statusSelected.value === 0){
            errorMessage.value = true
            return
        }

        try {

            isSubmitting.value = true
            
            const payload = {
                user_uuid: user?.user?.uuid,
                attendance_status_id: statusSelected.value
            }

            await attendanceStore?.assignUserAttendance(payload)
            emit('closeAssignAttendanceModal')
            
        } catch (error) {
            console.error('Hubo un error al asignar la asistencia')

        } finally {
            isSubmitting.value = false
        }
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
                        <h4 class="text-gray-500 dark:text-white"> Selecciona una opción </h4>
                        <span v-if="errorMessage">
                            <p class="text-red-500 font-bold mb-2 text-sm"> Debes seleccionar una opción </p>
                        </span>
                        <div v-if="statuses"  class="space-y-3 my-2">
                            <div 
                                v-for="status in statuses" 
                                :key="status?.id" 
                                @click="statusSelected = status.id"
                                class="w-full bg-gray-200 dark:bg-dark-light  rounded-lg px-4 py-2 flex justify-between items-center cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0"
                                :class="statusSelected === status.id ? 'border-2 border-blue-500' : 'border border-gray-200 dark:border-dark-soft'">
                                <div class="flex justify-between items-center gap-x-4">
                                    <div class="w-8 h-8 rounded-full" :class="bgAttendanceStatusColors(status.id)"></div>
                                    <div>
                                        <p class="dark:text-white font-extrabold"> 
                                            {{ status?.name.replace('_', ' ') }} <span class="block text-xs text-gray-500 dark:text-gray-400"> {{ status.description }} </span>
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
                    :class="statusSelected !== 0 ? 'bg-blue-500 cursor-pointer' : 'bg-blue-300'"
                    :disabled="statusSelected === 0"> 
                        {{ !isSubmitting ? 'Guardar' : 'Guardando...' }} 
                </button>
            </div>

        </div>
    </div>
</template>