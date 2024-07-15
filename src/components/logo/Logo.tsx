import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";



export const Logo = () => {
    return (
        <StyledLink1>
            <a href="#">
                <Icon iconId={'vector'} width={'40px'} height="30px" viewBox="0 0 30 30"/>
            </a>
            <a href="#">
                <Icon iconId={'twitter'} width={'40px'} height="30px" viewBox="0 0 30 30"/>
            </a>
            <a href="https://www.linkedin.com/in/alex-cheremnyh-568a04273/">
                <Icon iconId={'linkedin'} width={'40px'} height="30px" viewBox="0 0 30 30"/>
            </a>

        </StyledLink1>


    );
};

const StyledLink1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        position: relative;
        text-decoration: none;
    }

    a::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid transparent;
        transition: .2s ease-in-out;
    }

    a:hover::before {
        border-image: repeating-linear-gradient(${props=> props.theme.colors.gradiets.color1}, ${props=> props.theme.colors.gradiets.color2}) 1;
    }
`;




