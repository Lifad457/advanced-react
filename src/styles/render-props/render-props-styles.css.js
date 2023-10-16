import styled from "styled-components";

const BoxStyle = `
    height: 100px;
    width: 100px;
    border: 1px solid black;
    cursor: pointer;
    background-color: white;
    transition: background-color .3s ease-in-out;
`

export const Box = styled.div`
    ${BoxStyle}
`

export const BoxFilled = styled.div`
    ${BoxStyle}
    background-color: blue;
`