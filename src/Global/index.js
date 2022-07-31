// import { css } from '@emotion/react';
import styled from '@emotion/styled';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px


export const FlexBox = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    @media (max-width: 600px){
        justify-content: center;
    }
    @media (max-width: 900px){
        justify-content: center;
    }
`
export const FlexBoxReverse = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 600px){
        justify-content: center;
    }
    @media (max-width: 900px){
        justify-content: center;
    }
`

export const ThemeInput = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    box-sizing: border-box;
    max-width: 365px;

    border-radius: 8px;
    background: #F5F5F5;
    border: 2px solid #E0E0E0;
    padding: 10px;

    &:hover {
        border: 2px solid #333333;
        border-radius: 10px;
    }

    input {
        border: none;
        width: 60%;
        background: #F5F5F5;
        &:focus {
            outline: none;
        }
    }
`

export const ThemeButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 0.4rem;
    font-weight: ${(props) => props.fontWeight | 600};

    height: 40px;
    width: 100%;
    max-width: 100px;
    padding: 1rem;

    cursor: pointer;

    background-color: #27AE60;
    border: 2px solid #27AE60;
    border-radius: 8px;
    color: #fff;
    transition: .4s;

    &:hover {
        background-color: #93D7AF;
        border: 2px solid #93D7AF;
        color: #27AE60;
    }
`