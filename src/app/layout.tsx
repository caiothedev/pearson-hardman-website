import type { Metadata, Viewport } from "next"
import Header from "@/_components/Header"
import Footer from "@/_components/Footer"
import { nimbusSans, itcBlair } from "@/fonts"
import "./globals.css"

const SITE_URL = "https://pearsonhardman.com.br"
const DESCRIPTION = "Firma de advocacia corporativa de Manhattan: fusões e aquisições, contencioso empresarial e direito societário. Site fictício inspirado na série Suits."

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `Pearson Hardman | ${DESCRIPTION}`,
        template: "%s | Pearson Hardman",
    },
    description: DESCRIPTION,
    applicationName: "Pearson Hardman",
    authors: [
        {
            name: "Pearson Hardman",
            url: SITE_URL,
        },
    ],
    category: "business",
    creator: "Caio Oliveira",
    publisher: "Caio Oliveira",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: SITE_URL,
        siteName: "Pearson Hardman",
        title: "Pearson Hardman",
        description: DESCRIPTION,
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Pearson Hardman",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pearson Hardman",
        description: DESCRIPTION,
        images: ["/og-image.jpg"],
    },
    alternates: {
        canonical: "/",
        languages: {
            "pt-BR": "/",
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0A0A0A",
    colorScheme: "light",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="pt-BR" className={`${nimbusSans.variable} ${itcBlair.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
