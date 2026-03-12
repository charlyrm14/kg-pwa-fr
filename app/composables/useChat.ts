import { createChatDataSource, fetchHistoryChatDataSource, sendMessageDataSource } from "~/data/chat/chat.datasource"

export function useChat () {

    const createChat = async(payload: CreateChatPayload) => {
        try {
            return await createChatDataSource(payload)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    const fetchHistoryChat = async(chatUuid: string) => {
        try {
            return await fetchHistoryChatDataSource(chatUuid)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    const sendMessage = async(chatUuid: string, message: string) => {
        try {
            return await sendMessageDataSource(chatUuid, message)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    return {
        createChat,
        fetchHistoryChat,
        sendMessage
    }
}