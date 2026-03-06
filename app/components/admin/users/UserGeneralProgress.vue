<script setup lang="ts">
    import Avatar from '~/assets/media/training.webp'
    import { type UserInfo } from '#imports';

    defineProps<{
        user: Pick<UserInfo, 'name' | 'last_name' | 'progress'>
    }>()

</script>

<template>
    <section>
        <div class="w-full bg-white dark:bg-dark-light rounded-2xl p-4 flex items-center gap-4 shadow dark:shadow-none">

            <!-- Avatar -->
            <div class="basis-[20%] sm:basis-[12%] lg:basis-[8%] flex justify-center">
                <img
                    :src="Avatar"
                    alt="Avatar"
                    class="w-16 h-16 md:w-22 md:h-22 rounded-full object-cover border-2 border-blue-500"/>
            </div>

            <!-- Información del alumno -->
            <div class="flex-1 flex flex-col justify-center">
                <h1 class="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">
                    {{ `${user?.name} ${user?.last_name}` }}
                </h1>
                <p class="text-xs md:text-base text-gray-400 mt-1 font-semibold">
                    Nivel • {{ user?.progress?.category_name ?? 'Sin nivel asignado' }}
                </p>
                <span class="text-xs md:text-xl text-blue-500 font-extrabold text-end"> {{ user?.progress?.progress_percentage ?? 0 }}% </span>
                <div class="mt-3 flex items-center gap-3">
                    <div class="w-full bg-gray-200 dark:bg-dark-extraligh h-2 md:h-3 rounded-full overflow-hidden">
                        <div 
                            class="bg-blue-500 h-full rounded-full" 
                            :style="`width:${user?.progress?.progress_percentage ?? 0}%`"></div>   
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>