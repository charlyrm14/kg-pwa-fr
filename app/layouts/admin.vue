<script setup lang="ts">

    import Header from '~/components/admin/layouts/Header.vue';
    import Sidebar from '~/components/admin/layouts/Sidebar.vue';
    
</script>

<template>
    <div class="min-h-screen antialiased bg-gray-100 dark:bg-dark-extralight">
        <div class="flex flex-col min-h-screen">
            <Header/>
            <div class="flex flex-1 overflow-hidden">
                <Sidebar/>
                <main class="flex-1 px-4 overflow-y-auto md:ml-64">
                    <section aria-labelledby="main-content-heading" class="p-4 md:py-4 rounded-xl min-h-[calc(100vh-100px)]">
                        <slot/>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>
