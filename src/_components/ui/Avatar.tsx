import Image from "next/image"

type AvatarProps = {
    name: string
    initials: string
    image?: string
    size?: number
}

/** Foto em tons de cinza ou, sem foto, as iniciais. */
export default function Avatar({ name, initials, image, size = 40 }: AvatarProps) {
    return (
        <div
            className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-800 text-white-text"
            style={{ width: size, height: size }}
        >
            {image ? (
                <Image src={image} alt={name} width={size} height={size} draggable={false} className="size-full object-cover grayscale" />
            ) : (
                <span aria-label={name} className="font-blair font-medium text-xs tracking-[0.1em]">{initials}</span>
            )}
        </div>
    )
}