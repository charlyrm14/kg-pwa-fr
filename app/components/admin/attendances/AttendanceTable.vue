<script setup lang="ts">
    import AttendanceRow from './AttendanceRow.vue';
    import type { AttendanceCurrentDay } from '#imports';

    defineProps<{
        attendances: AttendanceCurrentDay[]
    }>()

</script>

<template>
    <div class="p-4">
        <!-- Beginning Attendances Row -->
        <AttendanceRow
            v-for="attendance in attendances"
            :key="attendance.user.uuid"
            :attendance="attendance"/>
        <!-- End Attendances Row -->
    </div>
</template>