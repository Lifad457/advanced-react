import GlobalStyle from "../styles/solo-projects/global-styles.css";
import { BadgeContainer } from "../styles/solo-projects/badges-styles.css";
import { BannerContainer } from "../styles/solo-projects/banners-styles.css";
import Badge from "../components/solo-projects/Badge"

export default function SoloProjects() {
    const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];

    function generateBadges(shape) {
        return colors.map(color => <Badge key={color} color={color} shape={shape}>Badge</Badge>);
    }

    return (
        <>
            <GlobalStyle />

            <BadgeContainer>
                <h1>BADGES</h1>
                <h2>Square</h2>
                {generateBadges("square")}
                <h2>Pill</h2>
                {generateBadges("pill")}
            </BadgeContainer>

            <BannerContainer>
                <h1>Banners</h1>

            </BannerContainer>

        </>
    )
}