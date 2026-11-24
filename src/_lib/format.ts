const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
const date = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })

export function formatCurrency(value: number) {
    return currency.format(value)
}

/** Recebe uma data ISO (`2011-01-10`) e devolve `10 de jan. de 2011`. */
export function formatDate(iso: string) {
    return date.format(new Date(`${iso}T00:00:00Z`))
}