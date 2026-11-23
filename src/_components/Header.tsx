import Link from "next/link"
import MobileMenu from "@/_components/MobileMenu"
import { NAV_LINKS } from "@/_data/site"
import { container } from "@/_components/ui/styles"
import Button from "./ui/Button"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-black-background text-white-text">
            <a
                href="#conteudo"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white-background focus:text-black-text focus:px-4 focus:py-2 font-blair font-bold uppercase text-xs tracking-[0.2em]"
            >
                Pular para o conteúdo
            </a>
            <div className={`${container} flex h-16 md:h-20 flex-row items-center justify-between gap-4`}>
                <Link href="/" aria-label="Pearson Hardman, página inicial" className="flex flex-col leading-none">
                    <span className="pearson-hardman-font whitespace-nowrap font-medium uppercase text-sm sm:text-base md:text-lg">
                        Pearson Hardman
                    </span>
                </Link>
                <div className="w-full flex flex-row items-center justify-between gap-2">
                    <nav aria-label="Navegação principal" className="hidden lg:block">
                        <ul className="flex flex-row items-center gap-8">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group relative py-2 font-bold uppercase text-xs tracking-[0.2em] text-gray-400-dark hover:text-white-text transition-normal"
                                    >
                                        {link.label}
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-white-text group-hover:scale-x-100 motion-safe:transition-transform motion-safe:duration-300"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <MobileMenu />
                    <button className="inline-flex items-center justify-center gap-2 min-h-10 px-5 font-blair font-bold uppercase text-sm cursor-pointer transition-normal disabled:cursor-not-allowed disabled:opacity-50 bg-white-background text-black-text border border-white-background hover:bg-transparent hover:text-white-text">
                        Agendar Reunião
                    </button>
                </div>
            </div>
        </header>
    )
}