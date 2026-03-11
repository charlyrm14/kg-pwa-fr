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

    const lastEvent = computed(() => homeData?.value?.data 
        ? homeData?.value?.data?.last_event 
        : null
    )

    const currentLevel = computed(() => homeData?.value?.data 
        ? homeData?.value?.data?.current_level 
        : null
    )
    
    const nextLevel = computed(() => homeData?.value?.data 
        ? homeData?.value?.data?.next_level
        : null
    )

    const lastReminder = computed(() => homeData?.value?.data 
        ? homeData?.value?.data?.last_reminder
        : null
    )

    const birthdays = computed(() => homeData?.value?.data 
        ? homeData?.value?.data?.todays_birthdays
        : null
    )

</script>

<template>
    <section>

        <!-- Beginning Next Event -->
        <section v-if="lastEvent && lastEvent.slug">
            <NextEvent :last-event="lastEvent"/>
        </section>
        <!-- End Next Event -->

        <!-- Beginning Explore -->
        <ContentTypes/>
        <!-- End Explore -->
        
        <!-- Beginning Current Level -->
        <section v-if="currentLevel && nextLevel">
            <CurrentLevel 
                :currentLevel="currentLevel"
                :next_level="nextLevel"/>
        </section>
        <!-- End Current Level -->

        <!-- Beginning Reminder -->
        <section v-if="lastReminder">
            <Reminders :reminder="lastReminder"/>
        </section>
        <!-- End reminder -->

        <!-- Beginning Users birthday -->
        <section v-if="birthdays">
            <BirthdayToday :todays-birthdays="birthdays"/>
        </section>
        <!-- End Users birthday -->

    </section>
</template>


