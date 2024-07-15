import React from 'react';
import myPhoto  from "@/assets/images/portfolio.png"
import styled from "styled-components";
import {FlexContainer} from "@/components/FlexContainer";
import {Container} from "@/components/Container";
import {font} from "@/styles/Common";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <BoxMenu id={"Home"}>
            <Container>
                <FlexContainer along="center" justify="space-between" wrap={"wrap"}>
                    <StyledH1>

                        Hi 👋,<br/>
                        My name is<br/>
                        <span><Typewriter
                            options={{
                                strings: ['Alex Cherem'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}/>
                        </span>
                        A WEB DEVELOPER
                    </StyledH1>
                        <StyledPhoto>
                            <Photo src={myPhoto} alt=""/>
                        </StyledPhoto>
                </FlexContainer>
            </Container>
        </BoxMenu>
    );
};


const Photo = styled.img`
  width: 100%;  
  height: 100%;  
  border-radius: 50%;
  object-fit: cover; 

  @media ${props=> props.theme.media.mobile}{
    width: 290px;
    height: 290px;
    aspect-ratio: 1/1;    
 }
  
`
const StyledPhoto = styled.div`  
  position: relative;
  width: 349px;
  height: 349px;  
  //margin: 30px;
  border-radius: 10px;
  padding: 3px;
  

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::after{
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(360deg, #00C0FD, #E70FAA);
    border-radius: 50%;    
    z-index: -1;
    
   
    
    @media ${props=> props.theme.media.mobile}{
      width: 300px;
      height: 300px;      
    }
  }
  
`

const StyledH1 = styled.h1`
    ${font({weight: 700, Fmax: 58, Fmin: 36})}
    padding-left: 20px;
    letter-spacing: -1px;
    color: ${props=> props.theme.colors.name};

    span {
        text-transform: uppercase;
        color: transparent;
        -webkit-background-clip: text;
        background-image: linear-gradient(10deg, ${props => props.theme.colors.gradiets.color1}, ${props => props.theme.colors.gradiets.color2});
    }
  
`

const BoxMenu = styled.section`
    margin: 0 auto;
    padding-top: 320px;
    background-color: ${props => props.theme.colors.bGround};
    min-height: 90vh;
`














