<script setup lang="ts">
    import { useAttendanceStore } from '~/stores/attendances';
    import { useForm } from 'vee-validate'
    import { useUserStore } from '~/stores/users';
    import UserLookup from '~/components/common/UserLookup.vue';


    const emit = defineEmits<{
        (e: 'closeSearchUserAttendanceModal'): void
    }>();

    const attendanceStore = useAttendanceStore()
    const userStore = useUserStore()

    const isSubmitting = ref<boolean>(false)

    onMounted(async() => {
        try {
            await attendanceStore?.fetchAttendanceStatuses()
        } catch (error) {
            console.error(error)
        }
    })

    const { defineField,  handleSubmit,  errors} = useForm({
        validateOnMount: false
    })


    const onSearchSubmit = handleSubmit(async values => {
        try {

            console.log(values)

        } catch (error) {
            console.error(error)
        }
    })

    const closeAssignAttendanceModal = () => {
        userStore.userLookUp = null
        userStore.errorsUserLookUp.type = 'default'
        userStore.errorsUserLookUp.message = ''
        emit('closeSearchUserAttendanceModal')
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-dark rounded-2xl shadow-xl w-[90%] max-w-md md:w-4/5 md:max-w-xl mx-4">

            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4">
                <h2 class="text-xl font-extrabold text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-search-icon lucide-user-round-search"><circle cx="10" cy="8" r="5"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.9-1.9"/></svg>
                        Asignar asistencia
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click="closeAssignAttendanceModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="px-6 py-4 space-y-4">
                <UserLookup/>
            </div>

            <div class="px-6 py-4 space-y-4">
                <div>
                    <h4 class="text-gray-500 dark:text-white font-bold mb-2"> Selecciona una opción </h4>
                    <select 
                        name="attendance_status_id" 
                        id="attendance_status_id"
                        class="w-full p-4 rounded-lg border border-gray-200 dark:border-dark-extralight text-black dark:text-white focus:outline-none">
                            <option :value="0" selected> -- Selecciona -- </option>
                            <option 
                                v-for="status in attendanceStore?.attendanceStatuses?.data"
                                :key="status.id" 
                                :value="status.id"> {{ status?.name }} </option>
                    </select>
                </div>
            </div>
                
            <div class="flex justify-end items-center gap-x-4 px-6 py-4">
                <button
                    class="border border-gray-300 dark:border-dark-extralight rounded-4xl px-4 py-2 transition-colors cursor-pointer hover:opacity-75 w-auto text-gray-400 dark:text-gray-500 font-bold hover:text-red-500 hover:border-red-500 text-center"
                    @click="closeAssignAttendanceModal"> 
                        Cancelar 
                </button>
                <button
                    type="submit"
                    class="text-white font-bold rounded-4xl px-4 py-2 transition-colors hover:opacity-75"
                    :class="!isSubmitting ? 'bg-blue-500 cursor-pointer' : 'bg-blue-300 cursor-progress'"> 
                        {{ !isSubmitting ? 'Guardar' : 'Guardando...' }} 
                </button>
            </div>

        </div>
    </div>
</template>

<style scoped>
    
</style>