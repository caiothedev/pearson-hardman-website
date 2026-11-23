import Image from "next/image"
import LinkButton from "@/_components/ui/LinkButton"
import { container } from "@/_components/ui/styles"

export default function HeroSection() {
    return (
        <section
            id="hero-section"
            aria-labelledby="hero-title"
            className="on-dark relative isolate flex min-h-[80svh] overflow-hidden bg-black-background text-white-text"
        >
            <Image
                src="/images/hero-background.webp"
                alt=""
                fill
                preload
                quality={80}
                sizes="100vw"
                draggable={false}
                className="-z-20 object-cover object-[50%_20%]"
            />
            <div aria-hidden="true" className="hero-image-gradient absolute inset-0 -z-10" />
            <div className={`${container} flex flex-col items-center justify-end gap-5 pt-40 pb-16 text-center md:gap-7 md:pb-24`}>
                <p className="font-blair font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-gray-400-dark">
                    Manhattan - Nova York
                </p>
                <h1
                    id="hero-title"
                    className="max-w-3xl text-balance font-blair font-medium uppercase tracking-[0.04em] md:tracking-[0.06em] leading-[1.1] text-[clamp(1.375rem,4.2vw,2.5rem)]"
                >
                    Nós não jogamos com as probabilidades.
                </h1>
                <p className="max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-gray-300">
                    Há décadas, a Pearson Hardman representa as empresas, os executivos e os investidores que não podem se dar ao luxo de perder. Nós fechamos.
                </p>
                <div className="flex w-full flex-col items-stretch justify-center gap-5 pt-2 sm:w-auto sm:flex-row sm:items-center">
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