const activeModal = ref<string | null>(null)

export function useModalManager() {

    const open = (name: string) => activeModal.value = name 

    const close = () => activeModal.value = null 

    const isOpen = (name: string) => activeModal.value === name 

    return {
        open,
        close,
        isOpen
    }
}