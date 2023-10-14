import { StyledButton } from "../../styles/context/styles.css"
import { useContext } from "react"
import { ThemeContext } from "../../pages/Context"

export default function Button() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <StyledButton className={`${theme}-theme`} onClick={toggleTheme}>
            Switch Theme
        </StyledButton>
    )
}