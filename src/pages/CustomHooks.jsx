import useToggle from "../components/hooks/useToggle"
import { Star } from "../styles/hooks/styles.css"
import GlobalStyle from "../styles/hooks/global-styles.css.js"
import { BsStar, BsStarFill } from "react-icons/bs"
import Menu from "../components/hooks/menu/index"

export default function CustomHooks() {
    const [on, toggle] = useToggle()

    return (
        <>
            <GlobalStyle />
            <Star $asElement={on ? BsStarFill : BsStar} onClick={toggle} />

            <div>
                <Menu onOpen={() => console.log("Opened/closed")}>
                    <Menu.Button>Menu</Menu.Button>
                    <Menu.Dropdown>
                        <Menu.Item>Home</Menu.Item>
                        <Menu.Item>About</Menu.Item>
                        <Menu.Item>Contact</Menu.Item>
                        <Menu.Item>Blog</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </>
    )
}