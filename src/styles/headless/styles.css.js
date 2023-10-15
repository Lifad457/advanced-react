import styled from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs"

const starStyle = `
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: color .5s ease-in-out;
    user-select: none;
`

export const StarEmpty = styled(BsStar)`
    ${starStyle}
    color: white;
`

export const StarFilled = styled(BsStarFill)`
    ${starStyle}
    color: orange;
`