import Image from "next/image"

export default function Avatar() {
    return (
        <div className="relative">
            <Image src="" alt="" width={64} height={64} draggable={false} className="rounded-full" />
        </div>
    )
}