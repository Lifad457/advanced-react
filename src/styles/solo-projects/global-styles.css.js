import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    &:root {
        --ff-primary: 'Inter', sans-serif;
        --ff-secondary: 'Permanent Marker', cursive;

        --fw-light: 300;
        --fw-regular: 400;
        --fw-semi-bold: 600;
        --fw-bold: 700;
        --fw-black: 900;

        --fs-l-h1: 3.2rem;
        --fs-l-h2: 1.85rem;
        --fs-l-pill: 1.35rem;

        --fs-s-h1: 2.95rem;
        --fs-s-h2: 1.3125rem;
        --fs-s-pill: 1rem;

        --fs-large: 1.2rem;
        --fs-normal: 1rem;
        --fs-small: 0.8rem;
        
        --clr-gray: #1F2937;
        --clr-red: #991B1B;
        --clr-yellow: #92400E;
        --clr-green: #065F46;
        --clr-blue: #1E40AF;
        --clr-indigo: #3730A3;
        --clr-purple: #5B21B6;
        --clr-pink: #9D174D;

        --bgclr-gray: #F3F4F6;
        --bgclr-red: #FEE2E2;
        --bgclr-yellow: #FEF3C7;
        --bgclr-green: #D1FAE5;
        --bgclr-blue: #DBEAFE;
        --bgclr-indigo: #E0E7FF;
        --bgclr-purple: #EDE9FE;
        --bgclr-pink: #FCE7F3;
    }

    body {
        background-color: #dddddd;
        font-family: var(--ff-primary);
        margin: 0 5%;
    }
`
export default GlobalStyle