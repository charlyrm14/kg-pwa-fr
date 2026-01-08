/**
 * The function `downloadMockReport` downloads a mock report file asynchronously using fetch and
 * triggers the download of the file.
 */
export const downloadMockReport = async () => {
    const fileName = 'reporte-asistencias-2025-12.xlsx'
    const fileUrl = `/media/${fileName}`

    const response = await fetch(fileUrl)
    
    if (!response.ok) {
        throw new Error(`No se pudo cargar el archivo mock: ${fileUrl}`)
    }

    const blob = await response.blob()

    triggerFileDownload(blob, fileName)
}

/**
 * The function `triggerFileDownload` creates a downloadable link for a Blob object and triggers the
 * download of the file with the specified filename.
 * @param {Blob} blob - A Blob object represents a file-like object of raw data. It can be a file or a
 * data buffer.
 * @param {string} filename - The `filename` parameter is a string that represents the name you want to
 * give to the file when it is downloaded. This name will be used by the browser when saving the file
 * to the user's device.
 */
export const triggerFileDownload = (blob: Blob, filename: string) => {
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    window.URL.revokeObjectURL(url)
}

export const bgAttendanceStatusColors = (statusId: number) => {

    const colors: Record<string, string> = {
        1: 'bg-lime-500',
        2: 'bg-red-500',
        3: 'bg-yellow-500',
        4: 'bg-orange-400',
        5: 'bg-teal-600',
        6: 'bg-slate-400'
    }

    return colors[statusId] ?? 'bg-pink-500'
}

export const textAttendanceStatusColors = (status: string) => {

    const normalized = status
        ?.toLowerCase()
        .replace(/\s+/g, '_') as string

    const colors: Record<string, string> = {
        present: 'text-lime-500',
        absent_unjustified: 'text-red-500',
        absent_justified: 'text-yellow-500',
        late: 'text-orange-400',
        excused: 'text-teal-600',
        unassigned: 'text-slate-400'
    }

    return colors[normalized] ?? 'bg-pink-500'
}
