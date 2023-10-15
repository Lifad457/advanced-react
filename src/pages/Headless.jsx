import Toggle from "../components/headless/Toggle/index"
import GlobalStyle from "../styles/headless/global-styles.css.js"
import { StarEmpty, StarFilled } from "../styles/headless/styles.css"
import Menu from "../components/headless/Menu/index"

export default function Headless() {
    return (
        <>
            <GlobalStyle />
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

            <br />

            <Toggle>
                <Menu>
                    <Toggle.Button>
                        <Menu.Button>Menu</Menu.Button>
                    </Toggle.Button>
                    <Toggle.On>
                        <Menu.Dropdown>
                            <Menu.Item>Home</Menu.Item>
                            <Menu.Item>About</Menu.Item>
                            <Menu.Item>Contact</Menu.Item>
                            <Menu.Item>Blog</Menu.Item>
                        </Menu.Dropdown>
                    </Toggle.On>
                </Menu>
            </Toggle>

        </>
    )      
}