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