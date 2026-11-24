import type { Metadata } from "next"
import LinkButton from "@/_components/ui/LinkButton"

export const metadata: Metadata = {
    title: "Recuperar senha",
}

export default function ForgotPassword() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <p className="font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-500">Recuperar senha</p>
                <h1 className="font-blair font-medium uppercase tracking-[0.06em] leading-tight text-[clamp(1.75rem,4vw,2.5rem)]">
                    Fale com o Benjamin.
                </h1>
                <p className="text-base leading-relaxed text-gray-500">
                    A Pearson Hardman não redefine senhas por e-mail. Desça até o departamento de TI e procure o
                    Benjamin. Leve café e seja gentíl.
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                    (Este é um site fictício: as senhas de demonstração estão na tela de login.)
                </p>
            </div>
            <LinkButton href="/login" variant="dark" className="self-start">Voltar ao login</LinkButton>
        </div>
    )
}