import { StyledMenuDropdown } from "../../../styles/compound/styles.css"

export default function MenuDropdown({ children, open }) {
    return open ? (
        <StyledMenuDropdown>
            {children}
        </StyledMenuDropdown>
    ) : null
}