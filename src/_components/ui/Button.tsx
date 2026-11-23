import { buttonClasses, type ButtonVariant } from "./styles"

type ButtonProps = React.ComponentProps<"button"> & { variant?: ButtonVariant }

export default function Button({ variant = "primary", className, type = "button", children, ...rest }: ButtonProps) {
    return (
        <button type={type} className={buttonClasses(variant, className)} {...rest}>
            {children}
        </button>
    )
}