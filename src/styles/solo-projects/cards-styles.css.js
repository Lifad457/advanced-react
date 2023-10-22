import styled from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const CardsContainer = styled.div`
    margin: 0 5%;
    h1 {
        margin: 1.5em 4em;
    }
`
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 500px));
    grid-gap: 5em;
    justify-content: center;
    padding: 2em 0;
`   
export const StyledCloud = styled(AiOutlineCloudUpload)`
        color: var(--clr-white);
        position: absolute;
        width: 40px;
        height: 40px;
        top: -20px;
        left: 230px;
`
export const StyledCard = styled.div`
    background-color: var(--bgclr-white);
    border-radius: 1em;
    padding: 3em;
    text-align: center;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        background-color: var(--clr-blue);
        width: 75px;
        height: 75px;
        top: -37.5px;
        left: 212.5px;
        border-radius: 1em;
    }

    ${props => props.$hover && `
        &:after {
            content: "HOVER";
            position: absolute;
            font-family: var(--ff-secondary);
            font-weight: var(--fw-bold);
            font-size: var(--fs-l-h2);
            opacity: 0.6;
            top: -45px;
            right: -60px;
            rotate: 30deg;
        }`
    }

    &:focus, &:hover {
        ${props => props.$hover && `background-color: var(--bgclr-blue)`};
        cursor: pointer;
    }
`
export const CardHeader = styled.div`
    margin: 1.2em;
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-l-h2);
`
export const CardBody = styled.div`
    padding: 0 .2em;
    font-size: var(--fs-large);
    opacity: 0.8;
`