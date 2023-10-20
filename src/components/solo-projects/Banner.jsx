import { StyledBanner } from "../../styles/solo-projects/banners-styles.css"

export default function Banner({ children, color, desc}) {
    return (
        <StyledBanner color={color} desc={desc} >
            { children }
        </StyledBanner>
    )
}