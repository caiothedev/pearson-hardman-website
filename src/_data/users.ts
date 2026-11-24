/**
 * Usuários internos mockados. Tudo aqui é ficção inspirada na série *Suits*.
 *
 * As senhas ficam em texto puro de propósito: este é um projeto satírico, sem
 * banco de dados e sem nenhum dado real. Não copie este padrão para produção.
 * Não há cadastro: para "contratar" alguém, adicione um item a esta lista.
 */

export type UserRole = "managing-partner" | "senior-partner" | "partner" | "associate" | "assistant"

export type User = {
    id: string
    name: string
    initials: string
    email: string
    password: string
    role: UserRole
    title: string
    image?: string
}

export const USERS: User[] = [
    {
        id: "jessica-pearson",
        name: "Jessica Pearson",
        initials: "JP",
        email: "jessica@pearsonhardman.com",
        password: "nome-na-parede",
        role: "managing-partner",
        title: "Sócia-gerente",
        image: "/images/partners/jessica-pearson.jpg",
    },
    {
        id: "harvey-specter",
        name: "Harvey Specter",
        initials: "HS",
        email: "harvey@pearsonhardman.com",
        password: "eu-nao-perco",
        role: "senior-partner",
        title: "Sócio sênior",
        image: "/images/partners/harvey-specter.jpg",
    },
    {
        id: "louis-litt",
        name: "Louis Litt",
        initials: "LL",
        email: "louis@pearsonhardman.com",
        password: "mudding",
        role: "partner",
        title: "Sócio e chefe dos associados",
        image: "/images/partners/louis-litt.jpg",
    },
    {
        id: "mike-ross",
        name: "Mike Ross",
        initials: "MR",
        email: "mike@pearsonhardman.com",
        password: "harvard-confia",
        role: "associate",
        title: "Associado (formado em Harvard, juramos)",
        image: "/images/partners/michael-ross.jpg",
    },
    {
        id: "donna-paulsen",
        name: "Donna Paulsen",
        initials: "DP",
        email: "donna@pearsonhardman.com",
        password: "eu-sou-a-donna",
        role: "assistant",
        title: "Assistente executiva. Ela já sabia que você ia entrar.",
    },
]

/** Sócios que podem ser responsáveis por um cliente. */
export const PARTNER_ROLES: UserRole[] = ["managing-partner", "senior-partner", "partner"]