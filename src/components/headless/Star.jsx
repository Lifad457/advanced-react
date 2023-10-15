import Toggle from "./toggle/index"
import { StarEmpty, StarFilled } from "../../styles/headless/styles.css"

export default function Star() {
    return (
        <Toggle>
            <Toggle.Button>
                <Toggle.On>
                    <StarFilled />
                </Toggle.On>
                <Toggle.Off>
                    <StarEmpty />
                </Toggle.Off>
            </Toggle.Button>
        </Toggle>
    )
}