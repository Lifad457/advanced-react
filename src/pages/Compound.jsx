import Menu from "../components/compound/menu/Menu"
import MenuButton from "../components/compound/menu/MenuButton"
import MenuDropdown from "../components/compound/menu/MenuDropdown"
import MenuItem from "../components/compound/menu/MenuItem"
import GlobalStyle from "../styles/compound/global-styles.css"

export default function Compound() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <>
        <GlobalStyle />
        <Menu>
            <MenuButton>Sports</MenuButton>
            <MenuDropdown>
                {sports.map(sport => (
                <MenuItem key={sport}>{sport}</MenuItem>
                ))}
            </MenuDropdown>
        </Menu>
    </>
  )
}
