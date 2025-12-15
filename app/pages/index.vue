<script setup lang="ts">
    import BirthdayToday from '~/components/user/home/BirthdayToday.vue';
    import ContentTypes from '~/components/user/home/ContentTypes.vue';
    import CurrentLevel from '~/components/user/home/CurrentLevel.vue';
    import NextEvent from '~/components/user/home/NextEvent.vue';
    import Reminders from '~/components/user/home/Reminders.vue';
    
</script>

<template>
    <section>

        <!-- Beginning Next Event -->
        <NextEvent/>
        <!-- End Next Event -->

        <!-- Beginning Explore -->
        <ContentTypes/>
        <!-- End Explore -->
        
        <!-- Beginning Current Level -->
        <CurrentLevel/>
        <!-- End Current Level -->

        <!-- Beginning Reminder -->
        <Reminders/>
        <!-- End reminder -->

        <!-- Beginning Users birthday -->
        <BirthdayToday/>
        <!-- End Users birthday -->

    </section>
</template>


