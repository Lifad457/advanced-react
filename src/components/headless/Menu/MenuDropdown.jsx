import { StyledMenuDropdown } from "../../../styles/compound/styles.css"
import Toggle from "../toggle/index"

export default function MenuDropdown({ children }) {
    return (
        <Toggle.On>
            <StyledMenuDropdown>
                {children}
            </StyledMenuDropdown>
        </Toggle.On>
    )
}