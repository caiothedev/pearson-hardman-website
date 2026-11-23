import { container } from "@/_components/ui/styles"

type StatusPageProps = {
    eyebrow: string
    title: string
    description: string
    children?: React.ReactNode
}

/** Layout compartilhado por not-found, error e loading. */
export default function StatusPage({ eyebrow, title, description, children }: StatusPageProps) {
    return (
        <main id="conteudo" tabIndex={-1} className="flex flex-1 items-center py-24 md:py-40 focus:outline-none">
            <div className={`${container} flex flex-col items-start gap-6`}>
                <p className="font-blair font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-gray-500">{eyebrow}</p>
                <h1 className="max-w-3xl font-blair font-medium uppercase tracking-[0.08em] leading-tight text-[clamp(2rem,5vw,3.5rem)]">
                    {title}
                </h1>
                <p className="max-w-xl text-base md:text-lg leading-relaxed text-gray-500">{description}</p>
                {children && <div className="flex flex-col sm:flex-row gap-4 pt-4">{children}</div>}
            </div>
        </main>
    )
}