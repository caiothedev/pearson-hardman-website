import { CONTRACT_STATUS_LABELS, type ContractStatus } from "@/_data/contracts"
import type { ClientStatus } from "@/_data/clients"

const CONTRACT_STYLES: Record<ContractStatus, string> = {
    active: "bg-black-background text-white-text border-black-background",
    negotiation: "bg-transparent text-black-text border-black-text",
    litigation: "bg-transparent text-red-700 border-red-700",
    closed: "bg-transparent text-gray-500 border-gray-300",
}

const base = "inline-flex items-center whitespace-nowrap border px-2 py-0.5 font-blair font-bold uppercase tracking-[0.1em] text-[0.65rem]"

export function ContractStatusBadge({ status }: { status: ContractStatus }) {
    return <span className={`${base} ${CONTRACT_STYLES[status]}`}>{CONTRACT_STATUS_LABELS[status]}</span>
}

export function ClientStatusBadge({ status }: { status: ClientStatus }) {
    return status === "active"
        ? <span className={`${base} bg-black-background text-white-text border-black-background`}>Ativo</span>
        : <span className={`${base} bg-transparent text-gray-500 border-gray-300`}>Inativo</span>
}