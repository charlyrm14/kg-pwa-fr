<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';

    const contentTab = ref<number>(1)
</script>

<template>
    <section>
        <SectionTitle title="Ranking"/>
        <div class="bg-gray-200/60 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-1 rounded-full flex justify-center items-center">
            <button
                @click="contentTab = 1"
                class="dark:text-white w-full cursor-pointer hover:opacity-75"
                :class="contentTab === 1 ? 'bg-white dark:bg-dark-soft px-4 py-2 rounded-full font-bold' : ''">
                    Semanal
            </button>
            <button
                @click="contentTab = 2"
                class="dark:text-white w-full cursor-pointer hover:opacity-75"
                :class="contentTab === 2 ? 'bg-white dark:bg-dark-soft px-4 py-2 rounded-full font-bold': 'font-light'">
                    Mensual
            </button>
        </div>
    </section>

    <section class="mt-6 ">
        <div class="w-full max-w-xl mx-auto relative h-[450px]">        
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end gap-1 md:gap-2 w-full max-w-lg">
                
                <div class="flex flex-col items-center w-1/3 relative">
                    <div class="absolute -top-26 w-full flex flex-col items-center">
                        <h3 class="font-bold text-lg text-blue-500"> Gabriela R. </h3>
                        <p class="text-sm dark:text-white"> 1400 pts </p>
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

                <div class="flex flex-col items-center w-1/3 relative">
                    <div class="absolute -top-36 w-full flex flex-col items-center">
                        <h3 class="font-bold text-lg text-blue-500"> Valentina H.</h3>
                        <p class="text-sm text-gray-500 dark:text-white"> 1600 pts </p>
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

                <div class="flex flex-col items-center w-1/3 relative">
                    <div class="absolute -top-30 w-full flex flex-col items-center">
                        <h3 class="font-bold text-lg text-blue-500"> André H. </h3>
                        <p class="text-sm dark:text-white"> 1100 pts </p>
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
    </section>

    <section class="mt-12">
        <SectionTitle title="Demas competidores"/>
        <div class="bg-white dark:bg-dark-extralight rounded-lg p-4 shadow">
            <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft pb-2">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-extrabold text-purple-800 flex-shrink-0"> 
                        4 
                    </span>
                    <h4 class="text-gray-500 dark:text-white font-medium"> Virginia Morales </h4>
                </div>
                <span class="text-gray-500 dark:text-white font-medium"> 1000 pts </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft pb-2 mt-4">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-extrabold text-purple-800 flex-shrink-0"> 
                        5 
                    </span>
                    <h4 class="text-gray-500 dark:text-white font-medium"> Regina Morales </h4>
                </div>
                <span class="text-gray-500 dark:text-white font-medium"> 900 pts </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft pb-2 mt-4">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-extrabold text-purple-800 flex-shrink-0"> 
                        6 
                    </span>
                    <h4 class="text-gray-500 dark:text-white font-medium"> Daniela Morales </h4>
                </div>
                <span class="text-gray-500 dark:text-white font-medium"> 800 pts </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft pb-2 mt-4">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-extrabold text-purple-800 flex-shrink-0"> 
                        7 
                    </span>
                    <h4 class="text-gray-500 dark:text-white font-medium"> Nikol Morales </h4>
                </div>
                <span class="text-gray-500 dark:text-white font-medium"> 700 pts </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft pb-2 mt-4">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-extrabold text-purple-800 flex-shrink-0"> 
                        8 
                    </span>
                    <h4 class="text-gray-500 dark:text-white font-medium"> Cristiano Ronaldo </h4>
                </div>
                <span class="text-gray-500 dark:text-white font-medium"> 600 pts </span>
            </div>
            <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft pb-2 mt-4">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-extrabold text-purple-800 flex-shrink-0"> 
                        9 
                    </span>
                    <h4 class="text-gray-500 dark:text-white font-medium"> Leonel Messi </h4>
                </div>
                <span class="text-gray-500 dark:text-white font-medium"> 500 pts </span>
            </div>
            <div class="flex justify-between items-center pb-2 mt-4">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-extrabold text-purple-800 flex-shrink-0"> 
                        10 
                    </span>
                    <h4 class="text-gray-500 dark:text-white font-medium"> Michael Phelps </h4>
                </div>
                <span class="text-gray-500 dark:text-white font-medium"> 400 pts </span>
            </div>
        </div>
    </section>
</template>
