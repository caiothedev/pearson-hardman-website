export type ButtonVariant = "primary" | "outline" | "dark" | "outline-dark"

const base =
    "inline-flex items-center justify-center gap-2 min-h-12 px-7 font-blair font-bold uppercase text-xs md:text-sm tracking-[0.2em] cursor-pointer transition-normal disabled:cursor-not-allowed disabled:opacity-50"

const variants: Record<ButtonVariant, string> = {
    // Fundo escuro
    primary: "bg-white-background text-black-text border-2 border-white-background hover:bg-transparent hover:text-white-text",
    outline: "bg-transparent text-white-text border-2 border-white-text/60 hover:border-white-text hover:bg-white-background hover:text-black-text",
    // Fundo claro
    dark: "bg-black-background text-white-text border-2 border-black-background hover:bg-transparent hover:text-black-text",
    "outline-dark": "bg-transparent text-black-text border-2 border-black-text/40 hover:border-black-text hover:bg-black-background hover:text-white-text",
}

export function buttonClasses(variant: ButtonVariant = "primary", className = "") {
    return `${base} ${variants[variant]} ${className}`.trim()
}

export const container = "w-full max-w-7xl mx-auto px-4 md:px-8"