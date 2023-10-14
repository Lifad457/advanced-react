import { StyledHeader } from "../../styles/context/styles.css"
import { useContext } from "react"
import { ThemeContext } from "../../pages/Context"

export default function Header() {
    const {theme} = useContext(ThemeContext)

    return (
        <StyledHeader className={`${theme}-theme`}>
            <h1>{`${theme.substring(0,1).toUpperCase() + theme.substring(1)} Theme`}</h1>
        </StyledHeader>
    )
}