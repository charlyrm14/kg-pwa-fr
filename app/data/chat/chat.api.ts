import type { CreateChatResponse, HistoryChatResponse, MessageChatResponse } from "~~/shared/types/Chat"

export const createChatApi = async(payload: CreateChatPayload): Promise<ApiResponse<CreateChatResponse>> => {

    const config = useRuntimeConfig()

    return await $fetch(
        `${config.public.apiBaseUrl}/chat`,
        {
            method: 'POST',
            body: payload
        }
    )
}

export const fetchHistoryChatApi = async(chatUuid: string): Promise<HistoryChatResponse> =>  {

    const config = useRuntimeConfig()

    const response = await $fetch<ApiResponse<HistoryChatResponse>>(
        `${config.public.apiBaseUrl}/chat/${chatUuid}/messages`
    )

    return response.data
}

export const sendMessageApi = async(chatUuid: string, message: string): Promise<ApiResponse<MessageChatResponse>> => {

    const config = useRuntimeConfig()

    return await $fetch(
        `${config.public.apiBaseUrl}/chat/${chatUuid}/messages`,
        {
            method: 'POST',
            body: {message}
        }
    )
}