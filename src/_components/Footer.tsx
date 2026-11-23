import Link from "next/link"
import { ADDRESS, NAV_LINKS, PRACTICE_AREAS } from "@/_data/site"
import { container } from "@/_components/ui/styles"

const headingClass = "font-blair font-bold uppercase tracking-[0.2em] text-xs text-white-text mb-5"
const linkClass = "text-sm text-gray-400-dark hover:text-white-text transition-fast"

export default function Footer() {
    return (
        <footer className="on-dark flex flex-col bg-black-background text-white-text">
            <div className={`${container} grid grid-cols-1 gap-12 py-16 md:py-20 lg:grid-cols-12`}>
                <div className="flex flex-col gap-6 lg:col-span-4">
                    <div className="flex flex-col">
                        <span className="pearson-hardman-font font-medium uppercase tracking-[0.18em] text-xl">
                            Pearson Hardman
                        </span>
                        <span className="font-blair font-light uppercase tracking-[0.5em] text-[0.65rem] text-gray-400-dark mt-2">
                            Advogados
                        </span>
                    </div>
                    <address className="not-italic text-sm leading-relaxed text-gray-400-dark">
                        <p>{ADDRESS.street}</p>
                        <p>{ADDRESS.city}</p>
                        <p className="mt-2">
                            <a href={ADDRESS.phoneHref} className={linkClass}>
                                {ADDRESS.phone}
                            </a>
                        </p>
                    </address>
                </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-8">
                    <nav aria-labelledby="footer-firma" className="flex flex-col gap-2">
                        <h2 id="footer-firma" className={headingClass}>Firma</h2>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={linkClass}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav aria-labelledby="footer-atuacao" className="flex flex-col gap-2">
                        <h2 id="footer-atuacao" className={headingClass}>Atuação</h2>
                        <ul className="flex flex-col gap-3">
                            {PRACTICE_AREAS.map((area) => (
                                <li key={area.title}>
                                    <Link href="/#atuacao" className={linkClass}>{area.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav aria-labelledby="footer-contato" className="flex flex-col gap-2">
                        <h2 id="footer-contato" className={headingClass}>Contato</h2>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/#contato" className={linkClass}>Agende uma reunião</Link></li>
                            <li><Link href="/#carreiras" className={linkClass}>Trabalhe conosco</Link></li>
                            <li><a href={ADDRESS.phoneHref} className={linkClass}>{ADDRESS.phone}</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={container}>
                <hr className="border-0 border-t border-white-text/10" />
            </div>
            <div className={`${container} flex flex-col gap-3 py-8 text-xs leading-relaxed text-gray-400-dark md:flex-row md:justify-between md:gap-8`}>
                <p className="max-w-3xl">
                    O conteúdo deste site é ficcional. A Pearson Hardman é a firma de advocacia da série <em>Suits</em>.
                    Este é um projeto de fã e de portfólio, sem fins comerciais e sem vínculo com a USA Network,
                    a NBCUniversal ou a Universal Content Productions. Nada aqui constitui aconselhamento jurídico.
                </p>
                <p className="shrink-0">
                    Desenvolvido por{" "}
                    <a href="https://github.com/caiothedev" className="underline underline-offset-4 hover:text-white-text transition-fast">
                        caiothedev
                    </a>
                </p>
            </div>
        </footer>
    )
}