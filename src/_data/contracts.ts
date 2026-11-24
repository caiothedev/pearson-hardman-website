/**
 * Contratos mockados. Cada contrato pertence a um cliente (`clientId` aponta
 * para `CLIENTS`). Valores em dólares americanos, datas no formato ISO.
 */

export type ContractStatus = "active" | "negotiation" | "litigation" | "closed"

export type Contract = {
    id: string
    clientId: string
    title: string
    practiceArea: string
    value: number
    startDate: string
    endDate: string | null
    status: ContractStatus
}

export const CONTRACT_STATUS_LABELS: Record<ContractStatus, string> = {
    active: "Vigente",
    negotiation: "Em negociação",
    litigation: "Em litígio",
    closed: "Encerrado",
}

export const CONTRACTS: Contract[] = [
    {
        id: "PH-2011-001",
        clientId: "hessington-oil",
        title: "Assessoria societária permanente",
        practiceArea: "Direito Societário e Financeiro",
        value: 4_800_000,
        startDate: "2011-01-10",
        endDate: null,
        status: "active",
    },
    {
        id: "PH-2011-014",
        clientId: "hessington-oil",
        title: "Defesa em investigação ambiental",
        practiceArea: "Contencioso Empresarial",
        value: 2_350_000,
        startDate: "2011-06-02",
        endDate: null,
        status: "litigation",
    },
    {
        id: "PH-2011-022",
        clientId: "mckernon-motors",
        title: "Aquisição de fornecedor de autopeças",
        practiceArea: "Fusões e Aquisições",
        value: 6_100_000,
        startDate: "2011-03-15",
        endDate: "2011-11-30",
        status: "closed",
    },
    {
        id: "PH-2012-003",
        clientId: "mckernon-motors",
        title: "Fusão com rede de concessionárias",
        practiceArea: "Fusões e Aquisições",
        value: 9_750_000,
        startDate: "2012-02-01",
        endDate: null,
        status: "negotiation",
    },
    {
        id: "PH-2011-031",
        clientId: "gillis-industries",
        title: "Defesa contra oferta hostil",
        practiceArea: "Defesa contra Aquisições Hostis",
        value: 7_200_000,
        startDate: "2011-08-20",
        endDate: null,
        status: "active",
    },
    {
        id: "PH-2012-009",
        clientId: "gillis-industries",
        title: "Revisão de acordo de acionistas",
        practiceArea: "Contratos e Negociações",
        value: 850_000,
        startDate: "2012-04-12",
        endDate: null,
        status: "negotiation",
    },
    {
        id: "PH-2011-040",
        clientId: "coastal-motors",
        title: "Ação coletiva sobre recall",
        practiceArea: "Contencioso Empresarial",
        value: 5_400_000,
        startDate: "2011-09-05",
        endDate: null,
        status: "litigation",
    },
    {
        id: "PH-2010-018",
        clientId: "folsom-foods",
        title: "Auditoria e conformidade regulatória",
        practiceArea: "Direito Societário e Financeiro",
        value: 1_200_000,
        startDate: "2010-05-01",
        endDate: null,
        status: "active",
    },
    {
        id: "PH-2012-015",
        clientId: "folsom-foods",
        title: "Registro de marcas no exterior",
        practiceArea: "Propriedade Intelectual",
        value: 430_000,
        startDate: "2012-07-18",
        endDate: null,
        status: "active",
    },
    {
        id: "PH-2012-021",
        clientId: "sutter-capital",
        title: "Estruturação de novo fundo",
        practiceArea: "Direito Societário e Financeiro",
        value: 3_300_000,
        startDate: "2012-09-03",
        endDate: null,
        status: "negotiation",
    },
    {
        id: "PH-2009-007",
        clientId: "bayview-pharma",
        title: "Licenciamento de patente",
        practiceArea: "Propriedade Intelectual",
        value: 2_900_000,
        startDate: "2009-02-14",
        endDate: "2010-12-31",
        status: "closed",
    },
    {
        id: "PH-2013-002",
        clientId: "lexington-realty",
        title: "Renegociação do contrato de locação",
        practiceArea: "Contratos e Negociações",
        value: 620_000,
        startDate: "2013-01-07",
        endDate: null,
        status: "negotiation",
    },
]