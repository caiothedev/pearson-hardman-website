/** Superfície branca com borda fina, usada em todo o painel interno. */
export default function Panel({ className = "", children }: { className?: string; children: React.ReactNode }) {
    return <section className={`border border-gray-300 bg-white-background ${className}`.trim()}>{children}</section>
}

export const panelHeading = "font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-500"

export const dashboardContainer = "flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:px-10 md:py-12"