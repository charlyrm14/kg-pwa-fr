import NewsSectionCover from '~/assets/media/news-section.png'
import EventSectionCover from '~/assets/media/event-section.png'
import TipsSectionCover from '~/assets/media/tips-section.png'
import NutritionSectionCover from '~/assets/media/nutrition-section.png'
import NewsDetailCover from '~/assets/media/content-news-detail-cover.svg'
import EventsDetailCover from '~/assets/media/content-events-detail-cover.svg'
import TipsDetailCover from '~/assets/media/content-tips-detail-cover.svg'
import NutritionDetailCover from '~/assets/media/content-nutrition-detail-cover.svg'
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
export const contentTitle = (type: ContentTypeSlug = 'noticias') => {

    const normalized = type?.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') as ContentTypeSlug;

    const contentType: Record<string, string> = {
        noticias: 'noticias',
        eventos: 'eventos',
        consejos: 'consejos',
        nutricion: 'alimentación'
    }

    return contentType[normalized]  || contentType.news
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
export const contentTypeImage = (type: string = 'noticias'): string => {

    const normalized = type?.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') as ContentTypeSlug;

    const imageURL: Record<ContentTypeSlug, string> = {
        noticias: NewsSectionCover,
        eventos: EventSectionCover,
        consejos: TipsSectionCover,
        nutricion: NutritionSectionCover
    }

    return imageURL[normalized] ?? imageURL.noticias
}

/**
 * The function `contentCoverDetail` returns the cover image URL based on the type of content provided,
 * defaulting to a news cover image if no matching type is found.
 * @param {string} [type=noticias] - The `type` parameter in the `contentCoverDetail` function is a
 * string that specifies the type of content for which you want to retrieve the cover detail image. It
 * has a default value of `'noticias'` if not provided.
 * @returns The function `contentCoverDetail` returns the URL of the cover image based on the type of
 * content provided. If the type is not specified or does not match any of the predefined types
 * (noticias, eventos, consejos, nutricion), it will default to the cover image for noticias.
 */
export const contentCoverDetail = (type: string = 'noticias'): string => {

    const normalized = type?.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') as ContentTypeSlug;

    const imageURL: Record<ContentTypeSlug, string> = {
        noticias: NewsDetailCover,
        eventos: EventsDetailCover,
        consejos: TipsDetailCover,
        nutricion: NutritionDetailCover
    }

    return imageURL[normalized] ?? imageURL.noticias

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
export const colorByContentType = (type: string = 'noticias'): string => {

    const normalized = type?.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') as ContentTypeSlug;

    const color: Record<ContentTypeSlug, string> = {
        noticias: 'bg-amber-500',
        eventos: 'bg-purple-500',
        consejos: 'bg-pink-500',
        nutricion: 'bg-lime-500'
    }

    return color[normalized]  || color.noticias
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
export const contentSectionTitle = (type: string = 'noticias'): string => {

    const normalized = type?.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') as ContentTypeSlug;

    const contentType: Record<ContentTypeSlug, string> = {
        noticias: 'Noticias',
        eventos: 'Eventos',
        consejos: 'Consejos',
        nutricion: 'Nutrición'
    }

    return contentType[normalized]  || contentType.noticias
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
        1: 'Borrador',
        2: 'Pendiente de revisión',
        3: 'Rechazado',
        4: 'Programado',
        5: 'Publicado',
        6: 'No publicado',
        7: 'Eliminado',
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
        1: 'Noticias',
        2: 'Eventos',
        3: 'Consejos',
        4: 'Nutrición',
    }

    return (text[contentTypeId as number]  ?? text[5]) as string
}