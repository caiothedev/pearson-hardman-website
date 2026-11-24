"use server"

import { redirect } from "next/navigation"
import { USERS } from "@/_data/users"
import { createSession, deleteSession } from "@/_lib/session"

export type LoginState = { error?: string; email?: string }

export async function login(_state: LoginState, formData: FormData): Promise<LoginState> {
    const email = String(formData.get("email") ?? "").trim().toLowerCase()
    const password = String(formData.get("password") ?? "")

    if (!email || !password) {
        return { error: "Informe e-mail e senha.", email }
    }

    // Comparação em texto puro: os usuários são mockados (ver src/_data/users.ts).
    const user = USERS.find((item) => item.email === email && item.password === password)
    if (!user) {
        return { error: "E-mail ou senha incorretos. Ninguém entra sem ser convidado.", email }
    }

    await createSession(user.id)
    redirect("/dashboard")
}

export async function logout() {
    await deleteSession()
    redirect("/login")
}