import styled from "styled-components";
import {theme} from "@/styles/Theme";

const MenuItems = styled.div`
  display: inline-block;  
  @media screen and (max-width: 520px){
    display: none;
  }
    
`


const Footer = styled.footer`
    margin: 0 auto;
    min-height: 40vh;
    background-color: ${props => props.theme.colors.bGround};
`
const FooterSpan = styled.div`
  display: inline-block;
  text-align: center;
  align-items: center;
  color: ${props => props.theme.colors.textSecondary};

  span {
    text-transform: uppercase;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(100deg, ${theme.colors.gradiets.color1}, ${theme.colors.gradiets.color2});
  }
`


const WrapperFooter1 = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 1px solid grey;
    padding-top: 30px;
    //&::before {
    //    content: "";
    //    display: inline-block;
    //    width: 100%;
    //    height: 2px;
    //    background-color: grey;
    //    position: absolute;
    //    bottom: -10px;
    //    left: 0;
    //}

    @media screen and (max-width: 966px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
    }

`
const LinkSvg = styled.div`
  max-width: 600px;
  height: auto;  
  display: flex;
  align-content: center;
  align-items: center;
`
const LinkSvg1 = styled.div`  
  max-width: 600px;
  width: 100%;
  height: auto;  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const S = {
    MenuItems,
    Footer,
    FooterSpan,
    WrapperFooter1,
    LinkSvg,
    LinkSvg1
}