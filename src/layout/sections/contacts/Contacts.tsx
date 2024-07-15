import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "src/components/SectionTitle";
import {Container} from "src/components/Container";
import {theme} from "src/styles/Theme"
import {font} from "src/styles/Common";
import {ContactsForm} from "src/layout/sections/contacts/contacts-form/ContactsForm";
import {TelegramIcon} from "src/assets/telegram";

export const Title: React.FC = () => {
    return (
        <StyledTitle id={'Contact'}>
            <Container>
                <SectionTitle fontSize={"58px"}>Contact</SectionTitle>
                <ContactTitle href={'https://t.me/Alex4erem'} target={'_blank'}>
                    <div>
                        For any questions please text me:
                        <IconWrapper>
                            <MyTelegramIcon />
                        </IconWrapper>
                    </div>
                </ContactTitle>
                <StyledSpan>
                    <Link>alex140215al@gmail.com </Link>
                </StyledSpan>
                <ContactsForm/>
            </Container>
        </StyledTitle>
    );
};

const StyledTitle = styled.section`
    min-height: 80vh;
    margin: 0 auto;
    text-align: center;
    background-color: ${props => props.theme.colors.bGround};
`
const StyledSpan = styled.h3`
    ${font({weight: 100, Fmax: 36, Fmin: 36})}
`
const Link = styled.a`
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(100deg, ${theme.colors.gradiets.color1}, ${theme.colors.gradiets.color2});
    @media screen and (max-width: 475px){
        font-size:  25px;
        background-image: linear-gradient(100deg, ${theme.colors.gradiets.color1}, ${theme.colors.gradiets.color2});
    }
`

const MyTelegramIcon = styled(TelegramIcon)`
  position: absolute;
  margin-top: 1px;
  min-height: 26px;
  min-width: 26px;
  color: ${props => props.theme.colors.textSecondary};
`

const ContactTitle = styled.a`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 22px;


  &:hover {
    color: ${props => props.theme.colors.text};

    ${MyTelegramIcon} {
      color: ${props => props.theme.colors.text};
    }
  }
`
const IconWrapper = styled.span`
  margin: 0 35px 0 10px;
`
