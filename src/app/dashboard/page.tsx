import { Suspense } from "react"
import Link from "next/link"
import PageHeader from "@/_components/dashboard/PageHeader"
import Panel, { dashboardContainer, panelHeading } from "@/_components/dashboard/Panel"
import PanelSkeleton from "@/_components/dashboard/PanelSkeleton"
import ContractsTable from "@/_components/dashboard/ContractsTable"
import { ClientStatusBadge } from "@/_components/dashboard/StatusBadge"
import { getClients, getContracts, getCurrentUser, type SessionUser } from "@/_lib/data"
import { formatCurrency } from "@/_lib/format"
import { PARTNER_ROLES } from "@/_data/users"

export default function DashboardHome() {
    return (
        <div className={dashboardContainer}>
            <Suspense fallback={<PanelSkeleton rows={6} />}>
                <Overview />
            </Suspense>
        </div>
    )
}

/** O que aparece no lugar de "seus clientes" para quem não é sócio. */
const NO_CLIENTS_MESSAGE: Partial<Record<SessionUser["role"], string>> = {
    associate: "Associados não têm clientes. Têm o Harvey.",
    assistant: "A Donna não precisa de clientes. Os clientes é que precisam da Donna.",
}

async function Overview() {
    const [user, clients, contracts] = await Promise.all([getCurrentUser(), getClients(), getContracts()])

    const openContracts = contracts.filter((contract) => contract.status !== "closed")
    const stats = [
        { label: "Clientes ativos", value: String(clients.filter((client) => client.status === "active").length) },
        { label: "Contratos vigentes", value: String(contracts.filter((contract) => contract.status === "active").length) },
        { label: "Em negociação", value: String(contracts.filter((contract) => contract.status === "negotiation").length) },
        { label: "Valor em carteira", value: formatCurrency(openContracts.reduce((sum, contract) => sum + contract.value, 0)) },
    ]
    const myClients = clients.filter((client) => client.partnerId === user.id)
    const isPartner = PARTNER_ROLES.includes(user.role)

    return (
        <>
            <PageHeader
                eyebrow="Painel"
                title={`Olá, ${user.name.split(" ")[0]}.`}
                description="Um resumo da carteira da firma. Os números são fictícios; a confiança, não."
            />
            <ul className="grid grid-cols-1 gap-px border-2 border-gray-300 bg-gray-300 sm:grid-cols-2 2xl:grid-cols-4">
                {stats.map((stat) => (
                    <li key={stat.label} className="flex flex-col gap-2 bg-white-background p-6">
                        <span className={panelHeading}>{stat.label}</span>
                        <span className="font-blair font-medium text-2xl tabular-nums whitespace-nowrap">{stat.value}</span>
                    </li>
                ))}
            </ul>
            <div className="grid grid-cols-1 gap-10 2xl:grid-cols-3">
                <Panel className="2xl:col-span-2">
                    <div className="flex items-center justify-between gap-4 border-b-2 border-gray-300 px-4 py-4">
                        <h2 className={panelHeading}>Contratos recentes</h2>
                        <Link href="/dashboard/contracts" className="whitespace-nowrap text-sm text-blue-strong underline-offset-4 hover:underline">
                            Ver todos
                        </Link>
                    </div>
                    <ContractsTable contracts={contracts.slice(0, 5)} showClient />
                </Panel>
                <Panel>
                    <div className="border-b-2 border-gray-300 px-4 py-4">
                        <h2 className={panelHeading}>Seus clientes</h2>
                    </div>
                    {isPartner && myClients.length > 0 ? (
                        <ul>
                            {myClients.map((client) => (
                                <li key={client.id} className="border-b-2 border-gray-300 last:border-b-0">
                                    <Link
                                        href={`/dashboard/clients/${client.id}`}
                                        className="flex items-center justify-between gap-4 px-4 py-4 transition-fast hover:bg-gray-100"
                                    >
                                        <span className="flex flex-col">
                                            <span className="font-bold">{client.name}</span>
                                            <span className="text-xs text-gray-500">
                                                {client.contracts.length} {client.contracts.length === 1 ? "contrato" : "contratos"}
                                            </span>
                                        </span>
                                        <ClientStatusBadge status={client.status} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="px-4 py-8 text-sm leading-relaxed text-gray-500">
                            {NO_CLIENTS_MESSAGE[user.role] ?? "Nenhum cliente sob sua responsabilidade."}
                        </p>
                    )}
                </Panel>
            </div>
        </>
    )
}