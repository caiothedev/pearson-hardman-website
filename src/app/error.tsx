"use client"

import { useEffect } from "react"
import StatusPage from "@/_components/StatusPage"
import Button from "@/_components/ui/Button"
import LinkButton from "@/_components/ui/LinkButton"

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <StatusPage
            eyebrow="Erro inesperado"
            title="Objeção. Algo saiu do roteiro."
            description="Ocorreu um erro ao carregar esta página. Tente novamente; se o problema continuar, volte ao início."
        >
            <Button variant="dark" onClick={() => retry()}>Tentar novamente</Button>
            <LinkButton href="/" variant="outline-dark">Voltar ao início</LinkButton>
        </StatusPage>
    )
}