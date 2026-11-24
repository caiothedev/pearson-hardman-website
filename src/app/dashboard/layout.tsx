import type { Metadata } from "next"
import Sidebar from "@/_components/Sidebar"

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
}

export default function AuthenticatedLayout({ children }: LayoutProps<"/">) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}
