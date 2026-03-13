<script setup lang="ts">
    import PaymentDistribution from '~/components/admin/analytics/PaymentDistribution.vue';
    import AttendancesSummary from '~/components/admin/analytics/AttendancesSummary.vue';
    import UsersComposition from '~/components/admin/analytics/UsersComposition.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import PaymentTimeline from '~/components/admin/analytics/PaymentTimeline.vue';
    import { useAnalytic } from '#imports';

    definePageMeta({
        layout: 'admin',
        middleware: ['auth']
    })

    const route = useRoute()

    const { getAnalyticsData } = useAnalytic()

    const { data: dashboard, pending, refresh } = await useAsyncData(
        () => `analytics-${route.query.month ?? 'current'}`,
        () => getAnalyticsData(route.query.month),
        {
            server: true,
            lazy: false,
            default: () => ({
                payments: null,
                attendances: null,
                users: null,
                revenue: null
            })
        }
    )

    const paymentDistribution = computed(() => dashboard?.value?.payments ?? null)
    const attendancesSummary = computed(() => dashboard?.value?.attendances ?? null)
    const usersComposition = computed(() => dashboard?.value?.users ?? null)
    const revenueTimeline = computed(() => dashboard?.value?.revenue ?? null)

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

            <!-- Beginning Payment Distribution -->
            <PaymentDistribution
                v-if="paymentDistribution"
                :payment-distribution="paymentDistribution?.data"/>
            <!-- End Payment Distribution -->
            
            <!-- Beginning Attendance Summary -->
            <AttendancesSummary
                v-if="attendancesSummary"
                :attendance-summary="attendancesSummary?.data"/>
            <!-- End Attendance Summary -->
            
            <!-- Beginning Users Composition -->
            <UsersComposition
                v-if="usersComposition"
                :users="usersComposition?.data"/>
            <!-- End Users Composition -->

            
        </section>
        
        <section class="grid grid-cols-1 gap-4 mt-6">
            <!-- Beginning Payment Timeline -->
            <PaymentTimeline
                v-if="revenueTimeline"
                :revenue="revenueTimeline?.data"/>
            <!-- End Payment Timeline -->
        </section>

    </section>
</template>
