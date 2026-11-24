import Link from "next/link"
import { ContractStatusBadge } from "@/_components/dashboard/StatusBadge"
import { formatCurrency, formatDate } from "@/_lib/format"
import type { Contract } from "@/_data/contracts"

type Row = Contract & { clientName?: string }

const th = "px-4 py-3 text-left font-blair font-bold uppercase tracking-[0.15em] text-[0.65rem] text-gray-500 whitespace-nowrap"
const td = "px-4 py-4 align-top"

/** Tabela de contratos. Com `showClient`, mostra a coluna do cliente com link. */
export default function ContractsTable({ contracts, showClient = false }: { contracts: Row[]; showClient?: boolean }) {
    if (contracts.length === 0) {
        return <p className="px-4 py-8 text-sm text-gray-500">Nenhum contrato. Por enquanto.</p>
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead className="border-b border-gray-300">
                    <tr>
                        <th scope="col" className={th}>Contrato</th>
                        {showClient && <th scope="col" className={th}>Cliente</th>}
                        <th scope="col" className={th}>Início</th>
                        <th scope="col" className={`${th} text-right`}>Valor</th>
                        <th scope="col" className={th}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {contracts.map((contract) => (
                        <tr key={contract.id} className="border-b border-gray-300 last:border-b-0">
                            <td className={td}>
                                <span className="block font-bold">{contract.title}</span>
                                <span className="block text-xs text-gray-500">{contract.id} · {contract.practiceArea}</span>
                            </td>
                            {showClient && (
                                <td className={td}>
                                    <Link href={`/dashboard/clients/${contract.clientId}`} className="text-blue-strong underline-offset-4 hover:underline">
                                        {contract.clientName}
                                    </Link>
                                </td>
                            )}
                            <td className={`${td} whitespace-nowrap text-gray-500`}>{formatDate(contract.startDate)}</td>
                            <td className={`${td} whitespace-nowrap text-right tabular-nums`}>{formatCurrency(contract.value)}</td>
                            <td className={td}><ContractStatusBadge status={contract.status} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}