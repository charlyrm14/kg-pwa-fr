import CardNews from '~/assets/media/card-news.png'
import CardEvents from '~/assets/media/card-events.png'
import CardTips from '~/assets/media/card-tips.png'
import CardNutrition from '~/assets/media/card-nutrition.png'

type ContentTypeSlug = 'news' | 'events' | 'tips' | 'nutrition';

export const contentTitle = (type: ContentTypeSlug = 'news') => {

    const contentType: Record<string, string> = {
        news: 'noticias',
        events: 'eventos',
        tips: 'tips',
        nutrition: 'nutrición'
    }

    return contentType[type]  || contentType.news
}

export const contentTypeImage = (type: string = 'news'): string => {

    const normalized = type?.toLowerCase() as ContentTypeSlug;

    const imageURL: Record<ContentTypeSlug, string> = {
        news: CardNews,
        events: CardEvents,
        tips: CardTips,
        nutrition: CardNutrition
    }

    return imageURL[normalized] ?? imageURL.news
}

export const colorByContentType = (type: string = 'news'): string => {

    const normalized = type?.toLowerCase() as ContentTypeSlug;

    const color: Record<ContentTypeSlug, string> = {
        news: 'bg-amber-500',
        events: 'bg-purple-500',
        tips: 'bg-pink-500',
        nutrition: 'bg-lime-500'
    }

    return color[normalized]  || color.news
}

export const contentSectionTitle = (type: string = 'news'): string => {

    const normalized = type?.toLowerCase() as ContentTypeSlug;

    const contentType: Record<ContentTypeSlug, string> = {
        news: 'Noticias',
        events: 'Eventos',
        tips: 'Tips',
        nutrition: 'Nutrición'
    }

    return contentType[normalized]  || contentType.news
}