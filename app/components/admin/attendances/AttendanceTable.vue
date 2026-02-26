<script setup lang="ts">
    import AttendanceRow from './AttendanceRow.vue';
    import type { AttendanceCurrentDay } from '#imports';

    defineProps<{
        attendances: AttendanceCurrentDay[]
    }>()

</script>

<template>
    <div class="p-4">
        <div 
            v-if="attendances.length"
            class="space-y-3">
                <!-- Beginning Attendances Row -->
                <AttendanceRow
                    v-for="attendance in attendances"
                    :key="attendance.user.uuid"
                    :attendance="attendance"/>
                <!-- End Attendances Row -->
        </div>
        <div 
            v-else>
                <h2 class="dark:text-gray-400 text-center font-bold text-lg">
                    No hay contenido disponible
                </h2>
        </div>
    </div>
</template>