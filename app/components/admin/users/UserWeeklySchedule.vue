<script setup lang="ts">
    import {
        daysByCurrentWeek, 
        useModalManager,
        type Schedule 
    } from '#imports';

    const { open } = useModalManager()

    const props = defineProps<{
        userUuid: string
        schedules: Schedule[] | null
    }>()

    const weekWithAssignedDays = computed(() => {
        const week = daysByCurrentWeek()

        const assigned = props.schedules ?? []

        return week.map((day) => ({
            ...day,
            assigned: assigned.some((s) => s.day_id === day.day_id)
        }))
    })

</script>

<template>
    <div class="bg-white dark:bg-dark-light rounded-2xl p-4 shadow dark:shadow-none">
        <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
            <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg"> Horario semanal </h4>
            <button 
                class="bg-purple-500 text-white rounded-full px-3 py-0.5 cursor-pointer hover:opacity-75 mb-2 font-semibold"
                @click="open('UserAssignScheduleModal', { userUuid, schedules })"> 
                    {{ !schedules?.length ? 'Agregar horario' : 'Editar horario' }} 
            </button>
        </div>
        <div v-if="schedules?.length" class="flex overflow-x-auto justify-center md:items-center gap-x-4 mt-4">
            <div 
                v-for="weeklyDay in weekWithAssignedDays"
                :key="weeklyDay.day_id"
                class="px-3 py-4 rounded-4xl overflow-hidden flex-shrink-0 hover:opacity-75"
                :class="weeklyDay.assigned ? 'bg-blue-500' : 'bg-gray-400/70 dark:bg-dark-extralight'">
                    <h2 class="text-white text-xs md:text-base uppercase text-center flex flex-col">
                        {{ weeklyDay.shortening }} <span class="text-2xl font-bold"> {{ weeklyDay.date }} </span>
                    </h2>
            </div>
        </div>
        <div v-else class="mt-4">
            <div class="flex flex-col items-center">
                <span class="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-x-icon lucide-calendar-x"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m14 14-4 4"/><path d="m10 14 4 4"/></svg>
                </span>
                <span class="mt-3 text-gray-500 dark:text-gray-300 font-bold">
                    Usuario sin horario asignado
                </span>
            </div>
        </div>
    </div>
</template>