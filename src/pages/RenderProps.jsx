import Toggle from "../components/headless/toggle/index"
import GlobalStyle from "../styles/headless/global-styles.css"
import { Box, BoxFilled } from "../styles/render-props/render-props-styles.css"

export default function RenderProps() {
    return (
        <>
            <GlobalStyle />
            <Toggle>
                <Toggle.Button>
                    <Toggle.On>
                        <BoxFilled></BoxFilled>
                    </Toggle.On>
                    <Toggle.Off>
                        <Box></Box>
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle>
        </>
    )
}