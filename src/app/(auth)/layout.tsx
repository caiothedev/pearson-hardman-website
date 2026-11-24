import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    robots: { index: false, follow: false },
}

/** Tela dividida: painel institucional à esquerda (desktop) e formulário à direita. */
export default function AuthLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="flex flex-1 min-h-svh">
            <aside className="on-dark relative isolate hidden lg:flex lg:w-1/2 flex-col items-start justify-end overflow-hidden bg-black-background p-12 text-white-text">
                <Image
                    src="/images/auth.jpg"
                    alt=""
                    fill
                    quality={75}
                    sizes="50vw"
                    draggable={false}
                    className="-z-20 object-cover object-[50%_20%]"
                />
                <div aria-hidden="true" className="hero-image-gradient absolute inset-0 -z-10" />
                <div className="flex flex-col gap-4 max-w-md">
                    <p className="font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-400-dark">
                        Área restrita
                    </p>
                    <p className="text-2xl leading-snug italic">
                        &ldquo;Quem chega até aqui já sabe que não estamos aqui para perder.&rdquo;
                    </p>
                </div>
            </aside>
            <main id="conteudo" tabIndex={-1} className="flex flex-1 items-center justify-center px-4 py-16 md:px-8 focus:outline-none">
                <div className="w-full max-w-md">{children}</div>
            </main>
        </div>
    )
}