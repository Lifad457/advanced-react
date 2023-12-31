import {styled} from "styled-components";

export const BadgesContainer = styled.div`
    margin: 0 5%;
    h1 {
        margin: 1em 4em;
    }
`
export const StyledBadge = styled.div`
    display: inline-block;
    font-family: var(--ff-primary);
    font-weight: var(--fw-bold);
    padding: 0.7em 1.5em;
    margin: 0.3em 0.5em;
    ${props => props.shape === "pill" && `border-radius: 1em` };
    background-color: ${props => `var(--bgclr-${props.color})` || "var(--bgclr-gray)"};
    color: ${props => `var(--clr-${props.color})` || "var(--clr-gray)"};
`
