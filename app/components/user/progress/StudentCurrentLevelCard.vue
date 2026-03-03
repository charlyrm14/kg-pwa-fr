<script setup lang="ts">
    import Star from '~/assets/media/star.png'
    import { 
        iconSwimProgram, 
        type CurrentLevelCategory, 
        type NextLevelCategory, 
        type Program  
    } from '#imports';


    defineProps<{
        program: Omit<Program, 'is_sequential' | 'is_active' | 'categories'>
        currentLevel: CurrentLevelCategory
        nextLevel: NextLevelCategory
    }>()

</script>

<template>
    <div class="relative overflow-hidden rounded-4xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-4 shadow-xl dark:border dark:border-slate-800">
        <img 
            :src="iconSwimProgram(program?.id)"
            :alt="currentLevel?.category_description"
            class="absolute right-2 top-2 w-25 md:w-28 opacity-90 pointer-events-none select-none drop-shadow-xl drop-shadow-cyan-500"/>

        <!-- Beginning Title -->
        <div class="flex flex-col items-start gap-3 mb-3">
            <div class="flex justify-between items-center gap-x-2">
                <img 
                    :src="Star" 
                    :alt="currentLevel?.category_slug"
                    class="w-5 h-5 drop-shadow-xl/50 drop-shadow-amber-500">
                <h2 class="text-xl font-semibold text-white"> {{ currentLevel?.category_name }} </h2>
            </div>
            <span class="ml-2 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/20 text-green-400">
                Nivel actual
            </span>
        </div>
        <!-- End Title -->


        <!-- Beginning Skills progress -->
        <div class="flex items-center gap-2 text-slate-300 text-xs md:text-base mb-4">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
            </span>
            <span>
                <strong class="text-green-400"> 
                    {{ currentLevel?.skills_completed ?? 0 }} de {{ currentLevel?.skills_total ?? 0 }} 
                </strong> habilidades completadas
            </span>
        </div>
        <!-- End Skills progress -->

        <div class="flex justify-end my-2">
            <span class="text-green-500 font-bold text-base md:text-lg"> 
                {{ currentLevel?.progress_percentage ?? 0 }}% 
            </span>
        </div>

        <!-- Beginning Progress bar -->
        <div>
            <div class="h-3 w-full bg-slate-700 rounded-full overflow-hidden mt-2">
                <div
                    class="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500"
                    :style="`width: ${currentLevel?.progress_percentage ?? 0}%`"></div>
            </div>
            <div class="text-right text-green-400 text-sm font-semibold mt-1"></div>
        </div>
        <!-- End Progress bar -->


        <!-- Beginning Description -->
        <p class="text-slate-400 text-sm leading-relaxed mb-4 max-w-[75%] my-3">
            {{ currentLevel?.category_description }}
        </p>
        <!-- End Description -->


        <!-- Beginning Next level -->
        <div class="flex items-center gap-2 text-sky-400 font-medium text-sm">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
            </span>
            <span> Próximo nivel → {{ nextLevel?.category_name }} </span>
        </div>
        <!-- End Next level -->

    </div>
</template>