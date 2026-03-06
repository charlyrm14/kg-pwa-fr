<script setup lang="ts">
    import { 
        currentMonth,
        borderColorByAttendanceStatus,
        type AttendanceUserInfo  
    } from '#imports';

    defineProps<{
        attendances: AttendanceUserInfo[] | null
    }>()

</script>

<template>
    <div class="bg-white dark:bg-dark-light rounded-2xl p-4 space-y-3 shadow dark:shadow-none">
        <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight">
            <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg"> Historial asistencias </h4>
            <span class="text-blue-500 font-bold text-sm md:text-lg"> {{ currentMonth() }} </span>
        </div>
        <div v-if="attendances?.length" class="h-40 overflow-y-auto">
            <div 
                v-for="attendance in attendances"
                :key="attendance.id"
                class="flex justify-between items-center border-b border-gray-100 dark:border-dark-extralight my-1">
                    <p class="text-gray-500 dark:text-white text-base md:text-lg font-bold mb-2"> {{ attendance?.day_with_number }} </p>
                    <span 
                        class="bg-gray-200 dark:bg-dark-soft text-white px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-x-2 border"
                        :class="borderColorByAttendanceStatus(attendance?.attendance_status_id)"> 
                            {{ attendance?.attendance_name ?? 'Unknown' }} 
                    </span>
            </div>
        </div>
        <div v-else>
            <div class="flex flex-col items-center">
                <span class="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-x2-icon lucide-calendar-x-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m17 22 5-5"/><path d="m17 17 5 5"/></svg>
                </span>
                <span class="mt-3 text-gray-500 dark:text-gray-300 font-bold">
                    Usuario sin asistencias
                </span>
            </div>
        </div>
    </div>
</template>
