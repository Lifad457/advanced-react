import { StyledBanner } from "../../styles/solo-projects/banners-styles.css"

export default function Banner({ children, color}) {
    return (
        <StyledBanner color={color}>
            { children }
        </StyledBanner>
    )
}