import styled from "styled-components";

export const Box = styled.div`
    height: 100px;
    width: 100px;
    border: 1px solid black;
    cursor: pointer;
    background-color: ${props => props.filled};
    transition: background-color .3s ease-in-out;
`