import ContactForm from "@/_components/ContactForm"
import SectionHeading from "@/_components/ui/SectionHeading"
import { container } from "@/_components/ui/styles"
import { ADDRESS } from "@/_data/site"

export default function ContactSection() {
    return (
        <section
            id="contato"
            aria-labelledby="contato-title"
            className="on-dark scroll-mt-16 md:scroll-mt-20 bg-black-background text-white-text py-20 md:py-32 border-b border-white-text/10"
        >
            <div className={`${container} grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16`}>
                <div className="flex flex-col gap-10 lg:col-span-5">
                    <SectionHeading
                        id="contato-title"
                        eyebrow="Contato"
                        title="Conte-nos o seu caso."
                        intro="Respondemos a cada solicitação pessoalmente. Se o assunto for urgente, ligue."
                        tone="dark"
                    />
                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                        <div className="flex flex-col gap-2">
                            <dt className="font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-400-dark">Endereço</dt>
                            <dd className="text-base leading-relaxed">
                                {ADDRESS.street}<br />{ADDRESS.city}
                            </dd>
                        </div>
                        <div className="flex flex-col gap-2">
                            <dt className="font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-400-dark">Telefone</dt>
                            <dd className="text-base">
                                <a href={ADDRESS.phoneHref} className="underline underline-offset-4 decoration-white-text/30 hover:decoration-white-text transition-fast">
                                    {ADDRESS.phone}
                                </a>
                            </dd>
                        </div>
                        <div className="flex flex-col gap-2">
                            <dt className="font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-400-dark">Fax</dt>
                            <dd className="text-base">
                                <a className="underline underline-offset-4 decoration-white-text/30 hover:decoration-white-text transition-fast">
                                    {ADDRESS.fax}
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="lg:col-span-7">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}