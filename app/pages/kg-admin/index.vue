<script setup lang="ts">
    import IncomeTypeStat from '~/components/admin/home/IncomeTypeStat.vue';
    import AttendanceStat from '~/components/admin/home/AttendanceStat.vue';
    import UsersStat from '~/components/admin/home/UsersStat.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import IncomeDetailStat from '~/components/admin/home/IncomeDetailStat.vue';

    definePageMeta({
        layout: 'admin'
    })

</script>

<template>
    <section class="md:px-5">

        <section>
            <Breadcrumb
                heading="Dashboard"
                primary-section="Home"
                primary-link="/kg-admin"
                secondary-section="Estadísticas"/>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">

            <!-- Beginning IncomeType -->
            <IncomeTypeStat/>
            <!-- End IncomeType -->
            
            <!-- Beginning Attendance -->
            <AttendanceStat/>
            <!-- End Attendance -->
            
            <!-- Beginning Users -->
            <UsersStat/>
            <!-- End Users -->

            
        </section>
        
        <section class="grid grid-cols-1 gap-4 mt-6">
            <!-- Beginning Income Detail -->
            <IncomeDetailStat/>
            <!-- End Income Detail -->
        </section>

    </section>
</template>
