export function useInstallApp () {

    const isInstallable = ref(false)
    let deferredPrompt: any = null

    if (process.client) {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault()
            deferredPrompt = e
            isInstallable.value = true
        })
    }

    async function install() {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        await deferredPrompt.userChoice
        deferredPrompt = null
        isInstallable.value = false
    }

    return {
        isInstallable,
        install
    }
}
