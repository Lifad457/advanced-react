import useToggle from "../components/hooks/useToggle"
import { Star } from "../styles/hooks/styles.css"
import GlobalStyle from "../styles/hooks/global-styles.css.js"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function CustomHooks() {
    const [on, toggle] = useToggle()

    return (
        <>
            <GlobalStyle />
            <Star asElement={on ? BsStarFill : BsStar} onClick={toggle} />
        </>
    )
}