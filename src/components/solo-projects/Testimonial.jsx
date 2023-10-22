import { StyledIcon, TestimonialWithPic, TestimonialWithoutPic } from "../../styles/solo-projects/testimoniales-styles.css";

export  default function Testimonial({ pic, quote, name, location }) {
    return (
        pic ? 
        <TestimonialWithPic >
            <img src={pic} alt="testimonial photo" />
            <q>{quote}</q>
            <address>
                {name}<br/>
                {location}
            </address>
        </TestimonialWithPic>
        :
        <TestimonialWithoutPic >
            <p><StyledIcon /> Work<span>cation</span></p>
            <q>{quote}</q>
            <address>
                {name} <span>/</span> {location}
            </address>
        </TestimonialWithoutPic>
    )
}