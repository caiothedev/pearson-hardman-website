import type { Metadata } from "next"
import Sidebar from "@/_components/Sidebar"

export const metadata: Metadata = {
    title: {
        default: "Intranet",
        template: "%s | Intranet Pearson Hardman",
    },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
}

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
    return (
        <div className="flex flex-1 flex-col md:flex-row">
            <Sidebar />
            <main id="conteudo" tabIndex={-1} className="flex flex-1 flex-col min-w-0 bg-gray-100 focus:outline-none">
                {children}
            </main>
        </div>
    )
}
