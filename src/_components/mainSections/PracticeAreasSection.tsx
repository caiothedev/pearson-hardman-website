import SectionHeading from "@/_components/ui/SectionHeading"
import { container } from "@/_components/ui/styles"
import { PRACTICE_AREAS } from "@/_data/site"

export default function PracticeAreasSection() {
    return (
        <section id="atuacao" aria-labelledby="atuacao-title" className="scroll-mt-16 md:scroll-mt-20 bg-gray-100 py-20 md:py-32">
            <div className={`${container} flex flex-col gap-12 lg:gap-16`}>
                <SectionHeading
                    id="atuacao-title"
                    eyebrow="Áreas de atuação"
                    title="Onde o que está em jogo é grande demais."
                    intro="Atuamos em operações e disputas de alta complexidade, sempre com um sócio à frente do caso."
                />
                <ol className="mt-14 md:mt-20 grid grid-cols-1 border-t border-l border-gray-300 md:grid-cols-2 lg:grid-cols-3">
                    {PRACTICE_AREAS.map((area, index) => (
                        <li
                            key={area.title}
                            className="group flex flex-col gap-4 border-r border-b border-gray-300 bg-white-background p-8 md:p-10 hover:bg-black-background hover:text-white-text transition-normal"
                        >
                            <span aria-hidden="true" className="font-blair font-light text-sm tracking-[0.2em] text-gray-500 group-hover:text-gray-400-dark">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="font-bold text-xl md:text-2xl leading-snug">{area.title}</h3>
                            <p className="text-base leading-relaxed text-gray-500 group-hover:text-gray-400-dark">
                                {area.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}