import CardNews from '~/assets/media/card-news.png'
import CardEvents from '~/assets/media/card-events.png'
import CardTips from '~/assets/media/card-tips.png'
import CardNutrition from '~/assets/media/card-nutrition.png'
import type { ContentTypeSlug } from '#imports'

/**
 * The function `contentTitle` returns the corresponding translated content type based on the provided
 * content type slug, defaulting to 'noticias' for 'news'.
 * @param {ContentTypeSlug} [type=news] - The `type` parameter in the `contentTitle` function is a
 * string representing the type of content. It has a default value of `'news'` and can be one of the
 * following values: `'news'`, `'events'`, `'tips'`, or `'nutrition'`.
 * @returns The function `contentTitle` returns the corresponding value in Spanish for the given
 * content type slug. If the provided content type slug is not found in the `contentType` object, it
 * defaults to returning the value for the 'news' content type, which is 'noticias'.
 */
export const contentTitle = (type: ContentTypeSlug = 'news') => {

    const contentType: Record<string, string> = {
        news: 'noticias',
        events: 'eventos',
        tips: 'tips',
        nutrition: 'alimentación'
    }

    return contentType[type]  || contentType.news
}

/**
 * The function `contentTypeImage` returns the corresponding image URL based on the provided content
 * type, defaulting to a news image if no match is found.
 * @param {string} [type=news] - The `type` parameter in the `contentTypeImage` function is a string
 * that specifies the type of content for which you want to retrieve the corresponding image URL. It
 * has a default value of `'news'` if not provided.
 * @returns The function `contentTypeImage` returns the URL of an image based on the `type` parameter
 * provided. If the `type` parameter is not provided or is not one of the specified content types
 * (news, events, tips, nutrition), it will default to returning the image URL for news.
 */
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

/**
 * The function `colorByContentType` returns a background color based on the content type provided,
 * defaulting to 'news' if no type is specified.
 * @param {string} [type=news] - The `type` parameter is a string that represents the content type for
 * which you want to determine the color. It has a default value of `'news'` if not provided.
 * @returns The function `colorByContentType` returns a string representing the background color class
 * based on the content type provided. If the provided content type is not found in the predefined
 * color mappings, it defaults to the color for news content type ('bg-amber-500').
 */
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

/**
 * This TypeScript function returns a content section title based on the provided type, defaulting to
 * 'news' if the type is not recognized.
 * @param {string} [type=news] - The `type` parameter is a string that specifies the type of content
 * section. It can have one of the following values: 'news', 'events', 'tips', or 'nutrition'. If no
 * value is provided, it defaults to 'news'.
 * @returns The function `contentSectionTitle` returns the title corresponding to the provided `type`
 * parameter. If the `type` parameter is not provided or does not match any of the predefined content
 * types (news, events, tips, nutrition), it defaults to returning the title for the 'news' content
 * type, which is 'Noticias'.
 */
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

/**
 * The function `statusName` takes a status ID as input and returns the corresponding status name from
 * a predefined mapping, defaulting to 'PUBLISHED' if no match is found.
 * @param {number} statusId - The `statusId` parameter is a number that represents the status of a
 * certain item. The `statusName` function takes this `statusId` as input and returns the corresponding
 * status name as a string.
 * @returns The function `statusName` takes a `statusId` as input and returns the corresponding status
 * name from the `text` object. If the `statusId` is not found in the `text` object, it defaults to
 * returning the status name associated with the key `5`, which is 'PUBLISHED'.
 */
export const statusName = (statusId: number): string => {

    const text: Record<number, string> = {
        1: 'DRAFT',
        2: 'PENDING REVIEW',
        3: 'REJECTED',
        4: 'SCHEDULED',
        5: 'PUBLISHED',
        6: 'UNPUBLISHED',
        7: 'DELETED',
    }

    return (text[statusId as number]  ?? text[5]) as string
}

/**
 * This TypeScript function returns the content type based on the provided content type ID, with a
 * default value of 'NEWS' if the ID is not found in the mapping.
 * @param {number} contentTypeId - The `contentTypeId` parameter is a number that represents the type
 * of content. It is used to look up the corresponding text value in the `text` object and return it.
 * @returns The function `textTypeContentById` returns the content type based on the `contentTypeId`
 * provided. If the `contentTypeId` matches one of the keys in the `text` object, it returns the
 * corresponding content type (e.g., 'NEWS', 'EVENTS', 'TIPS', 'NUTRITION'). If the `contentTypeId`
 * does not match any key in the `
 */
export const textTypeContentById = (contentTypeId: number): string => {

    const text: Record<number, string> = {
        1: 'NEWS',
        2: 'EVENTS',
        3: 'TIPS',
        4: 'NUTRITION',
    }

    return (text[contentTypeId as number]  ?? text[5]) as string
}