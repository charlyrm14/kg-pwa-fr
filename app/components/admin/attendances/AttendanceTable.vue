<script setup lang="ts">
    import AttendanceRow from './AttendanceRow.vue';
    import type { AttendanceCurrentDay } from '#imports';

    defineProps<{
        attendances: AttendanceCurrentDay[]
    }>()

</script>

<template>
    <div class="w-full overflow-x-auto p-4 mt-6">
        <div class="min-w-[640px]">

            <div class="flex border-b border-gray-200 dark:border-dark-soft pb-3 mb-2 font-semibold text-sm uppercase text-gray-500 dark:text-gray-400">
                <div class="w-2/5 flex-shrink-0 px-2"> Alumno </div>
                <div class="w-1/5 flex-shrink-0 px-2"> Estatus asistencia </div>
                <div class="w-1/5 flex-shrink-0 px-2"> Acciones </div>
            </div>

            <!-- Beginning Attendances Row -->
            <AttendanceRow
                v-for="attendance in attendances"
                :key="attendance.user.uuid"
                :attendance="attendance"/>
            <!-- End Attendances Row -->

        </div>
    </div>
</template>