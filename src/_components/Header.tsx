import Link from "next/link"

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-between gap-4">
            <div>
                <Link href="/">
                    <span className="pearson-hardman-font">Pearson Hardman</span>
                </Link>
            </div>
            <div>
                <nav></nav>
            </div>
        </header>
    )
}