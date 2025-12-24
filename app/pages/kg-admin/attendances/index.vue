<script setup lang="ts">
    import AttendanceHeader from '~/components/admin/attendances/AttendanceHeader.vue';
    import SearchUserAttendance from '~/components/admin/attendances/SearchUserAttendance.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import { useModalManager } from '#imports';
    import AttendanceTable from '~/components/admin/attendances/AttendanceTable.vue';
    import AttendancePagination from '~/components/admin/attendances/AttendancePagination.vue';
    import { useAttendanceStore } from '~/stores/attendances';
    import AssignAttendance from '~/components/admin/attendances/AssignAttendance.vue';
    
    definePageMeta({
        layout: 'admin'
    })

    const { modalPayload, close, isOpen } = useModalManager()
    const attendanceStore = useAttendanceStore()

    await useAsyncData('dashboardAttendancesToday', async() => {
        await attendanceStore.fetchAttendancesToday()
        return attendanceStore.attendancesToday ?? { data: [] }
    })

</script>

<template>
    <section>
        
        <section class="md:px-5">
            <Breadcrumb
                heading="Asistencias hoy"
                primary-section="Asistencias"
                primary-link="/kg-admin/attendances"
                secondary-section="Lista"/>
        </section>

        <section class="mt-6 md:px-5">
            <div class="bg-white shadow-lg rounded-lg px-6 pt-10 pb-6 dark:bg-dark-light">

                <!-- Beginning Attendances Header -->
                <AttendanceHeader/>
                <!-- End Attendances Header -->
                
                <!-- {{ attendanceStore.attendancesToday.data }} -->
                
                <!-- Beginning Attendances Table -->
                <section v-if="attendanceStore?.attendancesToday?.data">
                    <AttendanceTable
                        :attendances="attendanceStore?.attendancesToday?.data"/>
                </section>
                <!-- End Attendances Table -->

                <!-- Beginning Attendances Pagination -->
                <AttendancePagination/>
                <!-- End Attendances Pagination -->
                
            </div>
        </section>

        <SearchUserAttendance
            v-if="isOpen('SearchUserAttendanceModal')"
            @closeSearchUserAttendanceModal="close"/>

        <AssignAttendance
            v-if="isOpen('AssignAttendanceModal')"
            :user="modalPayload?.user"
            @closeAssignAttendanceModal="close"/>

    </section>
</template>
