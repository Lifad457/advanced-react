import { useContext } from "react"
import Button from "../../headless/button/Button"
import { MenuContext } from "./Menu"

export default function MenuButton({ children }) {
    const { toggleOpen } = useContext(MenuContext)
    return (
        <Button onClick={toggleOpen}>{children}</Button>
    )
}