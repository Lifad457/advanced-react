import Header from "../components/context/Header"
import Button from "../components/context/Button"
import { Container } from "../styles/context/styles.css"
import { createContext, useState } from "react"

const ThemeContext = createContext()

export default function Context() {
    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Container className={`${theme}-theme`}>
                <Header />
                <Button />
            </Container>
        </ThemeContext.Provider>
    )
}
export { ThemeContext }