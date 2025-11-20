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