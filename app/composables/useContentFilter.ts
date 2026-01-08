import type { ContentTypeSlug } from "#imports"

export function useContentFilter(contents?: any[]) {

    const route = useRoute()
    const typeSlug = route.params.typeSlug

    const typeSlugParam = computed(() => {
        return Array.isArray(typeSlug) ? typeSlug[0] : typeSlug as string
    })

    const pageHeaderTitle = computed<ContentTypeSlug>(() => {
        const validTypes: ContentTypeSlug[] = ['noticias', 'eventos', 'consejos', 'nutricion']

        if(validTypes.includes(typeSlugParam.value as ContentTypeSlug)) {
            return typeSlugParam.value as ContentTypeSlug
        }

        return 'noticias'
    })

    const contentFilter = computed(() => {
        
        if (!typeSlugParam.value) return []
        
        return contents?.filter(content => content.type.toUpperCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') === typeSlugParam.value!.toUpperCase())
    })

    return {
        pageHeaderTitle,
        contentFilter
    }
}