import Button from "../button/Button"
import Toggle from "../toggle/index"

export default function MenuButton({ children }) {
    return (
        <Toggle.Button>
            <Button>{children}</Button>
        </Toggle.Button>
    )
}