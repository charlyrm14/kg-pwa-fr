<script setup lang="ts">
    import { useChat, type HistoryChatMessage } from '#imports';
    import MessageCard from '~/components/user/chat/MessageCard.vue';
    import SkeletonChat from '~/components/user/chat/SkeletonChat.vue';

    definePageMeta({
        middleware: ['auth']
    })
    
    const { 
        createChat, 
        fetchHistoryChat,
        sendMessage 
    } = useChat()

    const message = ref<string>('')
    const isSubmitting = ref<boolean>(false)

    const { data: chatData, refresh } = await useAsyncData(
        'chat-init-session',
        async () => {

            let chat = null
            let history = null

            try {

                chat = await createChat({
                    title: null,
                    chat_type_id: 3
                })

                if (chat?.data?.uuid) {
                    history = await fetchHistoryChat(chat.data.uuid)
                }

            } catch (err) {
                console.error('Error creating chat', err)
            }

            return {
                chat,
                history
            }
        },
        {
            lazy: false,
            default: () => ({
                chat: null,
                history: null
            }),
            server: false
        }
    ) 

    const messages = computed(() => {
        return chatData.value?.history?.messages ?? []
    })

    const handleSubmit = async() => {
        if(!chatData?.value?.chat?.data?.uuid) return

        const text = message.value.trim()

        if (!text || isSubmitting.value) return

        isSubmitting.value = true

        const idUserMessage = Math.floor(Math.random() * 100) + 1

        try {

            const userMessage: HistoryChatMessage = {
                id: idUserMessage,
                message: text,
                sender_type: "Usuario",
                created_at: getTodayDate(),
                user: {
                    name: chatData?.value?.history?.chat?.created_by ?? 'Unknown',
                    last_name: "",
                    email: ""
                }
            }

            chatData?.value?.history?.messages.push(userMessage)

            const response = await sendMessage(chatData?.value?.chat?.data?.uuid, text)

            if(response) {
                const iAResponse = {
                    id: idUserMessage + 1,
                    message: text,
                    sender_type: "AI",
                    created_at: getTodayDate(),
                    user: {
                        name: chatData?.value?.history?.chat?.type ?? 'Unknown',
                        last_name: "",
                        email: ""
                    }
                }

                chatData?.value?.history?.messages.push(iAResponse)
            } 

        } catch(error) {
            console.error(error)
            const iAErrorResponse = {
                id: idUserMessage + 1,
                message: "Servicio temporalmente suspendido, intentalo de nuevo más tarde",
                sender_type: "AI",
                created_at: getTodayDate(),
                user: {
                    name: chatData?.value?.history?.chat?.type ?? 'Unknown',
                    last_name: "",
                    email: ""
                }
            }

            chatData?.value?.history?.messages.push(iAErrorResponse)
        } finally {
            isSubmitting.value = false
            message.value = ''
        }
    }
    
</script>

<template>
    <section>

        <section v-if="!chatData?.chat">
            <SkeletonChat/>
        </section>

        <section v-else>
            
            <div class="h-[calc(100vh-64px)] flex flex-col pb-2 md:pb-20">
                <div class="flex-1 overflow-y-auto space-y-4 p-4 scroll-smooth">
                    <div v-if="messages.length">
                        <MessageCard 
                            v-for="message in messages"
                            :key="message.id"
                            :message="message"/>
                    </div>
                    <div v-else class="h-full flex items-center justify-center">
                        <p class="text-blue-500 text-lg font-bold">
                            ¿Quieres mejorar tu técnica de nado, conocer las últimas noticias olímpicas o recibir tips de nutrición deportiva? Estoy aquí para conversar sobre tu pasión por la natación y el rendimiento físico. ¡Hablemos de deporte!
                        </p>
                    </div>
                </div>

                <div class="w-full mx-auto px-2 pb-4">

                        <div class="relative flex items-center">
                            
                            <input
                                type="text"
                                placeholder="Pregunta sobre natación o deportes"
                                v-model="message"
                                :disabled="isSubmitting"
                                class="w-full p-4 pr-16 text-gray-800 border border-gray-200 dark:border-dark-soft bg-white dark:bg-dark-extralight dark:text-white rounded-full focus:outline-none shadow-md transition-all"
                                @keydown.enter.prevent="handleSubmit"/>

                            <button
                                type="button"
                                :disabled="message === '' || isSubmitting"
                                class="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:opacity-75 transition-colors"
                                :class="message !== '' && !isSubmitting
                                    ? 'bg-blue-500 cursor-pointer'
                                    : 'bg-blue-300 cursor-not-allowed'"
                                @click.prevent="handleSubmit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                            </button>

                        </div>
                </div>

            </div>

        </section>
    </section>
</template>
