<script setup lang="ts">
    import { 
        currentMonth, 
        bgAttendanceStatusColors,
        textAttendanceStatusColors, 
        type AttendanceSummary 
    } from '#imports';

    defineProps<{
        attendanceSummary: AttendanceSummary[]
    }>()

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
        <div class="flex justify-between items-center">
            <h4 class="text-gray-500 dark:text-gray-300 text-lg">
                Asistencias
            </h4>
        </div>
        <div class="my-4">
            <p class="text-blue-500 font-bold"> {{ currentMonth() }} </p>
        </div>
        <div class="space-y-4">
            <div
                v-if="attendanceSummary"
                v-for="attendance in attendanceSummary"
                :key="attendance.id"
                class="flex justify-between items-start border-b border-dashed border-gray-300 dark:border-gray-400 space-y-3">
                    <div class="flex justify-between items-center gap-x-3"> 
                        <span class="h-4 w-4 rounded-full" :class="bgAttendanceStatusColors(attendance?.id)"></span>
                        <span class="text-gray-600 dark:text-gray-400"> {{ attendance?.name ?? 'Unknown' }} </span>
                    </div>
                    <span class="bg-gray-100 dark:bg-dark-extralight rounded-lg font-extrabold px-4" :class="textAttendanceStatusColors(attendance?.id)">
                        {{ attendance?.total_students ?? 0 }} alumno(s)
                    </span>
            </div>
        </div>
    </div>
</template>