import Button from "../button/Button"

export default function MenuButton({ children, toggle }) {
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}