import GlobalStyle from "../styles/headless/global-styles.css.js"
import Star from "../components/headless/Star"
import Menu from "../components/headless/Menu"

export default function Headless() {
    return (
        <>
            <GlobalStyle />
            <Star />
            <br />
            <Menu />
        </>
    )      
}