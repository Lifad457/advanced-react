import GlobalStyle from "../styles/solo-projects/global-styles.css";
import { BadgesContainer } from "../styles/solo-projects/badges-styles.css";
import { BannersContainer,
     LeftSubtitle,
     RightSubtitle,
     StyledTitle,
     SuccessSubtitle,
     WarningSubtitle,
     ErrorSubtitle,
     NeutralSubtitle} from "../styles/solo-projects/banners-styles.css";
import Badge from "../components/solo-projects/Badge"
import Banner from "../components/solo-projects/Banner";
import { CardsContainer, Container } from "../styles/solo-projects/cards-styles.css";
import Card from "../components/solo-projects/Card";
import { TestimonialesContainer } from "../styles/solo-projects/testimoniales-styles.css";
import Testimonial from "../components/solo-projects/Testimonial";
import photo from "../assets/images/photo.jpg"

export default function SoloProjects() {
    const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];

    function generateBadges(shape) {
        return colors.map(color => <Badge key={color} color={color} shape={shape}>Badge</Badge>);
    }

    const banners = [{id: "1", title: "Congratulations!", color: "green", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."},
                     {id: "2", title: "Attention", color: "yellow", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."},
                     {id: "3", title: "There is a problem with your application", color: "red", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."},
                     {id: "4", title: "Update available", color: "blue", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."},
                     {id: "5", title: "Congratulations!", color: "green"},
                     {id: "6", title: "Attention", color: "yellow"},
                     {id: "7", title: "There is a problem with your application", color: "red"},
                     {id: "8", title: "Update available", color: "blue"}]

    function generateBanners() {
        return banners.map(banner => 
            <Banner key={banner.id} color={banner.color} desc={banner.desc}>{banner.title}</Banner>
        )
    }

    return (
        <>
            <GlobalStyle />

            <BadgesContainer>
                <h1>BADGES</h1>
                <h2>Square</h2>
                {generateBadges("square")}
                <h2>Pill</h2>
                {generateBadges("pill")}
            </BadgesContainer>

            <BannersContainer>
                <StyledTitle>Banners</StyledTitle>
                <LeftSubtitle>MULLTI LINE</LeftSubtitle>
                <RightSubtitle>SINGLE LINE</RightSubtitle>
                <SuccessSubtitle>SUCCESS</SuccessSubtitle>
                <WarningSubtitle>WARNING</WarningSubtitle>
                <ErrorSubtitle>ERROR</ErrorSubtitle>
                <NeutralSubtitle>NEUTRAL</NeutralSubtitle>
                { generateBanners() }
            </BannersContainer>

            <CardsContainer>
                <h1>CARDS</h1>
                <Container>
                    <Card />
                    <Card $hover />
                </Container>
            </CardsContainer>

            <TestimonialesContainer>
                <h1>TESTIMONIALS</h1>
                <h2>With Pic</h2>
                <Testimonial 
                    pic={photo} 
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." 
                    name="John Doe"
                    location="New York, NY"
                />
                <h2>No Pic</h2>
                <Testimonial 
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." 
                    name="John Doe"
                    location="New York, NY"
                />
            </TestimonialesContainer>
        </>
    )
}