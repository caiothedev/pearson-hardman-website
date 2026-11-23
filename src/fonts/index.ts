import localFont from "next/font/local"

export const nimbusSans = localFont({
    src: [
        { path: "./NimbusSanL-Reg.otf", weight: "400", style: "normal" },
        { path: "./NimbusSanL-RegIta.otf", weight: "400", style: "italic" },
        { path: "./NimbusSanL-Bol.otf", weight: "700", style: "normal" },
        { path: "./NimbusSanL-BolIta.otf", weight: "700", style: "italic" },
    ],
    variable: "--font-nimbus-sans",
    display: "swap",
    fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
})

export const itcBlair = localFont({
    src: [
        { path: "./ITC-Blair-Light.otf", weight: "300", style: "normal" },
        { path: "./ITC-Blair-Medium.otf", weight: "500", style: "normal" },
        { path: "./ITC-Blair-Bold.otf", weight: "700", style: "normal" },
    ],
    variable: "--font-itc-blair",
    display: "swap",
    fallback: ["Copperplate", "Arial", "sans-serif"],
})