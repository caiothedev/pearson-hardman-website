"use client"

import { useState } from "react"
import Button from "@/_components/ui/Button"
import { CONTACT_SUBJECTS } from "@/_data/site"

type Field = "nome" | "email" | "assunto" | "mensagem"
type Errors = Partial<Record<Field, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: FormData): Errors {
    const errors: Errors = {}
    const nome = String(data.get("nome") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const assunto = String(data.get("assunto") ?? "")
    const mensagem = String(data.get("mensagem") ?? "").trim()

    if (nome.length < 2) errors.nome = "Informe seu nome completo."
    if (!EMAIL_PATTERN.test(email)) errors.email = "Informe um e-mail válido."
    if (!assunto) errors.assunto = "Escolha um assunto."
    if (mensagem.length < 20) errors.mensagem = "Descreva o caso em pelo menos 20 caracteres."

    return errors
}

const labelClass = "font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-400-dark"
const inputClass =
    "w-full min-h-12 bg-transparent border-0 border-b-2 border-white-text/30 px-0 py-3 text-base text-white-text placeholder:text-gray-500 focus:border-white-text transition-fast aria-[invalid=true]:border-red-400"
const errorClass = "text-sm text-red-300"

/**
 * Formulário demonstrativo: valida no cliente e mostra uma confirmação,
 * mas não envia nem guarda nenhum dado.
 */
export default function ContactForm() {
    const [errors, setErrors] = useState<Errors>({})
    const [sent, setSent] = useState(false)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        const found = validate(new FormData(form))
        setErrors(found)

        const firstInvalid = Object.keys(found)[0]
        if (firstInvalid) {
            form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
            return
        }

        form.reset()
        setSent(true)
    }

    function describedBy(field: Field) {
        return errors[field] ? `${field}-erro` : undefined
    }

    if (sent) {
        return (
            <div role="status" className="flex flex-col items-start gap-6 border border-white-text/20 p-8 md:p-10">
                <p className="font-blair font-medium uppercase tracking-[0.08em] text-2xl">Mensagem recebida.</p>
                <p className="text-base leading-relaxed text-gray-400-dark">
                    Um sócio analisará o seu caso e entrará em contato. (Este é um site fictício: nenhum dado foi
                    enviado ou armazenado.)
                </p>
                <Button variant="outline" onClick={() => setSent(false)}>
                    Enviar outra mensagem
                </Button>
            </div>
        )
    }

    return (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-8" aria-describedby="form-aviso">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className={labelClass}>Nome</label>
                    <input
                        id="nome" name="nome" type="text" autoComplete="name" required
                        aria-invalid={!!errors.nome} aria-describedby={describedBy("nome")}
                        className={inputClass}
                    />
                    {errors.nome && <p id="nome-erro" className={errorClass}>{errors.nome}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClass}>E-mail</label>
                    <input
                        id="email" name="email" type="email" autoComplete="email" required
                        aria-invalid={!!errors.email} aria-describedby={describedBy("email")}
                        className={inputClass}
                    />
                    {errors.email && <p id="email-erro" className={errorClass}>{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="empresa" className={labelClass}>
                        Empresa <span className="font-light normal-case tracking-normal">(opcional)</span>
                    </label>
                    <input id="empresa" name="empresa" type="text" autoComplete="organization" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="assunto" className={labelClass}>Assunto</label>
                    <select
                        id="assunto" name="assunto" required defaultValue=""
                        aria-invalid={!!errors.assunto} aria-describedby={describedBy("assunto")}
                        className={`${inputClass} cursor-pointer [&>option]:bg-black-background`}
                    >
                        <option value="" disabled>Selecione</option>
                        {CONTACT_SUBJECTS.map((subject) => (
                            <option key={subject} value={subject}>{subject}</option>
                        ))}
                    </select>
                    {errors.assunto && <p id="assunto-erro" className={errorClass}>{errors.assunto}</p>}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className={labelClass}>Mensagem</label>
                <textarea
                    id="mensagem" name="mensagem" rows={5} required
                    aria-invalid={!!errors.mensagem} aria-describedby={describedBy("mensagem")}
                    className={`${inputClass} resize-y`}
                />
                {errors.mensagem && <p id="mensagem-erro" className={errorClass}>{errors.mensagem}</p>}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p id="form-aviso" className="text-xs leading-relaxed text-gray-400-dark max-w-sm">
                    Formulário demonstrativo.<br/>
                    Nenhum dado é enviado ou armazenado.
                </p>
                <Button type="submit" variant="primary">Enviar mensagem</Button>
            </div>
        </form>
    )
}