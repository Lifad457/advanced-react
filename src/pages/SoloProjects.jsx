import GlobalStyle from "../styles/solo-projects/global-styles.css";
import { BadgeContainer } from "../styles/solo-projects/badges-styles.css";
import { BannerContainer,
     LeftSubtitle,
     RightSubtitle,
     StyledTitle,
     SuccessSubtitle,
     WarningSubtitle,
     ErrorSubtitle,
     NeutralSubtitle,
     MBannerSuccess,
     MBannerWarning,
     MBannerError,
     MBannerNeutral,
     SBannerSuccess,
     SBannerWarning,
     SBannerError,
     SBannerNeutral} from "../styles/solo-projects/banners-styles.css";
import Badge from "../components/solo-projects/Badge"

export default function SoloProjects() {
    const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];

    function generateBadges(shape) {
        return colors.map(color => <Badge key={color} color={color} shape={shape}>Badge</Badge>);
    }

    return (
        <>
            <GlobalStyle />

            <BadgeContainer>
                <h1>BADGES</h1>
                <h2>Square</h2>
                {generateBadges("square")}
                <h2>Pill</h2>
                {generateBadges("pill")}
            </BadgeContainer>

            <BannerContainer>
                <StyledTitle>Banners</StyledTitle>
                <LeftSubtitle>MULLTI LINE</LeftSubtitle>
                <RightSubtitle>SINGLE LINE</RightSubtitle>
                <SuccessSubtitle>SUCCESS</SuccessSubtitle>
                <WarningSubtitle>WARNING</WarningSubtitle>
                <ErrorSubtitle>ERROR</ErrorSubtitle>
                <NeutralSubtitle>NEUTRAL</NeutralSubtitle>
                <MBannerSuccess color="green">Congratulation</MBannerSuccess>
                <MBannerWarning color="yellow">Attention</MBannerWarning>
                <MBannerError color="red">There is a problem with your application</MBannerError>
                <MBannerNeutral color="blue">Update Available</MBannerNeutral>
                <SBannerSuccess color="green">Congratulation</SBannerSuccess>
                <SBannerWarning color="yellow">Attention</SBannerWarning>
                <SBannerError color="red">There is a problem with your application</SBannerError>
                <SBannerNeutral color="blue">Update Available</SBannerNeutral>
            </BannerContainer>

        </>
    )
}