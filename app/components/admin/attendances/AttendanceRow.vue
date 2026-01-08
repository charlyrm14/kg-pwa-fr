<script setup lang="ts">
    import type { AttendanceCurrentDay } from '#imports';
    import { getFirstLetterUppercase } from '#imports';
    import { useModalManager } from '#imports';
    import { textAttendanceStatusColors } from '#imports';
    import { getTodayDate } from '#imports';

    const props = defineProps<{
        attendance: AttendanceCurrentDay
    }>()

    const { open } = useModalManager()

    const openAssignAttendance = () => {
        open('AssignAttendanceModal', props.attendance)
    }

</script>

<template>
    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft my-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
            <div class="flex items-start gap-x-4">
                <div class="flex gap-x-4">
                    <div class="w-10 h-10 rounded-full border border-gray-200 dark:border-white bg-gradient-to-r from-purple-500 to-purple-800 flex justify-center items-center">
                        <span class="font-extrabold text-lg text-white"> {{ getFirstLetterUppercase(attendance?.user?.name) }} </span>
                    </div>
                    <p class="font-bold text-base text-blue-500 cursor-pointer"> 
                        {{ attendance?.user?.name }} 
                            <span class="block text-xs dark:text-gray-300 text-gray-600"> {{ attendance?.user?.email }} </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="w-1/5 flex-shrink-0 px-2">
            <p class="font-bold" :class="attendance?.attendance_status ? textAttendanceStatusColors(attendance?.attendance_status) : 'dark:text-gray-400'"> 
                {{ attendance?.attendance_status ?? 'NO ASIGNADA' }}
                    <span class="text-xs dark:text-gray-400 text-gray-500 block"> {{ getTodayDate() }} </span>
            </p>
        </div>
        <div class="w-1/5 flex-shrink-0 px-2 relative">
            <div class="inline-flex items-center gap-x-3">
                <button 
                    class="w-10 h-10 bg-gray-200 dark:bg-dark-extralight flex justify-center items-center rounded-full cursor-pointer hover:opacity-75"
                    @click="openAssignAttendance">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check-icon lucide-user-check"><path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </button>
            </div>
        </div>
    </div>
</template>