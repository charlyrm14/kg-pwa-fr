<script setup lang="ts">
    import BirthdayToday from '~/components/user/home/BirthdayToday.vue';
    import ContentTypes from '~/components/user/home/ContentTypes.vue';
    import CurrentLevel from '~/components/user/home/CurrentLevel.vue';
    import NextEvent from '~/components/user/home/NextEvent.vue';
    import Reminders from '~/components/user/home/Reminders.vue';
    import { useHomeOverview } from '#imports';

    const { data: homeData } = await useAsyncData('home-overview', async() => {
        const { fetchHomeOverview } = useHomeOverview()
        return await fetchHomeOverview()
    })
    
    const nextLevel = computed(() => {
        return homeData.value?.data?.next_level ?? 'TORTUGA'
    })

</script>

<template>
    <section>

        <!-- Beginning Next Event -->
        <section v-if="homeData?.data?.last_event">
            <NextEvent :lastEvent="homeData?.data?.last_event"/>
        </section>
        <!-- End Next Event -->

        <!-- Beginning Explore -->
        <ContentTypes/>
        <!-- End Explore -->
        
        <!-- Beginning Current Level -->
        <section v-if="homeData?.data?.current_level">
            <CurrentLevel 
                :currentLevel="homeData?.data?.current_level"
                :next_level="nextLevel"/>
        </section>
        <!-- End Current Level -->

        <!-- Beginning Reminder -->
        <section v-if="homeData?.data?.last_reminder">
            <Reminders :reminder="homeData?.data?.last_reminder"/>
        </section>
        <!-- End reminder -->

        <!-- Beginning Users birthday -->
        <section v-if="homeData?.data?.todays_birthdays">
            <BirthdayToday :todaysBirthdays="homeData?.data?.todays_birthdays"/>
        </section>
        <!-- End Users birthday -->

    </section>
</template>


