export const bgColorByPaymentType = (type: number = 1): string => {

    const bgColor: Record<number, string> = {
        1: 'bg-blue-500',
        2: 'bg-purple-500',
        3: 'bg-pink-500',
    }

    return (bgColor[type]  ?? bgColor[1]) as string
}