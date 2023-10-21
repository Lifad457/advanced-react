import { CardBody, CardHeader, StyledCard, StyledCloud } from "../../styles/solo-projects/cards-styles.css";

export default function Card({ $hover }) {
    return (
        <StyledCard $hover={$hover}>
            <StyledCloud />
            <CardHeader>Easy Deployement</CardHeader>
            <CardBody>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</CardBody>
        </StyledCard>
    )
}