import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #E5E7EB;
    color: #4B5563;
    border: 1px solid #6B7280;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    font-weight: 700;
    padding: 9px 17px;
    border-radius: 6px;
    line-height: 24px;
    display: flex;
    align-items: center;

    &:focus {
        outline: none;
    }

    .button-sm {
        padding: 7px 11px;
        font-size: 12px;
    }

    .button-lg {
        padding: 13px 25px;
    }

    .button-success {
        color: #047857;
        background-color: #ECFDF5;
        border-color: #047857;
    }
    
    .button-warning {
        color: #FBBF24;
        background-color: #FFFBEB;
        border-color: #FBBF24;
    }
    
    .button-danger {
        color: #F87171;
        background-color: #FEF2F2;
        border-color: #F87171;
    }

    .menu-button {
        background-color: white;
    }
`

export const StyledMenuItem = styled.div`
    color: #4B5563;
    padding: .75rem;
    cursor: pointer;
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    &:hover {
        background-color: whitesmoke;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #6B7280;
    }
`

export const StyledMenuDropdown = styled.div`
    position: absolute;
    left: 0;
    margin-top: 3px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 6px;
    background-color: white;
`

export const StyledMenu = styled.div`
    position: relative;
    display: inline-block;
`