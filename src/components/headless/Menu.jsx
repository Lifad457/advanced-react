import MenuComponent from "./menu/index"

function Menu() {
    return (
        <MenuComponent>
            <MenuComponent.Button>Menu</MenuComponent.Button>
            <MenuComponent.Dropdown>
                <MenuComponent.Item>Home</MenuComponent.Item>
                <MenuComponent.Item>About</MenuComponent.Item>
                <MenuComponent.Item>Contact</MenuComponent.Item>
                <MenuComponent.Item>Blog</MenuComponent.Item>
            </MenuComponent.Dropdown>
        </MenuComponent>
    )
}
export default Menu