import styled from "styled-components";
import { MdOutlineHouseboat } from "react-icons/md";

export const TestimonialesContainer = styled.div`
    margin: 0 5% 5em;
    h1 {
        margin: 1.5em 4em;
    }
    display: flex;
    flex-direction: column;
`
export const TestimonialWithPic = styled.div`
    margin: 4em 0;
    padding: 2em;
    max-width: 1000px;
    max-height: 250px;
    min-height: 250px;
    background-color: var(--clr-blue);
    color: var(--clr-white);
    position: relative;
    display: grid;
    grid-template-areas: "picture quote"
                         "picture name";
    grid-template-columns: 1fr 2.5fr;
    grid-gap: 2em;
    align-items: center;

    q {
        font-size: var(--fs-large);
        font-weight: var(--fw-semi-bold);
        font-style: italic;
        grid-area: quote;
    }
    address { 
        grid-area: name;
    }
    img {
        z-index: 1;
        max-height: 20em;
        border-radius: 1em;
        object-fit: cover;
        grid-area: picture;
        position: absolute;
        top: -4em;
    }

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        min-width: 300px;
        max-height: unset;
        min-height: unset;
        align-items: unset;
        padding: 18em 1em 3em 1em;

        img {
            position: absolute;
            margin-bottom: 1em;
            top: -5em;
            left: 2.5em;
            object-fit: contain;
        }

        q {
        }
    }
`
export const TestimonialWithoutPic = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10em;
    max-width: 1000px;
    max-height: 250px;
    min-height: 250px;
    background-color: var(--bgclr-white);
    text-align: center;
    line-height: 1.6em;

    p {
        font-size: var(--fs-large);
        font-weight: var(--fw-semi-bold);
    }
    q {
        font-size: var(--fs-large);
        font-weight: var(--fw-semi-bold);
        font-style: italic;
        padding-bottom: 1em;
    }
    span {
        color: var(--clr-blue);
        font-weight: var(--fw-bold);   
    }
`
export const StyledIcon = styled(MdOutlineHouseboat)`
    color: var(--clr-blue);
    font-size: 1.6em;
    transform: translate(0, 6px);
`