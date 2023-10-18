import { useContext } from "react"
import { MenuContext } from "./Menu"
import { StyledMenuDropdown } from "../../../styles/compound/styles.css"

export default function MenuDropdown({ children }) {
    const { open } = useContext(MenuContext)
    return (
        open ?
        <StyledMenuDropdown>
            {children}
        </StyledMenuDropdown>
        : null
    )
}