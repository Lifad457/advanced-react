import { StyledBadge } from "../../styles/solo-projects/badges-styles.css";

export default function Badge({ children, color, shape}) {
    return (
        <StyledBadge color={color} shape={shape}>
            { children }
        </StyledBadge>
    )
}