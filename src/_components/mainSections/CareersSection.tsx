import SectionHeading from "@/_components/ui/SectionHeading"
import LinkButton from "@/_components/ui/LinkButton"
import { container } from "@/_components/ui/styles"
import { CAREER_REQUIREMENTS } from "@/_data/site"

export default function CareersSection() {
    return (
        <section id="carreiras" aria-labelledby="carreiras-title" className="scroll-mt-16 md:scroll-mt-20 bg-gray-100 py-20 md:py-32">
            <div className={`${container} grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16`}>
                <div className="flex flex-col gap-8 lg:col-span-6">
                    <SectionHeading
                        id="carreiras-title"
                        eyebrow="Carreiras"
                        title="Somente Harvard."
                        intro="Nosso programa de associados é pequeno por escolha. Quem entra aprende com os melhores sócios de Manhattan e trabalha, desde o primeiro dia, em casos que viram manchete."
                    />
                    <div>
                        <LinkButton href="/#contato" variant="dark">
                            Envie sua candidatura
                        </LinkButton>
                    </div>
                </div>
                <div className="flex flex-col lg:col-span-6 gap-2">
                    <h3 className="font-blair font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-gray-500">
                        Requisitos
                    </h3>
                    <ul className="mt-6">
                        {CAREER_REQUIREMENTS.map((requirement, index) => (
                            <li key={requirement} className="flex gap-6 border-b-2 border-gray-300 py-6">
                                <span aria-hidden="true" className="font-blair font-light text-sm tracking-[0.2em] text-gray-500 pt-1">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="text-base md:text-lg leading-relaxed">{requirement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}