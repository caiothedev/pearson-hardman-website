import Link from "next/link"
import Avatar from "@/_components/ui/Avatar"

export default function Sidebar() {
    return (
        <aside>
            <div></div>
            <nav></nav>
            <div>
                <Avatar />
                <div>
                    <span>{user.name}</span>
                    <span>{user.role}</span>
                </div>
            </div>
        </aside>
    )
}