<script setup lang="ts">

    type PageHeaderProps = {
        title?: string
        link?: string
    }

    withDefaults(defineProps<PageHeaderProps>(), {
        title: 'Mi título',
        link: '/'
    })

</script>

<template>
    <div class="flex items-center mt-3">
        <NuxtLink 
            class="flex-shrink-0 dark:text-white cursor-pointer hover:opacity-75"
            :to="link">                        
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </NuxtLink>
        <div class="flex-grow text-center">
            <h1 class="text-xl md:text-4xl dark:text-white font-light capitalize"> {{ title }} </h1>
        </div>
    </div>
</template>
