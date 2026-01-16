<script setup lang="ts">
    import type { RankingDetail } from '#imports';

    defineProps<{
        user: RankingDetail
        isLast: Boolean
    }>()

</script>

<template>
    <div class="flex justify-between items-center space-y-3" :class="!isLast ? 'border-b border-gray-200 dark:border-dark-soft' : ''">
        <div class="flex justify-start items-center gap-x-4">
            <span class="bg-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-extrabold text-purple-800 flex-shrink-0"> 
                {{ user?.position }} 
            </span>
            <h4 class="text-gray-500 dark:text-white font-medium"> 
                {{ user?.detail?.name }}
            </h4>
        </div>
        <span class="text-gray-500 dark:text-white font-medium"> {{ user?.total_points }} pts </span>
    </div>
</template>
