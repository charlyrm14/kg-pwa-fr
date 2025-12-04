<script setup lang="ts">
    import CoverUserProfile from '~/assets/media/card-user-profile.png';
    import { profileTabs } from '#imports';
    import { useUserStore } from '~/stores/users';
    import AddHobbies from '~/components/user/profile/AddHobbies.vue';
    import { useModalManager } from '#imports';
    
    const userStore = useUserStore()
    const { open, isOpen, close } = useModalManager()

    const { data: user } = await useAsyncData('getProfileData', async() => {
        await userStore.fetchUserProfileData()
        return userStore.user ?? null
    })

    const activeTab = ref<number>(1)
    const tabs = profileTabs()

    const toggleActiveTab = (id: number) => {
        activeTab.value = id
    }

    const activeComponents = computed(() => {
        const tab = tabs.find(t => t.id === activeTab.value)
        return tab?.components ?? []
    })

</script>

<template>
    <section>

        <section>
            <div class="relative w-full">
                <div class="w-full h-48 md:h-72 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                    <ClientOnly>
                        <img 
                            :src="CoverUserProfile" 
                            alt="Cover profile" 
                            class="w-full h-full object-cover brightness-40"/>
                    </ClientOnly>
                </div>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div class="p-1 rounded-full bg-white dark:bg-dark-soft border-4 border-white dark:border-dark-soft shadow-lg">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAM8Jck2fkmmr1OMvbM0JQaG0yaaJaNFZmaKt2n4YWYvfsHvQhvpr0gVA3cj87723MyU&usqp=CAU" 
                            alt="Profile"
                            class="w-30 h-30 md:w-40 md:h-40 rounded-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-21 md:mt-25">
            <h1 class="text-center text-2xl dark:text-white font-extrabold"> 
                {{ user?.name ?? 'unknown' }} {{ user?.last_name ?? '' }}
            </h1>
        </section>

        <section class="mt-6">
            <nav class="flex justify-start items-center gap-x-6">
                <button
                    v-for="tab in profileTabs()"
                    :key="tab.id"
                    class="cursor-pointer hover:opacity-75 text-lg"
                    :class="activeTab === tab.id ? 'border-b-4 border-blue-500 dark:text-white' : 'text-gray-400'"
                    @click="toggleActiveTab(tab.id)"> 
                        {{ tab.title}} 
                </button>
            </nav>
        </section>

        <section class="mt-6">
            <template v-if="Array.isArray(activeComponents)">
                <component 
                    v-for="(item, index) in activeComponents"
                    :key="index"
                    :is="item.component ?? item"
                    v-bind="item.props"
                    :user="user"/>
            </template>
            <template v-else>
                <component :is="activeComponents" />
            </template>
        </section>

        <AddHobbies
            v-if="isOpen('AddHobbiesModal')"
            @closeAddHobbiesModal="close"/>

    </section>
</template>