<script setup lang="ts">
    import  { 
        getFirstLetterUppercase, 
        useModalManager, 
        textAttendanceStatusColors, 
        getTodayDate, 
        type AttendanceCurrentDay 
    } from '#imports';

    const props = defineProps<{
        attendance: AttendanceCurrentDay
    }>()

    const { open } = useModalManager()

    const openAssignAttendance = () => {
        open('AssignAttendanceModal', props.attendance)
    }

</script>

<template>
    <div 
        class="w-full bg-gray-100 dark:bg-dark-extralight rounded-lg space-y-2 cursor-pointer hover:opacity-75 p-2 shadow mb-3"
        @click="openAssignAttendance">
            <div class="flex justify-between items-center">
                <div class="flex justify-between items-center gap-x-3 md:gap-x-4">
                    <div class="bg-gray-200 dark:bg-dark-soft text-gray-600 dark:text-gray-400 rounded-xl p-2 md:p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-check-icon lucide-user-round-check"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/></svg>
                    </div>
                    <div>
                        <span 
                            class="text-sm font-bold"
                            :class="attendance?.attendance_status_id ? textAttendanceStatusColors(attendance?.attendance_status_id) : 'dark:text-gray-300'"> 
                                {{ attendance?.user?.name }}
                        </span>
                        <span class="font-bold text-base block" :class=" attendance?.attendance_status ? 'text-lime-500' : 'text-gray-500 dark:text-gray-400'"> 
                            {{ attendance?.attendance_status ?? 'Asistencia no asignada' }}
                        </span>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right dark:text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </div>
    </div>
</template>