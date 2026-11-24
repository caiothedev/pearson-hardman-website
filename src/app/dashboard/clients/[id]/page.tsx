import { Suspense } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import PageHeader from "@/_components/dashboard/PageHeader"
import Panel, { dashboardContainer, panelHeading } from "@/_components/dashboard/Panel"
import PanelSkeleton from "@/_components/dashboard/PanelSkeleton"
import ContractsTable from "@/_components/dashboard/ContractsTable"
import { ClientStatusBadge } from "@/_components/dashboard/StatusBadge"
import { getClient } from "@/_lib/data"
import { formatCurrency } from "@/_lib/format"

export default function ClientPage({ params }: PageProps<"/dashboard/clients/[id]">) {
    return (
        <div className={dashboardContainer}>
            <Link href="/dashboard/clients" className="self-start text-sm text-blue-strong underline-offset-4 hover:underline uppercase font-black">
                ← Todos os clientes
            </Link>
            <Suspense fallback={<PanelSkeleton rows={8} />}>
                <ClientDetails params={params} />
            </Suspense>
        </div>
    )
}

async function ClientDetails({ params }: { params: PageProps<"/dashboard/clients/[id]">["params"] }) {
    const { id } = await params
    const client = await getClient(id)
    if (!client) notFound()

    const openValue = client.contracts
        .filter((contract) => contract.status !== "closed")
        .reduce((sum, contract) => sum + contract.value, 0)

    const details = [
        { label: "Setor", value: client.industry },
        { label: "Sócio responsável", value: client.partnerName },
        { label: "Contato", value: client.contactName },
        { label: "E-mail", value: client.contactEmail },
        { label: "Cliente desde", value: String(client.since) },
        { label: "Valor em aberto", value: formatCurrency(openValue) },
    ]

    return (
        <>
            <div className="flex flex-col items-start gap-4">
                <PageHeader eyebrow="Cliente" title={client.name} description={client.notes} />
                <ClientStatusBadge status={client.status} />
            </div>

            <Panel>
                <dl className="grid grid-cols-1 gap-px bg-gray-300 sm:grid-cols-2 lg:grid-cols-3">
                    {details.map((detail) => (
                        <div key={detail.label} className="flex flex-col gap-1 bg-white-background p-5">
                            <dt className={panelHeading}>{detail.label}</dt>
                            <dd className="break-words">{detail.value}</dd>
                        </div>
                    ))}
                </dl>
            </Panel>

            <Panel>
                <div className="border-b border-gray-300 px-4 py-4">
                    <h2 className={panelHeading}>Contratos ({client.contracts.length})</h2>
                </div>
                <ContractsTable contracts={client.contracts} />
            </Panel>
        </>
    )
}