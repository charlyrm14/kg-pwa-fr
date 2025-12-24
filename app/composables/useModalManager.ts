type ModalPayload = Record<string, any> | null

const activeModal = ref<string | null>(null)
const modalPayload = ref<Record<string, any> | null>(null)

export function useModalManager() {

    const open = (name: string, payload: Record<string, any> | null = null) => {
        activeModal.value = name
        modalPayload.value = payload
    }

    const close = () => {
        activeModal.value = null
        modalPayload.value = null
    }

    const isOpen = (name: string) => activeModal.value === name 

    const getPayload = <T = any>() => modalPayload.value as T | null

    return {
        open,
        close,
        isOpen,
        getPayload,
        modalPayload
    }
}