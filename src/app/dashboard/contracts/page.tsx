import type { Metadata } from "next"
import { Suspense } from "react"
import PageHeader from "@/_components/dashboard/PageHeader"
import Panel, { dashboardContainer, panelHeading } from "@/_components/dashboard/Panel"
import PanelSkeleton from "@/_components/dashboard/PanelSkeleton"
import ContractsTable from "@/_components/dashboard/ContractsTable"
import { getContracts } from "@/_lib/data"
import { formatCurrency } from "@/_lib/format"

export const metadata: Metadata = {
    title: "Contratos",
}

export default function Contracts() {
    return (
        <div className={dashboardContainer}>
            <PageHeader
                eyebrow="Carteira"
                title="Contratos"
                description="Todos os contratos da firma, do mais recente ao mais antigo."
            />
            <Suspense fallback={<PanelSkeleton rows={10} />}>
                <AllContracts />
            </Suspense>
        </div>
    )
}

async function AllContracts() {
    const contracts = await getContracts()
    const total = contracts.reduce((sum, contract) => sum + contract.value, 0)

    return (
        <Panel>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-gray-300 px-4 py-4">
                <h2 className={panelHeading}>{contracts.length} contratos</h2>
                <p className="text-sm text-gray-500">
                    Valor total: <span className="font-bold text-black-text tabular-nums">{formatCurrency(total)}</span>
                </p>
            </div>
            <ContractsTable contracts={contracts} showClient />
        </Panel>
    )
}