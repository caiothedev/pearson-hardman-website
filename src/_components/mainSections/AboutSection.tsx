import SectionHeading from "@/_components/ui/SectionHeading"
import { container } from "@/_components/ui/styles"
import { STATS } from "@/_data/site"

export default function AboutSection() {
    return (
        <section id="firma" aria-labelledby="firma-title" className="flex flex-col gap-12 lg:gap-16 scroll-mt-16 md:scroll-mt-20 py-20 md:py-32">
            <div className={`${container} grid grid-cols-1 gap-8 lg:grid-cols-12`}>
                <div className="lg:col-span-5">
                    <SectionHeading
                        id="firma-title"
                        eyebrow="Firma"
                        title="Um nome na parede se conquista."
                    />
                </div>
                <div className="flex flex-col gap-6 text-base md:text-lg leading-relaxed text-foreground lg:col-span-7">
                    <p>
                        A Pearson Hardman nasceu da sociedade entre Jessica Pearson e Daniel Hardman, que assumiram
                        uma firma tradicional de Manhattan e a transformaram em uma das mais temidas da cidade.
                        Hoje, sob a liderança de Jessica Pearson como sócia-gerente, representamos corporações,
                        executivos e investidores nos casos em que o resultado não admite segunda tentativa.
                    </p>
                    <p className="text-gray-500">
                        Nossa cultura é simples: contratamos apenas os melhores, preparamos cada caso como se fosse
                        a julgamento e só sentamos à mesa quando já sabemos onde queremos chegar.
                    </p>
                </div>
            </div>
            <div className={`${container} mt-16 md:mt-24`}>
                <dl className="grid grid-cols-1 border-t border-gray-300 sm:grid-cols-3">
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col gap-3 border-b border-gray-300 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"
                        >
                            <dt className="order-2 text-sm leading-relaxed text-gray-500">{stat.label}</dt>
                            <dd className="order-1 font-blair font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-none">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}