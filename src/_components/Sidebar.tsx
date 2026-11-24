import { Suspense } from "react"
import Avatar from "@/_components/ui/Avatar"
import SidebarNav from "@/_components/SidebarNav"
import { getCurrentUser } from "@/_lib/data"
import { logout } from "@/_lib/actions"

export default function Sidebar() {
    return (
        <aside className="on-dark flex flex-col bg-black-background text-white-text md:sticky md:top-20 md:h-[calc(100svh-5rem)] md:w-64 lg:w-72 md:shrink-0">
            <SidebarNav />
            <div className="mt-auto hidden border-t-2 border-white-text/10 p-6 md:block">
                <Suspense fallback={<div className="h-10" />}>
                    <UserCard />
                </Suspense>
            </div>
        </aside>
    )
}

async function UserCard() {
    const user = await getCurrentUser()

    return (
        <div className="flex flex-row items-center justify-between gap-5">
            <div className="flex min-w-0 items-center gap-3">
                <Avatar name={user.name} initials={user.initials} image={user.image} />
                <div className="flex min-w-0 flex-col">
                    <span className="truncate font-bold text-sm" title={user.name}>
                        {user.name}
                    </span>
                    <span className="truncate text-xs text-gray-400-dark" title={user.title}>
                        {user.title}
                    </span>
                </div>
            </div>
            <form action={logout} className="shrink-0">
                <button
                    type="submit"
                    className="cursor-pointer font-blair font-bold uppercase tracking-[0.2em] text-xs text-gray-400-dark transition-fast hover:text-white-text"
                >
                    Sair
                </button>
            </form>
        </div>
    )
}