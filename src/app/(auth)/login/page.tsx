import type { Metadata } from "next"
import Link from "next/link"
import LoginForm from "@/_components/LoginForm"
import { USERS } from "@/_data/users"

export const metadata: Metadata = {
    title: "Acesso restrito",
}

// Credenciais mockadas exibidas na tela, já que não existe cadastro.
const DEMO_ACCOUNTS = USERS.map(({ name, title, email, password }) => ({ name, title, email, password }))

export default function Login() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <Link href="/" className="pearson-hardman-font font-medium uppercase text-base lg:hidden">
                    Pearson Hardman
                </Link>
                <p className="font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-500">Intranet</p>
                <h1 className="font-blair font-medium uppercase tracking-[0.06em] leading-tight text-[clamp(1.75rem,4vw,2.5rem)]">
                    Entrar
                </h1>
                <p className="text-base leading-relaxed text-gray-500">
                    Acesso exclusivo para sócios, associados e para a Donna.
                </p>
            </div>
            <LoginForm demoAccounts={DEMO_ACCOUNTS} />
        </div>
    )
}