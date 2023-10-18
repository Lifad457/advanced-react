import { StyledMenuItem } from "../../../styles/compound/styles.css"

export default function MenuItem({ children }) {
    return (
        <StyledMenuItem>
            {children}
        </StyledMenuItem>
    )
}