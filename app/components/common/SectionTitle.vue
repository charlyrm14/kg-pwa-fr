<script setup lang="ts">

    type SectionTitleProps = {
        title?: string
        showIcon?: boolean
        align?: string
    }


    withDefaults(defineProps<SectionTitleProps>(), {
        title: 'Sección título',
        showIcon: false,
        align: 'start',
    })

</script>

<template>
    <h1 
        class="text-xl font-light mb-4 gap-x-3 dark:text-white"
        :class="showIcon ? `flex justify-${align} items-center` : 'flex justify-start items-center'"> 
            {{ title }}
                <slot v-if="showIcon" name="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevron-right">
                            <path d="m9 18 6-6-6-6" />
                    </svg>
                </slot>
    </h1>
</template>
