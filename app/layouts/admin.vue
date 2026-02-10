<script setup lang="ts">
    import Header from '~/components/admin/layouts/Header.vue';
    import Sidebar from '~/components/admin/layouts/Sidebar.vue';
    import { useAdminSidebar } from '#imports';

    const { isOpen, close } = useAdminSidebar()
    
</script>

<template>
    <div class="min-h-screen antialiased bg-gray-100 dark:bg-dark-extralight">
        <div class="flex flex-col min-h-screen">
            <Header />
            <div class="flex flex-1 overflow-hidden relative">
                <Sidebar/>
                <div v-if="isOpen" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-20 md:hidden" @click="close"></div>
                    <main class="flex-1 overflow-y-auto md:ml-64 transition-all duration-300" :class="isOpen ? 'blur-sm md:blur-0' : ''">
                        <section aria-labelledby="main-content-heading" class="p-4 rounded-xl min-h-[calc(100vh-100px)]">
                            <slot />
                        </section>
                    </main>
                </div>
        </div>
    </div>
</template>
