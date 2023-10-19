import { Pill, Square } from "../../styles/solo-projects/badges-styles.css";

export default function Badge({ children, color, shape}) {
    return (
        shape === "square" ?
            <Square color={color}>
                { children }
            </Square>
        :
            <Pill color={color}>
                { children }
            </Pill>
    )
}