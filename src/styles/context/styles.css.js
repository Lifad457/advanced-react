import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    &.dark-theme {
        background-color: #0C4A6E;
        color: #F0F9FF;
    }

    &.light-theme {
        background-color: #F0F9FF;
        color: #0C4A6E;
    }
`

export const StyledHeader = styled.header`
    height: 6rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;

    &.light-theme {
        background-color: #E0F2FE;
        color: #0C4A6E;
    }

    &.dark-theme {
        background-color: #075985;
        color: #E0F2FE;
        
    }

    h1 {
        margin: 0;
    }
`

export const StyledButton = styled.button`
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    font-weight: 700;
    padding: 9px 17px;
    border-radius: 6px;
    line-height: 24px;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-top: 1rem;

    &.dark-theme {
        border: 1px solid #F0F9FF;
        background-color: #0C4A6E;
        color: #F0F9FF;
    }

    &.light-theme {
        border: 1px solid #0C4A6E;
        background-color: #F0F9FF;
        color: #0C4A6E;
    }
    
    &:focus {
        outline: none;
    }
`