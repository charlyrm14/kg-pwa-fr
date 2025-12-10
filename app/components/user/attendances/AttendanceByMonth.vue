<script setup lang="ts">
    import { currentMonthsOfYear } from '#imports'
    import type { MonthItem } from '#imports';
    import type { AttendanceReport } from '~~/shared/types/Attendance';
    import { useAttendanceStore } from '~/stores/attendances';

    const groupSize = 3
    const months = currentMonthsOfYear()
    const visibleGroups = ref<number>(1)

    const attendanceStore = useAttendanceStore()

    const visibleMonths = computed<MonthItem[]>(() => {
        return months.slice(0, visibleGroups.value * groupSize) 
    })
    
    const hasMore = computed(() => {
        return visibleMonths.value.length < months.length
    })

    const showMore = () => {
        visibleGroups.value++
    }

    const handleReport = async(date: {year: number, month: number}) => {
        
        const data: AttendanceReport = {
            ...date, 
            report_type: 'attendances', 
            user_id: '771f8eb5-a52e-40e4-af21-af947bf76048' 
        }

        await attendanceStore?.generateAttendanceReport(data)
    }

</script>

<template>
    <section>
        <div v-for="currentMonth in visibleMonths" :key="currentMonth.id" class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight px-4 py-2 rounded-lg shadow mb-2">
            <div class="flex justify-between items-center">
                <p class="dark:text-white text-base md:text-lg"> {{ currentMonth.month }} {{ currentMonth.year }} </p>
                <div class="flex justify-end items-center gap-x-4">
                    <button 
                        class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 text-blue-500 cursor-pointer hover:opacity-75"
                        @click="handleReport({ year: currentMonth.year, month: currentMonth.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-download-icon lucide-cloud-download"><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
                    </button>
                    <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 text-blue-500 cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="hasMore" class="flex justify-center">
            <button  
                class="mt-6 text-blue-500 inline-flex items-center gap-x-3 cursor-pointer hover:opacity-75"
                @click="showMore">
                    Cargar más <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </button>
        </div>
    </section>
</template>