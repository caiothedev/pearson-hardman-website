import { container } from "@/_components/ui/styles"

export default function QuoteSection() {
    return (
        <section aria-label="Nossa filosofia" className="on-dark bg-black-background text-white-text py-20 md:py-32">
            <figure className={`${container} flex flex-col items-center gap-8 text-center`}>
                <span aria-hidden="true" className="h-12 w-[2px] bg-white-text/30" />
                <blockquote className="max-w-4xl">
                    <p className="italic leading-snug text-[clamp(1.75rem,4vw,3rem)]">
                        “Quando você está encurralado, você não negocia. Você muda as regras da negociação.”
                    </p>
                </blockquote>
                <figcaption className="font-blair font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-gray-400-dark">
                    Princípio da casa
                </figcaption>
            </figure>
        </section>
    )
}