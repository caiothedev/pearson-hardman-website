import type { Metadata } from "next"
import StatusPage from "@/_components/StatusPage"
import LinkButton from "@/_components/ui/LinkButton"

export const metadata: Metadata = {
    title: "Página não encontrada",
    robots: { index: false },
}

export default function NotFound() {
    return (
        <StatusPage
            eyebrow="Erro 404"
            title="Este arquivo não está no arquivo."
            description="Procuramos na sala de arquivos inteira e não encontramos esta página. Ela pode ter sido movida ou nunca ter existido."
        >
            <LinkButton href="/" variant="dark">Voltar ao início</LinkButton>
            <LinkButton href="/#contato" variant="outline-dark">Fale conosco</LinkButton>
        </StatusPage>
    )
}