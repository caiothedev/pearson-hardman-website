export default function Loading() {
    return (
        <main id="conteudo" className="flex flex-1 items-center justify-center py-40">
            <div role="status" className="flex flex-col items-center gap-6">
                <span aria-hidden="true" className="relative block h-px w-32 overflow-hidden bg-gray-300">
                    <span className="absolute inset-y-0 left-0 w-1/3 bg-black-background motion-safe:animate-[loading-bar_1.2s_ease-in-out_infinite]" />
                </span>
                <span className="font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-500">Carregando</span>
            </div>
        </main>
    )
}