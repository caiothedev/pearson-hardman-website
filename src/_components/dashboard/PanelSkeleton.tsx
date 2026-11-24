/** Fallback dos `<Suspense>` internos: linhas cinza no lugar do conteúdo. */
export default function PanelSkeleton({ rows = 4 }: { rows?: number }) {
    return (
        <div role="status" aria-label="Carregando" className="flex flex-col gap-3 border border-gray-300 bg-white-background p-6">
            {Array.from({ length: rows }, (_, index) => (
                <span key={index} className="block h-4 w-full bg-gray-100 motion-safe:animate-pulse" />
            ))}
        </div>
    )
}