import { useAlert } from "#imports"

export function useClipboard () {

    const { showAlert } = useAlert()

    const copyToClipboard = async(text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            showAlert('Copiado', 'Copiado al portapapeles', 'success')
            
        } catch (error) {
            showAlert('Error', 'No se pudo copiar el texto', 'error')
        }
    }

    return {
        copyToClipboard
    }
}