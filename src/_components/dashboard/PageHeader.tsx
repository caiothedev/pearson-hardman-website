type PageHeaderProps = {
    eyebrow: string
    title: React.ReactNode
    description?: React.ReactNode
}

/** Cabeçalho das páginas internas: eyebrow + h1 + descrição opcional. */
export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
    return (
        <header className="flex flex-col gap-3">
            <p className="font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-500">{eyebrow}</p>
            <h1 className="font-blair font-medium uppercase tracking-[0.04em] leading-tight text-[clamp(1.5rem,3.5vw,2.25rem)]">
                {title}
            </h1>
            {description && <p className="max-w-2xl text-base leading-relaxed text-gray-500">{description}</p>}
        </header>
    )
}