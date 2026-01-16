<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
    import ContendersTable from '~/components/user/ranking/ContendersTable.vue';
    import Podium from '~/components/user/ranking/Podium.vue';
    import { useRanking } from '#imports';
    import type { TypePeriod } from '~~/shared/types/Ranking';
    import { periodSectionTitle } from '#imports';
    
    const { $confetti } = useNuxtApp()
    const { fetchRanking } = useRanking()

    const period = ref<TypePeriod>('semanal')

    const { data: rankings } = await useAsyncData(
        () => `users-ranking-${period.value}`,
        () => fetchRanking({period: period.value}),
        { watch: [period] }
    )

    const currentRanking = computed(() => {
        return rankings.value?.data?.data?.[0] ?? null
    })

    const rankingUsers = computed(() => {
        return currentRanking.value?.users ?? []
    })
    
    const otherCompetitors = computed(() =>
        rankingUsers.value.filter(u => ![1, 2, 3].includes(u.position))
    )

    const podiumUsers = computed(() =>
        rankingUsers.value.filter(u => [1, 2, 3].includes(u.position))
    )

    const periodTitle = computed(() => periodSectionTitle(period.value))

    onMounted(() => {
        $confetti.start()
        setTimeout(() => {
            $confetti.stop()
        }, 4000)
    });

</script>

<template>
    <section>
        
        <section>
            <SectionTitle title="Ranking"/>
            <div class="bg-gray-200/60 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-1 rounded-full flex justify-center items-center">
                <button
                    @click="period = 'semanal'"
                    class="dark:text-white w-full cursor-pointer hover:opacity-75"
                    :class="period === 'semanal' ? 'bg-white dark:bg-dark-soft px-4 py-2 rounded-full font-bold' : ''">
                        Semanal
                </button>
                <button
                    @click="period = 'mensual'"
                    class="dark:text-white w-full cursor-pointer hover:opacity-75"
                    :class="period === 'mensual' ? 'bg-white dark:bg-dark-soft px-4 py-2 rounded-full font-bold': 'font-light'">
                        Mensual
                </button>
            </div>
        </section>
        
        <section v-if="currentRanking">

            <section class="flex justify-center items-center py-4 mt-4">
                <h2 class="text-4xl font-extrabold dark:text-white"> {{ periodTitle }} </h2>
            </section>

            <section class="mt-6 ">
                <Podium v-if="podiumUsers.length" :users="podiumUsers"/>
            </section>

            <section v-if="otherCompetitors.length" class="mt-12">

                <SectionTitle title="Demas competidores"/>

                <!-- Beginning Contenders Table -->
                <ContendersTable :users="otherCompetitors"/>
                <!-- End Contenders Table -->

            </section>

        </section>

    </section>
</template>
