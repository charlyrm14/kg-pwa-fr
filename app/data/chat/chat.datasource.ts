import { MOCK_CREATE_CHAT, MOCK_HISTORY_CHAT } from "~/utils/mocks/chat.mock"
import { createChatApi, fetchHistoryChatApi, sendMessageApi } from "./chat.api"

export const createChatDataSource = async(payload: CreateChatPayload) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_CREATE_CHAT
    }

    return createChatApi(payload)
}

export const fetchHistoryChatDataSource = async(chatUuid: string) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_HISTORY_CHAT.data
    }

    return fetchHistoryChatApi(chatUuid)
}

export const sendMessageDataSource = async(chatUuid: string, message: string) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return
    }

    return sendMessageApi(chatUuid, message)
}