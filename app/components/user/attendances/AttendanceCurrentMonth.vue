<script setup lang="ts">
    import { attendanceBgColor, type Attendance } from '#imports';

    defineProps<{
        attendances: Attendance[] | null
    }>()

</script>

<template>
    <div v-if="attendances?.length" class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg shadow">
        <div v-for="(attendance, index) in attendances" :key="index" class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft my-1">
            <p class="dark:text-white text-base md:text-lg font-light mb-2"> {{ attendance?.day_with_number }} </p>
            <div class="dark:bg-dark-soft rounded-full py-1 px-2 flex justify-between items-center gap-x-2 mb-2">
                <div class="rounded-full p-2" :class="attendanceBgColor(attendance?.attendance_id as AttendanceType || undefined)"></div>
                <span class="dark:text-gray-300 font-semibold text-sm md:text-base">
                    {{ attendance.type_attendance }}
                </span>
            </div>
        </div>
        <div class="mt-4 flex justify-center items-center">
            <p class="text-blue-500 inline-flex items-center gap-x-2 cursor-pointer hover:opacity-75"> 
                Cargar mas días 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                    </span> 
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>