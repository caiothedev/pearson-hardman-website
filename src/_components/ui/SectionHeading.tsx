type SectionHeadingProps = {
    id: string
    eyebrow: string
    title: string
    intro?: string
    tone?: "light" | "dark"
    align?: "left" | "center"
}

/** Eyebrow + h2 + introdução opcional, seguindo a escala do DESIGN. */
export default function SectionHeading({ id, eyebrow, title, intro, tone = "light", align = "left" }: SectionHeadingProps) {
    const muted = tone === "dark" ? "text-gray-400-dark" : "text-gray-500"
    const alignment = align === "center" ? "text-center mx-auto items-center" : ""

    return (
        <div className={`flex flex-col gap-5 max-w-3xl ${alignment}`}>
            <p className={`font-blair font-bold uppercase tracking-[0.2em] text-xs md:text-sm ${muted}`}>
                {eyebrow}
            </p>
            <h2 id={id} className="font-blair font-medium uppercase tracking-[0.04em] leading-tight text-[clamp(1.75rem,4vw,2.75rem)]">
                {title}
            </h2>
            {intro && <p className={`text-base md:text-lg leading-relaxed ${muted}`}>{intro}</p>}
        </div>
    )
}