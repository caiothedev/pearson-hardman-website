import type { Metadata, Viewport } from "next"
import { SITE } from "@/_data/site"
import Header from "@/_components/Header"
import { nimbusSans, itcBlair } from "@/fonts"
import "./globals.css"

const SITE_URL = SITE.url
const DESCRIPTION = SITE.description

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
            </body>
        </html>
    )
}
