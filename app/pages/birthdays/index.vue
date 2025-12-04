<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
    import { useUserBirthday } from '#imports';
    import { 
        backgroundColorByGender, 
        textColorByGender, 
        borderColorByGender 
    } from '#imports';

    const { $confetti } = useNuxtApp()
    const { fetchUsersBirthday } = useUserBirthday();

    const { data: usersBirthdayData } = await useAsyncData('users-birthdays', async() => fetchUsersBirthday() )

    onMounted(() => {
        const users = usersBirthdayData.value?.data || []

        if (users.length > 0) {
            $confetti.start()
        }

        setTimeout(() => {
            $confetti.stop()
        }, 4000)
    })
</script>

<template>
    <section>

        <section class="relative overflow-hidden">
            <SectionTitle title="Cumpleañeros del día"/>
            <p class="dark:text-gray-400 font-extralight text-sm md:text-lg"> 
                Descubre quiénes están celebrando su cumpleaños hoy 
            </p>
            <p class="dark:text-white font-extralight text-sm md:text-lg mt-4">
                ¡De parte de <span class="text-blue-500 font-bold"> King Dreams </span>, les deseamos todo lo mejor hoy y siempre!
            </p>
            <div
                v-if="(usersBirthdayData?.data || []).length > 0" 
                class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div
                    v-for="user in usersBirthdayData?.data" 
                    :key="user.uuid"
                    class="bg-white dark:bg-dark-extralight rounded-lg p-4 shadow">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-4">
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAM8Jck2fkmmr1OMvbM0JQaG0yaaJaNFZmaKt2n4YWYvfsHvQhvpr0gVA3cj87723MyU&usqp=CAU" 
                                    :alt="user?.name"
                                    class="w-20 rounded-full border-4"
                                    :class="borderColorByGender(user?.profile?.gender)">
                                <div>
                                    <p class="dark:text-white text-lg font-extralight"> {{ user?.name}} 
                                        <span class="block text-base font-bold"> {{ user?.profile?.age }} años </span>
                                    </p>
                                    <p class="text-pink-500 text-sm"> ¡Muchas felicidades! </p>
                                </div>
                            </div>
                            <div 
                                class="rounded-full p-2"
                                :class="backgroundColorByGender(user?.profile?.gender)">
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
                                    class="lucide lucide-cake-icon lucide-cake"
                                    :class="textColorByGender(user?.profile?.gender)">
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
            <div v-else
                class="mt-8">
                    <p class="text-pink-500 font-extralight text-sm md:text-xl"> 
                        ¡No hay cumpleaños hoy! Pero siempre es un buen momento para celebrar la vida y la amistad. 
                    </p>
            </div>

        </section>
        
    </section>
</template>

