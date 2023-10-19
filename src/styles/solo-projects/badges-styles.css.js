import {styled} from "styled-components";

export const Container = styled.div`
    h1 {
        font-family: var(--ff-secondary);
        font-size: var(--fs-l-h1);
        margin: 1em 4em;
    }

    h2 {
        font-family: var(--ff-secondary);
        font-size: var(--fs-l-h2);
        opacity: 0.6;
    }
`

export const BadgeContainer = styled.div`

`

const commonStyles = `
    display: inline-block;
    background-color: white;
    padding: 0.5em 1em;
`

export const Square = styled.div`
    ${commonStyles}
    
`

export const Pill = styled.div`
    ${commonStyles}
    border-radius: 1em;
    
`