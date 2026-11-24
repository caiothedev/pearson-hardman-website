"use client"

import Link from "next/link"
import { useActionState, useState } from "react"
import Button from "@/_components/ui/Button"
import { login, type LoginState } from "@/_lib/actions"

type DemoAccount = { name: string; title: string; email: string; password: string }

const labelClass = "font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-500"
const inputClass =
    "w-full min-h-12 bg-transparent border-0 border-b-2 border-gray-300 px-0 py-3 text-base text-black-text placeholder:text-gray-500 focus:border-black-text transition-fast aria-[invalid=true]:border-red-700"

export default function LoginForm({ demoAccounts }: { demoAccounts: DemoAccount[] }) {
    const [state, action, pending] = useActionState<LoginState, FormData>(login, {})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function fill(account: DemoAccount) {
        setEmail(account.email)
        setPassword(account.password)
    }

    return (
        <div className="flex flex-col gap-12">
            <form action={action} className="flex flex-col gap-8" aria-describedby={state.error ? "login-erro" : undefined}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClass}>E-mail</label>
                    <input
                        id="email" name="email" type="email" autoComplete="username" required
                        value={email} onChange={(event) => setEmail(event.target.value)}
                        aria-invalid={!!state.error}
                        className={inputClass}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                        <label htmlFor="password" className={labelClass}>Senha</label>
                        <Link href="/forgot-password" className="text-sm text-blue-strong underline-offset-4 hover:underline">
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <input
                        id="password" name="password" type="password" autoComplete="current-password" required
                        value={password} onChange={(event) => setPassword(event.target.value)}
                        aria-invalid={!!state.error}
                        className={inputClass}
                    />
                </div>
                {state.error && (
                    <p id="login-erro" role="alert" className="text-sm text-red-700">{state.error}</p>
                )}
                <Button type="submit" variant="dark" disabled={pending} className="w-full">
                    {pending ? "Verificando" : "Entrar"}
                </Button>
            </form>
            <section aria-labelledby="demo-title" className="flex flex-col gap-4 border-t border-gray-300 pt-8">
                <div className="flex flex-col gap-1">
                    <h2 id="demo-title" className={labelClass}>Credenciais de demonstração</h2>
                    <p className="text-sm text-gray-500">
                        Site fictício, sem cadastro. Escolha um personagem para preencher o formulário.
                    </p>
                </div>
                <ul className="flex flex-col">
                    {demoAccounts.map((account) => (
                        <li key={account.email} className="border-b border-gray-300 last:border-b-0">
                            <button
                                type="button"
                                onClick={() => fill(account)}
                                className="flex w-full cursor-pointer flex-col items-start gap-0.5 py-3 text-left transition-fast hover:bg-gray-100 sm:px-2"
                            >
                                <span className="font-bold">{account.name}</span>
                                <span className="text-sm text-gray-500">{account.title}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}