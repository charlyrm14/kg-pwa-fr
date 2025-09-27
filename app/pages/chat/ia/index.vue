<script setup lang="ts">
    
</script>

<template>
    <section>
        <div class="h-[85vh] md:h-[85vh] lg:h-[85vh] flex flex-col">
            <div class="flex-1 overflow-y-auto space-y-4">
                <div>
                    <div class="space-y-3">
                        <div class="relative bg-white dark:bg-dark-extralight text-gray-900 dark:text-white p-4 rounded-2xl md:max-w-[40%] w-fit shadow-md">
                            <p class="text-start text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit dapibus, sodales ut a sem sociosqu sapien nam eleifend suspendisse, rutrum tristique penatibus himenaeos non suscipit per
                            </p>
                            <div class="absolute -bottom-1 left-3 w-3 h-3 bg-white dark:bg-dark-extralight rotate-45 rounded-sm"></div>
                        </div>
                    </div>
                    <div class="space-y-3 flex flex-col items-end my-8 md:my-6">
                        <div class="relative bg-blue-500 text-white p-4 rounded-2xl md:max-w-[40%] w-fit shadow-md">
                            <p class="text-end text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit dapibus, sodales ut a sem sociosqu sapien nam eleifend suspendisse, rutrum tristique penatibus himenaeos non suscipit per
                            </p>
                            <div class="absolute -bottom-1 right-2.5 w-3 h-3 bg-blue-500 rotate-45 rounded-sm"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full mx-auto">
                <form>
                    <div class="relative flex items-center">
                        
                        <input
                            type="text"
                            placeholder="Pregunta sobre natación o deportes"
                            class="w-full p-4 pr-16 text-gray-800 border border-gray-200 dark:border-dark-soft bg-white dark:bg-dark-extralight dark:text-white rounded-full focus:outline-none shadow-md transition-all"/>

                        <button
                            type="submit"
                            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-400 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                        </button>

                    </div>
                </form>
            </div>

        </div>

    </section>
</template>
