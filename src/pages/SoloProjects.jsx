import GlobalStyle from "../styles/solo-projects/global-styles.css";
import { BadgeContainer, Container } from "../styles/solo-projects/badges-styles.css";
import Badge from "../components/solo-projects/Badge"

export default function SoloProjects() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>BADGES</h1>
                <BadgeContainer>
                    <h2>Square</h2>
                    <Badge color="gray" shape="square">Badge</Badge>
                </BadgeContainer>
                <BadgeContainer>
                    <h2>Pill</h2>
                    <Badge color="gray" shape="pill">Badge</Badge>
                </BadgeContainer>
            </Container>
        </>
    )
}