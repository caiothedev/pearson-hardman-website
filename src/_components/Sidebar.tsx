import { Suspense } from "react"
import Link from "next/link"
import Avatar from "@/_components/ui/Avatar"
import SidebarNav from "@/_components/SidebarNav"
import { getCurrentUser } from "@/_lib/data"
import { logout } from "@/_lib/actions"

export default function Sidebar() {
    return (
        <aside className="on-dark flex flex-col bg-black-background text-white-text md:sticky md:top-0 md:h-svh md:w-64 lg:w-72 md:shrink-0">
            <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-8">
                <Link href="/dashboard" className="flex flex-col leading-none">
                    <span className="pearson-hardman-font font-medium uppercase text-base md:text-lg">Pearson Hardman</span>
                    <span className="mt-2 font-blair font-light uppercase tracking-[0.5em] text-[0.6rem] text-gray-400-dark">
                        Intranet
                    </span>
                </Link>
            </div>
            <SidebarNav />
            <div className="mt-auto hidden border-t border-white-text/10 p-6 md:block">
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
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
                <Avatar name={user.name} initials={user.initials} image={user.image} />
                <div className="flex min-w-0 flex-col">
                    <span className="truncate font-bold text-sm">{user.name}</span>
                    <span className="truncate text-xs text-gray-400-dark">{user.title}</span>
                </div>
            </div>
            <form action={logout}>
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