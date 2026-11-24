import PageHeader from "@/_components/dashboard/PageHeader"
import { dashboardContainer } from "@/_components/dashboard/Panel"
import LinkButton from "@/_components/ui/LinkButton"

export default function DashboardNotFound() {
    return (
        <div className={dashboardContainer}>
            <PageHeader
                eyebrow="Erro 404"
                title="Este registro não está nos arquivos."
                description="Ou nunca existiu, ou o Louis guardou numa pasta que só ele sabe onde fica."
            />
            <LinkButton href="/dashboard" variant="dark" className="self-start">Voltar ao painel</LinkButton>
        </div>
    )
}