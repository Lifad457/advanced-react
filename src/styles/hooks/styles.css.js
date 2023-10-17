import styled from "styled-components";
import { BsStar } from "react-icons/bs"

const BaseComponent = styled(BsStar)`
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: color .5s ease-in-out;
    user-select: none;
`

export const ConditionalStyledComponent = styled(BaseComponent).attrs((props) => ({
    as: props.asElement || 'div', 
}))`
    ${props => props.asElement === BsStar ? "color: white;" : "color: orange;"}
`
