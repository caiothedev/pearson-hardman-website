import "server-only"
import { cache } from "react"
import { redirect } from "next/navigation"
import { USERS, type User } from "@/_data/users"
import { CLIENTS, type Client } from "@/_data/clients"
import { CONTRACTS, type Contract } from "@/_data/contracts"
import { getSessionUserId } from "@/_lib/session"

/**
 * Camada de acesso a dados (DAL). Todo dado interno passa por aqui, e toda
 * função verifica a sessão antes de responder. O `proxy.ts` só faz o
 * redirecionamento otimista; a verificação que vale é esta.
 */

/** Dados do usuário que podem ir para a interface (sem e-mail nem senha). */
export type SessionUser = Pick<User, "id" | "name" | "initials" | "title" | "role" | "image">

/** Usuário logado. Redireciona para /login se não houver sessão válida. */
export const getCurrentUser = cache(async (): Promise<SessionUser> => {
    const userId = await getSessionUserId()
    const user = userId ? USERS.find((item) => item.id === userId) : undefined
    if (!user) redirect("/login")

    const { id, name, initials, title, role, image } = user
    return { id, name, initials, title, role, image }
})

export type ClientWithPartner = Client & { partnerName: string; contracts: Contract[] }

function withRelations(client: Client): ClientWithPartner {
    return {
        ...client,
        partnerName: USERS.find((user) => user.id === client.partnerId)?.name ?? "Sem sócio",
        contracts: CONTRACTS.filter((contract) => contract.clientId === client.id),
    }
}

export async function getClients(): Promise<ClientWithPartner[]> {
    await getCurrentUser()
    return CLIENTS.map(withRelations).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
}

export async function getClient(id: string): Promise<ClientWithPartner | null> {
    await getCurrentUser()
    const client = CLIENTS.find((item) => item.id === id)
    return client ? withRelations(client) : null
}

export type ContractWithClient = Contract & { clientName: string }

export async function getContracts(): Promise<ContractWithClient[]> {
    await getCurrentUser()
    return CONTRACTS.map((contract) => ({
        ...contract,
        clientName: CLIENTS.find((client) => client.id === contract.clientId)?.name ?? "Cliente desconhecido",
    })).sort((a, b) => b.startDate.localeCompare(a.startDate))
}