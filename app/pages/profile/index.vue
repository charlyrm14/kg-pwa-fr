<script setup lang="ts">
    import CoverUserProfile from '~/assets/media/pool.png';
    import { profileTabs } from '#imports';
    import { useUserStore } from '~/stores/users';
    import AddHobbies from '~/components/user/profile/AddHobbies.vue';
    import { useModalManager } from '#imports';
    import SelectProfileImage from '~/components/user/profile/SelectProfileImage.vue';
    
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
                <div class="w-full h-50 md:h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <ClientOnly>
                        <img 
                            :src="CoverUserProfile" 
                            alt="Cover profile" 
                            class="w-full h-full object-cover brightness-60"/>
                    </ClientOnly>
                </div>
                <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div class="p-1 rounded-full bg-white dark:bg-dark-soft border-3 border-white dark:border-dark-extralight shadow-lg relative">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAM8Jck2fkmmr1OMvbM0JQaG0yaaJaNFZmaKt2n4YWYvfsHvQhvpr0gVA3cj87723MyU&usqp=CAU" 
                            alt="Profile"
                            class="w-30 h-30 md:w-40 md:h-40 rounded-full object-cover"/>
                        <button @click="open('SelectProfileImageModal')" class="absolute -bottom-1 right-2 bg-white text-black dark:bg-dark-soft p-2 rounded-full dark:text-white cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-21 md:mt-25">
            <h1 
                v-gsap.whenVisible.animateText.once.slow
                class="text-center text-2xl dark:text-white font-extrabold"> 
                    {{ user?.name ?? 'unknown' }} {{ user?.last_name ?? '' }}
            </h1>
        </section>

        <section class="mt-6">
            <nav class="flex justify-start items-center gap-x-6">
                <button
                    v-for="tab in profileTabs()"
                    :key="tab.id"
                    class="cursor-pointer hover:opacity-75 text-lg"
                    :class="activeTab === tab.id ? 'border-b-4 border-blue-500 dark:text-white font-extrabold' : 'text-gray-400'"
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

        <SelectProfileImage
            v-if="isOpen('SelectProfileImageModal')"
            @closeSelectProfileImageModal="close"/>

        <AddHobbies
            v-if="isOpen('AddHobbiesModal')"
            @closeAddHobbiesModal="close"/>

    </section>
</template>