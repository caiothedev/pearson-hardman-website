import Image from "next/image"

export default function HeroSection() {
    return (
        <section id="hero-section" className="relative overflow-hidden min-h-[75vh] max-h-[100vh]">
            <Image
                src="/images/hero-background.webp"
                alt=""
                width={1920} height={1080}
                draggable={false}
                className="size-full object-cover hero-image-gradient"
                quality="100"
            />
            <div className="flex flex-col items-center justify-center">
                <h1></h1>
                <p></p>
                <div className="flex flex-row items-center">

                </div>
            </div>
        </section>
    )
}