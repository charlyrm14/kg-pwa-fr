<script setup lang="ts">
    import { currentMonth, daysByCurrentWeek } from '#imports';
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
    import { useSchedule } from '#imports';
    import AttendanceCurrentMonth from '~/components/user/schedules/AttendanceCurrentMonth.vue';
    import AttendanceByMonth from '~/components/user/schedules/AttendanceByMonth.vue';
    import AttendancesStatuses from '~/components/user/attendances/AttendancesStatuses.vue';
    
    const { data: schedule } = await useAsyncData('schedule', async() => {
        const { fetchUserSchedule } = useSchedule()
        return await fetchUserSchedule()
    } )
    
    const contentTab = ref<number>(1)

    const weekWithAssignedDays = computed(() => {
        const week = daysByCurrentWeek()
        const assigned = schedule.value?.data?.schedules ?? []

        return week.map((day) => ({
            ...day,
            assigned: assigned.some((s) => s.day_id === day.day_id)
        }))
    })

    const entry_time = schedule.value?.data?.schedules?.at(0)?.entry_time;
    const departure_time = schedule.value?.data?.schedules?.at(0)?.departure_time

</script>

<template>
    <section>
        
        <section>
            <SectionTitle title="Mis clases"/>
            <div>
                <div class="flex justify-center md:justify-center items-start">
                    <h4 class="text-black dark:text-white text-base md:text-lg font-light"> Esta semana </h4>
                </div>
                <div class="flex justify-center md:items-center mb-2">
                    <span class="dark:text-white inline-flex items-center gap-x-2 font-light"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                            {{ entry_time }} - {{ departure_time }} 
                    </span>
                </div>
                <div class="flex overflow-x-auto justify-center md:items-center gap-x-4 mt-4">
                    <div
                        v-for="dayWeek in weekWithAssignedDays"
                        :key="dayWeek.day_id"
                        class="px-3 py-4 rounded-4xl overflow-hidden flex-shrink-0"
                        :class="dayWeek.assigned ? 'bg-blue-500' : 'bg-gray-400/70 dark:bg-dark-extralight'">
                            <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                                {{ dayWeek.shortening }} <span class="text-2xl font-bold"> {{ dayWeek.date }} </span>
                            </h2>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h4 class="text-black dark:text-white text-lg font-light mb-4"> Historial de asistencias </h4>
            <div class="bg-gray-200/60 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-1 rounded-lg flex justify-center items-center">
                <button
                    @click="contentTab = 1"
                    class="dark:text-white w-full cursor-pointer hover:opacity-75"
                    :class="contentTab === 1 ? 'bg-white dark:bg-dark-soft px-4 py-2 rounded-lg font-bold' : ''">
                        Mes actual
                </button>
                <button
                    @click="contentTab = 2"
                    class="dark:text-white w-full cursor-pointer hover:opacity-75"
                    :class="contentTab === 2 ? 'bg-white dark:bg-dark-soft px-4 py-2 rounded-lg font-bold': 'font-light'">
                        Otros meses
                </button>
            </div>
        </section>

        <section class="mt-6">
            <div v-if="contentTab === 1">
                <AttendancesStatuses/>
                <AttendanceCurrentMonth/>
            </div>
            <div v-else>
                <AttendanceByMonth/>
            </div>
        </section>

    </section>
</template>
