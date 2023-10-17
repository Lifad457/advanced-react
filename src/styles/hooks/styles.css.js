import styled from "styled-components";

const BaseComponent = styled.div`
    height: 30px;
    width: 30px;
    cursor: pointer;
    user-select: none;
`

export const Star = styled(BaseComponent).attrs((props) => ({
    as: props.asElement || 'div', 
}))`
    ${props => props.asElement.name === "BsStar" ? "color: white;" : "color: orange;"}
`
