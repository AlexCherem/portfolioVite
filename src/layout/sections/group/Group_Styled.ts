import styled from "styled-components";


// styled group
const Description = styled.div`
  margin-bottom: 30px;
`
const WrapperContainer = styled.div`
  max-width: 704px;
  height: auto;
  position: relative;
  

  &::after{
    content:  "";
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: grey;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
  
`


const DescriptionBox = styled.div`
  display: inline-block;
  max-width: 600px;
  height: auto;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  width: 100%;
  
  
`

const DivBox = styled.div`
  max-width: 300px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 704px;
  max-height: 28px;
  margin-bottom: 10px;
 
  
`

const Button = styled.button`
  width: 84px;
  height: 24px;
  border-radius: 10px;
  background-color: aquamarine;
`

const Span = styled.div`
text-align: center;
`

// styled groups
const TitleGroup = styled.div`
  max-width: 350px;
  height: auto;
  margin-bottom: 40px;
`
const Title1Group = styled.div`
  max-width: 550px;
  height: auto;
  margin: 38px 0;
`

const Groups= styled.section`
  display: flex;
  min-height: auto;
  margin: 0 auto; 
  
  
`

const SectionParagraph = styled.div`
  max-width: 708px;
  width: 100%;
`



export const S ={
    Description,
    WrapperContainer,
    Box,
    DescriptionBox,
    DivBox,
    Title,
    Button,
    Span,
    TitleGroup,
    Title1Group,
    Groups,
    SectionParagraph
}
