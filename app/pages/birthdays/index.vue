<script setup lang="ts">
    import { useUserBirthday } from '#imports';
    import { 
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

    const totalUsers = computed(() => {
        return usersBirthdayData.value?.data?.length
    })

</script>

<template>
    <section>

        <!-- Beginning Banner -->
        <section>
            <div class="bg-[url('/media/birthdays-balloons.png')] bg-cover bg-center p-4 md:p-6 rounded-4xl h-52 sm:h-56 md:h-70 lg:h-72 relative overflow-hidden brightness-60">
                <div class="absolute inset-0 bg-black/40"></div>
                <div class="relative flex flex-col h-full justify-between">
                    <div class="flex justify-between items-center gap-x-3 p-4">
                        <span class="bg-fuchsia-500 text-white rounded-full px-4 py-1 text-xs sm:text-sm font-extrabold">
                            {{ totalUsers }} cumpleañeros
                        </span>
                    </div>
                    <div class="space-y-1 p-4">
                        <h4 class="text-white font-bold text-3xl sm:text-2xl md:text-3xl leading-tight">
                            ¡Deséales un gran día!
                        </h4>
                        <span class="inline-flex items-center gap-x-2 text-sm text-white/90">
                            ¡De parte de King Dreams, les deseamos todo lo mejor hoy y siempre!
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Banner -->
        
        <!-- Beginning Card Birthday -->
        <section class="mt-6 space-y-3">
            <div v-if="(usersBirthdayData?.data || []).length > 0" class="space-y-3">
                <div class="flex justify-between items-center">
                    <h2 class="dark:text-white font-extrabold text-xl"> Hoy ({{ totalUsers }}) </h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper-icon lucide-party-popper dark:text-white"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>
                </div>
                <div v-for="user in usersBirthdayData?.data" :key="user.uuid" class="bg-white dark:bg-dark-light rounded-4xl p-4 shadow dark:shadow-none">
                    <div class="flex items-center gap-x-3">
                        <div class="rounded-full" :class="`border-4 ${borderColorByGender(user?.profile?.gender)}`">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAM8Jck2fkmmr1OMvbM0JQaG0yaaJaNFZmaKt2n4YWYvfsHvQhvpr0gVA3cj87723MyU&usqp=CAU" 
                                alt="User"
                                class="w-15 rounded-full">
                        </div>
                        <div>
                            <h4 class="dark:text-white text-xl font-extrabold"> {{ user?.name}} </h4>
                            <span class="font-bold" :class="textColorByGender(user?.profile?.gender)"> {{ user?.profile?.age }} años <span class="text-gray-400 dark:text-gray-500"> · Nivel Tortuga </span> </span>
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
        <!-- End Card Birthday  -->

    </section>
</template>

