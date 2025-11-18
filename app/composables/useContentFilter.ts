import type { ContentTypeSlug, Content } from "#imports"

export function useContentFilter(contents?: any[]) {

    const route = useRoute()
    const typeSlug = route.params.typeSlug

    const typeSlugParam = computed(() => {
        return Array.isArray(typeSlug) ? typeSlug[0] : typeSlug as string
    })

    const pageHeaderTitle = computed<ContentTypeSlug>(() => {
        const validTypes: ContentTypeSlug[] = ['news', 'events', 'tips', 'nutrition']

        if(validTypes.includes(typeSlugParam.value as ContentTypeSlug)) {
            return typeSlugParam.value as ContentTypeSlug
        }

        return 'news'
    })

    const contentFilter = computed(() => {
        if (!typeSlugParam.value) return []

        return contents?.filter(content => content.type === typeSlugParam.value!.toUpperCase())
    })

    return {
        pageHeaderTitle,
        contentFilter
    }
}