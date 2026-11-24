import HeroSection from "@/_components/mainSections/HeroSection"
import AboutSection from "@/_components/mainSections/AboutSection"
import PracticeAreasSection from "@/_components/mainSections/PracticeAreasSection"
import PartnersSection from "@/_components/mainSections/PartnersSection"
import QuoteSection from "@/_components/mainSections/QuoteSection"
import CareersSection from "@/_components/mainSections/CareersSection"
import ContactSection from "@/_components/mainSections/ContactSection"
import Footer from "@/_components/Footer"

export default function Home() {
    return (
        <>
            <main id="conteudo" tabIndex={-1} className="flex flex-1 flex-col focus:outline-none">
                <HeroSection />
                <AboutSection />
                <PracticeAreasSection />
                <PartnersSection />
                <QuoteSection />
                <CareersSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
