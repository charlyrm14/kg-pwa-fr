import { useAlert } from "#imports"

export function useClipboard () {

    const { showAlert } = useAlert()

    const copyToClipboard = async(text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            showAlert('Copiado', 'Texto copiado al portapapeles', 'success')
            
        } catch (error) {
            showAlert('Error', 'No se pudo copiar el texxto', 'error')
        }
    }

    return {
        copyToClipboard
    }
}