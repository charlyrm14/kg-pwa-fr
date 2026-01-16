<script setup lang="ts">
    import ContenderItem from './ContenderItem.vue';
    import type { RankingDetail } from '#imports';

    const props = defineProps<{
        users: RankingDetail[]
    }>()

    const otherCompetitors = props.users.filter(usr => ![1,2,3].includes(usr.position))
    
</script>

<template>
    <div class="bg-white dark:bg-dark-extralight rounded-lg p-4 shadow space-y-2">

        <!-- Beginning Contender Item -->  
        <ContenderItem
            v-for="(user, index) in otherCompetitors"
            :key="user.id"
            :user="user"
            :isLast="index === otherCompetitors.length - 1"/>
        <!-- End Contender Item -->
    </div>
</template>