<script setup lang="ts">
    import ContentTypes from '~/components/user/home/ContentTypes.vue';
    import CurrentLevel from '~/components/user/home/CurrentLevel.vue';
    import NextEvent from '~/components/user/home/NextEvent.vue';
    import Reminders from '~/components/user/home/Reminders.vue';
    import WeeklyChallenge from '~/components/user/home/WeeklyChallenge.vue';
</script>

<template>
    <section>
        <ContentTypes/>
        <CurrentLevel/>
        <Reminders/>
        <div v-gsap.whenVisible.stagger.from='{ opacity: 0, y: 50, stagger: 0.4 }'>
            <WeeklyChallenge/>
            <NextEvent/>
        </div>
    </section>
</template>


