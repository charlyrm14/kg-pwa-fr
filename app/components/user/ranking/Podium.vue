<script setup lang="ts">
    import type { RankingDetail } from '~~/shared/types/Ranking';

    const props = defineProps<{
        users: RankingDetail[]
    }>()

    const firstPosition = computed(() => props.users.find(usr => usr.position === 1))
    const secondPosition = computed(() => props.users.find(usr => usr.position === 2))
    const thirdPosition = computed(() => props.users.find(usr => usr.position === 3))

</script>

<template>
    <div class="w-full max-w-xl mx-auto relative h-[450px]">        
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end gap-1 md:gap-2 w-full max-w-lg">
            
            <div v-if="secondPosition" class="flex flex-col items-center w-1/3 relative">
                <div class="absolute -top-26 w-full flex flex-col items-center">
                    <h3 class="font-bold text-lg text-blue-500"> {{  secondPosition?.detail?.name }} </h3>
                    <p class="text-sm dark:text-white"> {{ secondPosition?.total_points }} pts </p>
                    <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mt-2">
                        <img 
                            src="https://t4.ftcdn.net/jpg/06/26/79/97/360_F_626799714_WPEJfk98y9rOHXetw4Rt4kgVkc1e9Jhz.jpg" 
                            alt="Gabriela R." 
                            class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="w-full h-40 rounded-lg shadow-xl" style="background-color: #ffb799; border: 1px solid #ff9966;">
                    <p class="text-6xl font-extrabold text-white/50 pt-8 text-center">2</p>
                </div>
            </div>

            <div v-if="firstPosition" class="flex flex-col items-center w-1/3 relative">
                <div class="absolute -top-36 w-full flex flex-col items-center">
                    <h3 class="font-bold text-lg text-blue-500"> {{ firstPosition?.detail?.name }} </h3>
                    <p class="text-sm text-gray-500 dark:text-white"> {{ firstPosition?.total_points }} pts </p>
                    <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg mt-2 relative">
                        <img 
                            src="https://c.stocksy.com/a/7o4900/z9/2163435.jpg" 
                            alt="Valentina H." 
                            class="w-full h-full object-cover">
                        <span class="absolute -top-2 right-2 transform translate-x-1/4 -translate-y-1/4 text-3xl" role="img" aria-label="Corona">
                            👑
                        </span>
                    </div>
                </div>
                <div class="w-full h-64 rounded-lg shadow-xl" style="background-color: #ffe082; border: 1px solid #ffd54f;">
                    <p class="text-8xl font-extrabold text-white/50 pt-16 text-center">1</p>
                </div>
            </div>

            <div v-if="thirdPosition" class="flex flex-col items-center w-1/3 relative">
                <div class="absolute -top-30 w-full flex flex-col items-center">
                    <h3 class="font-bold text-lg text-blue-500"> {{ thirdPosition?.detail?.name }} </h3>
                    <p class="text-sm dark:text-white"> {{ thirdPosition?.total_points }} </p>
                    <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mt-2">
                        <img 
                            src="https://swimswam.com/wp-content/uploads/2023/07/Fukuoka23_Heats_July24SMITH-Regan016.jpg" 
                            alt="André H." 
                            class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="w-full h-32 rounded-lg shadow-xl" style="background-color: #d1c4e9; border: 1px solid #b39ddb;">
                    <p class="text-6xl font-extrabold text-white/50 pt-4 text-center">3</p>
                </div>
            </div>

        </div>
    </div>
</template>