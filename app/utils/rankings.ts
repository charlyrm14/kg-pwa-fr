import type { TypePeriod } from "#imports"

export const periodSectionTitle = (period: string): TypePeriod => {
    
    const title: Record<string, string> = {
        diaria: 'Ranking diario',
        semanal: 'Ranking semanal',
        mensual: 'Ranking mensual',
        trimestral: 'Ranking trimestral',
        anual: 'Ranking anual'
    }

    return (title[period]  ?? title.semanal) as TypePeriod
}