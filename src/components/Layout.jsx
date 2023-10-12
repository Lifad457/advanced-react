import { Outlet } from "react-router-dom"
import GlobalStyle from "../styles/global-styles.css"

export default function Layout() {
    return (
        <>
            <GlobalStyle />
            
            <Outlet />
        </>
    )
}