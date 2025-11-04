export function useTheme() {

    const theme = ref<'light' | 'dark'>('light')

    const applyTheme = (currentTheme: 'light' | 'dark') => {
        const root = document.documentElement

        if(currentTheme === 'dark'){
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }

    const toggleTheme = (color?: 'light' | 'dark') => {
        if(color) {
            theme.value = color
        } else {
            theme.value = theme.value === 'light' ? 'dark': 'light'
        }
        applyTheme(theme.value)
        localStorage.setItem('theme', theme.value)
    }

    onMounted(() => {
        const getSavedTheme = localStorage.getItem('theme')
        const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if(getSavedTheme === 'dark' || getSavedTheme === 'light') {
            theme.value = getSavedTheme as 'light' | 'dark'
        } else {
            theme.value = browserPrefersDark ? 'dark' : 'light'
        }

        applyTheme(theme.value)
    })

    return {
        theme,
        toggleTheme
    }
}