<script setup lang="ts">
    import { type HistoryChatMessage } from '#imports';

    defineProps<{
        message: HistoryChatMessage
    }>()

</script>

<template>
    <div 
        class="space-y-3"
        :class="message?.sender_type === 'Usuario' ? 'flex flex-col items-end my-8 md:my-6' : ''">
        <div 
            class="relative p-4 rounded-2xl md:max-w-[40%] w-fit shadow-md"
            :class="message?.sender_type === 'Usuario' 
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-dark-extralight text-gray-900 dark:text-white'">
            <p 
                class="text-sm leading-relaxed"
                :class="message?.sender_type === 'Usuario'
                    ? 'text-end'
                    : 'text-start'">
                        {{ message?.message }}
                            <span 
                                class="block text-xs"
                                :class="message?.sender_type === 'Usuario'
                                    ? 'text-gray-300'
                                    : 'text-gray-400'"> 
                                        {{ message?.sender_type === 'Usuario' ? message?.user?.name : message?.user?.last_name  }}
                                        {{ `· ${message?.created_at}` }}  
                            </span>
            </p>
            <div 
                class="absolute -bottom-1 w-3 h-3 rotate-45 rounded-sm"
                :class="message?.sender_type === 'Usuario'
                    ? 'right-2.5 bg-blue-500 '
                    : 'left-3 bg-white dark:bg-dark-extralight'"></div>
        </div>
    </div>
</template>