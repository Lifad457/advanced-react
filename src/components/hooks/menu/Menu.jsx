import { StyledMenu } from '../../../styles/compound/styles.css'
import { createContext } from 'react'
import useToggle from '../useToggle'

const MenuContext = createContext()
export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle(true,  onOpen)

    return (
      <MenuContext.Provider value={{open, toggleOpen}}>
        <StyledMenu>
          { children }
        </StyledMenu>
      </MenuContext.Provider>
    )
}
export { MenuContext}