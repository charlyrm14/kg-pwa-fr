<script setup lang="ts">

    interface BreadcrumbProps {
        heading?: string
        primarySection?: string
        primaryLink?: string
        secondarySection?: string
    }

    const props = withDefaults(defineProps<BreadcrumbProps>(), {
        heading: 'Section title',
        primarySection: 'Primary section',
        primaryLink: '/',
        secondarySection: 'Secondary sections'
    })

</script>

<template>
    <h1 class="dark:text-white font-bold text-xl"> {{ heading }} </h1>
        <nav class="flex mt-3" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-2 sm:space-x-3">
                <li class="flex items-center">
                    <NuxtLink 
                        :to="primaryLink" 
                        class="text-base font-medium text-gray-500 hover:text-blue-600 transition duration-150 dark:text-gray-400 dark:hover:text-blue-400">
                            {{ primarySection }}
                    </NuxtLink>
                </li>

                <li class="flex items-center">
                    <svg class="h-5 w-5 text-gray-400 mx-2 sm:mx-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-base font-semibold text-blue-600 dark:text-blue-400">
                        {{ secondarySection }}
                    </span>
                </li>
            </ol>
        </nav>
</template>
