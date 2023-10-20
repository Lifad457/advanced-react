import {styled} from "styled-components";

export const BannerContainer = styled.div`
    display: grid;
    grid-template-areas: ". title title"
                         ". subtitle subtitle"
                         "sidebar banner banner"
                         "sidebar banner banner"
                         "sidebar banner banner"
                         "sidebar banner banner";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0.5em;
`
export const StyledBanner = styled.div`
   
`
