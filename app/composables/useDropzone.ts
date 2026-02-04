import type { UploaderConfig } from "#imports"
import type { DropzoneError } from "~~/shared/types/Media"

export function useDropzone (config: UploaderConfig, onFilesSelected: (files: File[]) => void) {

    const isDragging = ref<boolean>(false)
    const fileInput = ref<HTMLInputElement | null>(null)
    const errors = ref<DropzoneError[]>([])

    const acceptString = computed(() => {
        config.accept.join(',')
    })

    const openFileDialog = () => fileInput?.value?.click()
    

    const onDragOver = () => {
        isDragging.value = true
    }

    const onDragLeave = () => {
        isDragging.value = false
    }

    const onDrop = (e: DragEvent) => {
        isDragging.value = false

        const files = Array.from(e.dataTransfer?.files || [])
        processFiles(files)
    }
    
    
    const onFileChange = (e: Event) => {
        const files = Array.from(
            (e.target as HTMLInputElement).files || []
        )
        processFiles(files)
    }

    const processFiles = (files: File[]) => {

        errors.value = []

        if (files.length > config.maxFiles) {
            errors.value.push({
                type: 'max-files',
                message: `Máximo de ${config.maxFiles} archivos permitido`
            })
        }
        
        let valid = [...files].slice(0, config.maxFiles)

        valid = valid.filter(file => {
            if (!config.accept.includes(file.type)) {
                errors.value.push({
                    type: 'invalid-type',
                    message: `${file.name} tipo de archivo invalido para esta sección`
                })
                return false
            }
            return true
        })

        if (config.maxSizeMB) {
            const maxBytes = config.maxSizeMB * 1024 * 1024

            valid = valid.filter(file => {
                if (file.size > maxBytes) {
                    errors.value.push({
                        type: 'max-size',
                        message: `${file.name} excede el tamaño máximo permitido ${config.maxSizeMB}MB`
                    })
                    return false
                }
                return true
            })
        }

        if (!valid.length) return

        onFilesSelected(valid)
    }

    return {
        isDragging,
        fileInput,
        errors,
        acceptString,
        openFileDialog,
        onDragOver,
        onDragLeave,
        onDrop,
        onFileChange
    }
}