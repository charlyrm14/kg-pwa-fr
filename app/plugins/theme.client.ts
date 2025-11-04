export default defineNuxtPlugin(() => {

    const theme = localStorage.getItem('theme')
    const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const currentTheme = theme || (browserPrefersDark ? 'dark' : 'light')

    const root = document.documentElement

    if(currentTheme === 'dark') {
        root.classList.add('dark')
    } else {
        root.classList.remove('dark')
    }

    localStorage.setItem('theme', currentTheme)
})