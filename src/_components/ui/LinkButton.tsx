import Link from "next/link"
import { buttonClasses, type ButtonVariant } from "./styles"

type LinkButtonProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
    href: string
    variant?: ButtonVariant
}

export default function LinkButton({ href, variant = "primary", className, children, ...rest }: LinkButtonProps) {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}