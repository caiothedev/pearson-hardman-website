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
        image: "/images/users/jessica-pearson.jpg",
    },
    {
        id: "harvey-specter",
        name: "Harvey Specter",
        initials: "HS",
        email: "harvey@pearsonhardman.com",
        password: "eu-nao-perco",
        role: "senior-partner",
        title: "Sócio sênior",
        image: "/images/users/harvey-specter.jpg",
    },
    {
        id: "louis-litt",
        name: "Louis Litt",
        initials: "LL",
        email: "louis@pearsonhardman.com",
        password: "mudding",
        role: "partner",
        title: "Sócio e chefe dos associados",
        image: "/images/users/louis-litt.jpg",
    },
    {
        id: "mike-ross",
        name: "Mike Ross",
        initials: "MR",
        email: "mike@pearsonhardman.com",
        password: "harvard-confia",
        role: "associate",
        title: "Associado (formado em Harvard)",
        image: "/images/users/michael-ross.jpg",
    },
    {
        id: "benjamin",
        name: "Benjamin",
        initials: "BL",
        email: "benjamin@pearsonhardman.com",
        password: "ninguem-mexi-nos-pc",
        role: "associate",
        title: "Especialista e vice-presidente de TI",
        image: "/images/users/benjamin.jpg",
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
    {
        id: "rachel-zane",
        name: "Rachel Zane",
        initials: "RZ",
        email: "rachel@pearsonhardman.com",
        password: "eu-sou-filha-de-advogado",
        role: "assistant",
        title: "Assistente executiva. Harvard um dia.",
    },
    {
        id: "katrina-bennett",
        name: "Katrina Bennett",
        initials: "KB",
        email: "katrina@pearsonhardman.com",
        password: "sou-uma-associada",
        role: "associate",
        title: "Associada. Boa, mas não é tão quanto.",
    },
]

/** Sócios que podem ser responsáveis por um cliente. */
export const PARTNER_ROLES: UserRole[] = ["managing-partner", "senior-partner", "partner"]