<script setup lang="ts">
    import { useAttendanceStore } from '~/stores/attendances';
    import { bgAttendanceStatusColors } from '#imports';

    const attendanceStore = useAttendanceStore()

    onMounted(async() => {
        await attendanceStore?.fetchAttendanceStatuses()
    })

    const statuses = computed(() => attendanceStore?.attendanceStatuses?.data ?? [])

</script>

<template>
    <div class="my-2 flex overflow-x-auto gap-x-4">
        <div
            v-if="statuses"
            v-for="status in statuses"
            :key="status.id"
            class="flex justify-between items-start my-1 gap-x-3 overflow-hidden flex-shrink-0">
                <div class="p-1 rounded-full mb-2" :class="bgAttendanceStatusColors(status.id)">
                    <div class="p-2 rounded-full"></div>
                </div>
            <span class="text-sm dark:text-gray-300"> {{ status.name }} </span>
        </div>
    </div>
</template>