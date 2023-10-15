import { ToggleContext } from "./Toggle"
import { useContext } from "react"

export default function ToggleButton({ children }) {
    const { toggle } = useContext(ToggleContext)
    
    return (
        <div onClick={toggle}>
            {children}
        </div>
    )
}