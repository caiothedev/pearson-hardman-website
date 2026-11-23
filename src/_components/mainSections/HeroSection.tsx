import Image from "next/image"
import LinkButton from "@/_components/ui/LinkButton"
import { container } from "@/_components/ui/styles"

export default function HeroSection() {
    return (
        <section id="hero-section" aria-labelledby="hero-title" className="on-dark relative isolate flex overflow-hidden min-h-[75vh] max-h-[100vh] bg-black-background text-white-text">
            <Image
                src="/images/hero-background.webp"
                alt=""
                fill
                preload
                sizes="100vw"
                draggable={false}
                className="-z-20 object-cover object-[50%_20%]"
            />
            <div aria-hidden="true" className="hero-image-gradient absolute inset-0 -z-10" />
            <div className={`${container} flex flex-col justify-end gap-6 md:gap-8 pt-40 pb-16 md:pb-24`}>
                <p className="font-blair font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-gray-400-dark">
                    Manhattan · Nova York
                </p>
                <h1
                    id="hero-title"
                    className="max-w-4xl font-blair font-medium uppercase tracking-[0.04em] md:tracking-[0.08em] leading-[1.05] text-[clamp(1.25rem,5.6vw,4.5rem)]"
                >
                    Nós não jogamos com as probabilidades.
                </h1>
                <p className="max-w-xl text-base md:text-lg leading-relaxed text-gray-300">
                    Há décadas, a Pearson Hardman representa as empresas, os executivos e os investidores
                    que não podem se dar ao luxo de perder. Nós fechamos.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                    <LinkButton href="/#contato" variant="primary">
                        Fale com um sócio
                    </LinkButton>
                    <LinkButton href="/#atuacao" variant="outline">
                        Áreas de atuação
                    </LinkButton>
                </div>
            </div>
        </section>
    )
}