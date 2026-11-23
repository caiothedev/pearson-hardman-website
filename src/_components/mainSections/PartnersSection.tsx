import SectionHeading from "@/_components/ui/SectionHeading"
import { container } from "@/_components/ui/styles"
import { PARTNERS } from "@/_data/site"

export default function PartnersSection() {
    return (
        <section id="socios" aria-labelledby="socios-title" className="scroll-mt-16 md:scroll-mt-20 py-20 md:py-32">
            <div className={`${container} flex flex-col gap-12 lg:gap-16`}>
                <SectionHeading
                    id="socios-title"
                    eyebrow="Sócios"
                    title="Os nomes por trás dos casos."
                    intro="Cada cliente da Pearson Hardman é atendido diretamente por um sócio. É assim que trabalhamos."
                />
                <ul className="mt-14 md:mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
                    {PARTNERS.map((partner) => (
                        <li key={partner.name} className="flex flex-col gap-6">
                            {/* Monograma no lugar de foto (ver DESIGN, seção Imagens). */}
                            <div
                                aria-hidden="true"
                                className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-black-background text-white-text"
                            >
                                <span className="absolute inset-6" />
                                <span className="font-blair font-light text-[clamp(4rem,9vw,6.5rem)] tracking-[0.1em]">
                                    {partner.initials}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <h3 className="font-bold font-blair text-xl md:text-2xl">
                                        {partner.name}
                                    </h3>
                                    <p className="font-blair font-bold uppercase text-xs text-gray-500">
                                        {partner.role}
                                    </p>
                                </div>
                                <p className="mt-2 text-base leading-relaxed text-foreground">{partner.bio}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}