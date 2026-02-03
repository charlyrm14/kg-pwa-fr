export function useImagePicker () {

    const fileInput = ref<HTMLInputElement | null>(null)
    const file = ref<File | null>(null)
    const previewUrl = ref<string | null>(null)

    const openPicker = () => {
        fileInput.value?.click()
    }

    const onSelect = (event: Event) => {

        const target = event.target as HTMLInputElement

        if (!target.files || target.files.length === 0) return

        const selected = target.files[0]

        if(selected === undefined) return

        if (!selected.type.startsWith('image/')) return

        file.value = selected
        previewUrl.value = URL.createObjectURL(selected)
    }

    const cleanupPreview = () => {
        if (previewUrl.value) {
            URL.revokeObjectURL(previewUrl.value)
            previewUrl.value = null
        }
    }

    const reset = () => {
        file.value = null
        cleanupPreview()
    }

    onBeforeUnmount(() => {
        cleanupPreview()
    })

    return {
        fileInput,
        file,
        previewUrl,
        openPicker,
        onSelect,
        reset
    }
}