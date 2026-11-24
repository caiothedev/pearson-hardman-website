import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import PageHeader from "@/_components/dashboard/PageHeader"
import Panel, { dashboardContainer } from "@/_components/dashboard/Panel"
import PanelSkeleton from "@/_components/dashboard/PanelSkeleton"
import { ClientStatusBadge } from "@/_components/dashboard/StatusBadge"
import { getClients } from "@/_lib/data"

export const metadata: Metadata = {
    title: "Clientes",
}

const th = "px-4 py-3 text-left font-blair font-bold uppercase tracking-[0.15em] text-[0.65rem] text-gray-500 whitespace-nowrap"
const td = "px-4 py-4 align-top"

export default function Clients() {
    return (
        <div className={dashboardContainer}>
            <PageHeader
                eyebrow="Carteira"
                title="Clientes"
                description="Empresas que confiam à Pearson Hardman o que não podem perder."
            />
            <Suspense fallback={<PanelSkeleton rows={8} />}>
                <ClientsTable />
            </Suspense>
        </div>
    )
}

async function ClientsTable() {
    const clients = await getClients()

    return (
        <Panel>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-sm">
                    <caption className="sr-only">Lista de clientes</caption>
                    <thead className="border-b border-gray-300">
                        <tr>
                            <th scope="col" className={th}>Cliente</th>
                            <th scope="col" className={th}>Setor</th>
                            <th scope="col" className={th}>Sócio responsável</th>
                            <th scope="col" className={`${th} text-right`}>Contratos</th>
                            <th scope="col" className={th}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr key={client.id} className="border-b border-gray-300 last:border-b-0">
                                <td className={td}>
                                    <Link href={`/dashboard/clients/${client.id}`} className="font-bold text-blue-strong underline-offset-4 hover:underline">
                                        {client.name}
                                    </Link>
                                    <span className="block text-xs text-gray-500">Cliente desde {client.since}</span>
                                </td>
                                <td className={`${td} text-gray-500`}>{client.industry}</td>
                                <td className={td}>{client.partnerName}</td>
                                <td className={`${td} text-right tabular-nums`}>{client.contracts.length}</td>
                                <td className={td}><ClientStatusBadge status={client.status} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Panel>
    )
}