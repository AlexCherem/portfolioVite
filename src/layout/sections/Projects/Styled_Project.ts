import styled from "styled-components";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;  
  max-width: 375px;  
  width: 100%;   
  margin-bottom: 10px;
  flex-grow: 1;
  padding: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  margin-bottom: 27px;
  object-fit: cover;  
  //transition: height 2s cubic-bezier(0.420, 0.000, 0.580, 1.000) 200ms;
  //
  //:hover{
  //  height: 100%
  //}
`


const Link = styled.a`
    font-size: 16px;
    padding-left: 10px;
    color: ${props => props.theme.colors.link};
    target: "_blank"
`

const Title = styled.h2`  
  text-align: center;
  font-weight: 700;
  line-height: 26px;
  color:${props => props.theme.colors.textSecondary};
`

const Text = styled.div`
  width: 314px;
  height: 130px;    
  margin: 17px 32px 12px 29px;
    color:${props => props.theme.colors.text};
`

const TextData = styled.p`
  text-align: left;
  font-size: 18px;
`

const StyledP = styled.p`
  font-size: 14px;
  line-height: 26px; 
  margin-bottom: 21px;
    color: ${props=> props.theme.colors.text}
`

const DivIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 314px;
`

const IconsLink = styled.div`
  display: inline-block;
  width: 135px;    
`

export const S = {
    Project,
    Image,
    Link,
    Title,
    Text,
    TextData,
    StyledP,
    DivIcon,
    IconsLink
}