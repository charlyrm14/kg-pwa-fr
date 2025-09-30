<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
</script>

<template>
    <section>
        <SectionTitle title="Cumpleañeros del día"/>
        <p class="dark:text-gray-400 font-extralight text-sm md:text-lg"> 
            Descubre quiénes están celebrando su cumpleaños hoy 
        </p>
        <p class="dark:text-white font-extralight text-sm md:text-lg mt-4">
            ¡De parte de <span class="text-blue-500 font-bold"> King Dreams </span>, les deseamos todo lo mejor hoy y siempre!
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="bg-white dark:bg-dark-extralight rounded-lg p-4 shadow">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-x-4">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAM8Jck2fkmmr1OMvbM0JQaG0yaaJaNFZmaKt2n4YWYvfsHvQhvpr0gVA3cj87723MyU&usqp=CAU" 
                            alt="user profile 1"
                            class="w-20 rounded-full border-4 border-gray-300 dark:border-dark-soft">
                        <div>
                            <p class="dark:text-white text-lg font-bold"> Jhon Williams <span class="block text-sm font-light"> 26 años </span></p>
                            <p class="text-pink-500"> ¡Muchas felicidades! </p>
                        </div>
                    </div>
                    <div class="bg-pink-100 rounded-full p-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="34" 
                            height="34" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="lucide lucide-cake-icon lucide-cake text-pink-500">
                                <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                                <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
                                <path d="M2 21h20"/>
                                <path d="M7 8v3"/>
                                <path d="M12 8v3"/>
                                <path d="M17 8v3"/>
                                <path d="M7 4h.01"/>
                                <path d="M12 4h.01"/>
                                <path d="M17 4h.01"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>

</style>