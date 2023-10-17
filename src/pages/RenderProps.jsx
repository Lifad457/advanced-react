import Toggle from "../components/headless/toggle/index"
import GlobalStyle from "../styles/headless/global-styles.css"
import { Box } from "../styles/render-props/render-props-styles.css"

export default function RenderProps() {
    return (
        <>
            <GlobalStyle />
            <Toggle>
                <Toggle.Button>
                    <Toggle.Display>
                        {(on) => <Box filled={on ? "blue" : "white"} />  }
                    </Toggle.Display>
                </Toggle.Button>
            </Toggle>
        </>
    )
}