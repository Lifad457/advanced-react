import classnames from "classnames"
import { StyledButton } from "../../../styles/compound/styles.css"

export default function Button({ children, className, size, variant, ...rest }) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classnames(sizeClass, variantClass, className)

    return (
        <StyledButton className={allClasses} {...rest}>
            {children}
        </StyledButton>
    )
}