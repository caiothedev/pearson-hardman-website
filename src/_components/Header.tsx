import Link from "next/link"

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-between">
            <div></div>
            <div>
                <Link href="/">
                    <span className="pearson-hardman-font">Pearson Hardman</span>
                </Link>
            </div>
            <div></div>
        </header>
    )
}