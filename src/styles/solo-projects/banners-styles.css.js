import {styled} from "styled-components";

export const BannersContainer = styled.div`
    display: grid;
    grid-template-areas: ". title ."
                         ". left-subtitle right-subtitle"
                         "success-subtitle m-banner-success s-banner-success"
                         "warning-subtitle m-banner-warning s-banner-warning"
                         "error-subtitle m-banner-error s-banner-error"
                         "neutral-subtitle m-banner-neutral s-banner-neutral";
    grid-template-columns: 0.43fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, minmax(1em, 1fr)); 
`
export const StyledTitle = styled.h1`
    grid-area: title;
    margin: 2em 0 .8em 0;
`
export const LeftSubtitle = styled.h2`
    grid-area: left-subtitle;
    margin:0;
`
export const RightSubtitle = styled(LeftSubtitle)`
    grid-area: right-subtitle;
`
export const Sidebar = styled.h2`
    text-align: right;
    margin: auto 1.4em auto 0;
    padding: 1em 0;
`
export const SuccessSubtitle = styled(Sidebar)`
    grid-area: success-subtitle;
`
export const WarningSubtitle = styled(Sidebar)`
    grid-area: warning-subtitle;
`
export const ErrorSubtitle = styled(Sidebar)`
    grid-area: error-subtitle;
`
export const NeutralSubtitle = styled(Sidebar)`
    grid-area: neutral-subtitle;
`
export const StyledBanner = styled.div`
    color: ${props => `var(--clr-${props.color})` || "var(--clr-green)"};
    background-color: ${props => `var(--bgclr-${props.color})` || "var(--bgclr-green)"};
    padding: 0.5em 1em;
    margin: auto 2em auto 0;

    font-size: var(--fs-small);
`
export const MBannerSuccess = styled(StyledBanner)`
    grid-area: m-banner-success;
`
export const MBannerWarning = styled(StyledBanner)`
    grid-area: m-banner-warning;
`
export const MBannerError = styled(StyledBanner)`
    grid-area: m-banner-error;
`
export const MBannerNeutral = styled(StyledBanner)`
    grid-area: m-banner-neutral;
`
export const SBannerSuccess = styled(StyledBanner)`
    grid-area: s-banner-success;
`
export const SBannerWarning = styled(StyledBanner)`
    grid-area: s-banner-warning;
`
export const SBannerError = styled(StyledBanner)`
    grid-area: s-banner-error;
`
export const SBannerNeutral = styled(StyledBanner)`
    grid-area: s-banner-neutral;
`