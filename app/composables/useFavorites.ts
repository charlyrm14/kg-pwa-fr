const STORAGE_KEY = 'favorites'

export function useFavorites () {

    type Favorite = {
        title: string
        slug: string
        content: string
        author: string | null
        type: string
        created_at: string
    }

    const favorites = ref<Favorite[] | null>([])

    const getFavorites = () => {
        if(process.client) {
            const data = localStorage.getItem(STORAGE_KEY)
            return favorites.value = data ? JSON.parse(data) : []
        }
    }

    const addToFavorites = (content: Favorite): void => {
        if(!favorites.value?.some(fav => fav.slug === content.slug)) {
            favorites.value?.push(content)
            save()
        }
    }

    const save = (): void => {
        if(process.client) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
        }
    }

    const removeFromFavorite = (slug: string) => {
        favorites.value = favorites.value?.filter(fav => fav.slug !== slug) ?? []
        save()
    }

    const isFavorite = (slug: string) => {
        return favorites.value?.some(fav => fav.slug === slug)
    }

    getFavorites()

    return {
        favorites,
        getFavorites,
        addToFavorites,
        removeFromFavorite,
        isFavorite
    }
}