import styled from "styled-components";

type SectionParagraphProps = {
    textAling?: string
    fontSize?: string
    marginBottom?: string
}
export const SectionParagraph = styled.p<SectionParagraphProps>`
  text-align: ${props => props.textAling || "center"};  
  font-size: ${props=>props.fontSize};
  margin-bottom: ${props=> props.marginBottom};
  
`