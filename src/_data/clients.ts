/**
 * Clientes mockados. Nomes, pessoas e números são fictícios; alguns fazem
 * referência a casos da série *Suits*. `partnerId` aponta para `USERS`.
 */

export type ClientStatus = "active" | "inactive"

export type Client = {
    id: string
    name: string
    industry: string
    contactName: string
    contactEmail: string
    since: number
    status: ClientStatus
    partnerId: string
    notes: string
}

export const CLIENTS: Client[] = [
    {
        id: "hessington-oil",
        name: "Hessington Oil",
        industry: "Energia",
        contactName: "Ava Hessington",
        contactEmail: "ava@hessington.example",
        since: 2003,
        status: "active",
        partnerId: "jessica-pearson",
        notes: "Cliente mais antigo da firma. Qualquer telefonema dela passa na frente de tudo.",
    },
    {
        id: "mckernon-motors",
        name: "McKernon Motors",
        industry: "Automotivo",
        contactName: "Jack McKernon",
        contactEmail: "jack@mckernon.example",
        since: 2008,
        status: "active",
        partnerId: "harvey-specter",
        notes: "Fusões recorrentes. Prefere reuniões curtas e acordos longos.",
    },
    {
        id: "gillis-industries",
        name: "Gillis Industries",
        industry: "Indústria",
        contactName: "Gerald Tate",
        contactEmail: "g.tate@gillis.example",
        since: 2010,
        status: "active",
        partnerId: "harvey-specter",
        notes: "Disputa de controle acionário em andamento. Não comentar no elevador.",
    },
    {
        id: "coastal-motors",
        name: "Coastal Motors",
        industry: "Automotivo",
        contactName: "Richard Lisbon",
        contactEmail: "r.lisbon@coastal.example",
        since: 2011,
        status: "active",
        partnerId: "harvey-specter",
        notes: "Reestruturação pós-recall. Harvey garante que está tudo sob controle.",
    },
    {
        id: "folsom-foods",
        name: "Folsom Foods",
        industry: "Alimentos",
        contactName: "Sheila Sazs",
        contactEmail: "s.sazs@folsom.example",
        since: 2009,
        status: "active",
        partnerId: "louis-litt",
        notes: "Auditoria financeira trimestral. Louis revisa cada centavo pessoalmente.",
    },
    {
        id: "sutter-capital",
        name: "Sutter Capital",
        industry: "Fundos de investimento",
        contactName: "Charles Sutter",
        contactEmail: "c.sutter@sutter.example",
        since: 2012,
        status: "active",
        partnerId: "louis-litt",
        notes: "Gestora de fundos. Gosta de gráficos. Louis também.",
    },
    {
        id: "bayview-pharma",
        name: "Bayview Pharmaceuticals",
        industry: "Farmacêutico",
        contactName: "Helen Marsh",
        contactEmail: "h.marsh@bayview.example",
        since: 2007,
        status: "inactive",
        partnerId: "jessica-pearson",
        notes: "Contrato encerrado em bons termos. Ponte mantida, nunca queimada.",
    },
    {
        id: "lexington-realty",
        name: "Lexington Realty Group",
        industry: "Imobiliário",
        contactName: "Martin Kroll",
        contactEmail: "m.kroll@lexrealty.example",
        since: 2013,
        status: "active",
        partnerId: "jessica-pearson",
        notes: "Locação do andar 50 em renegociação. Sim, o nosso andar.",
    },
]