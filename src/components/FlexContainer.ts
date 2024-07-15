import styled from "styled-components";

type FlexContainerPropsType = {
    direction?: string
    justify?: string
    along?: string;
    wrap?: string
    marGin?: string
    minHieght?: string
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.along || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    height: 100%;
    margin: ${props => props.marGin};
    min-height: ${props => props.minHieght};

    @media ${props => props.theme.media.tablet} {
        display: flex;
        justify-content: center;
        text-align: center;
    }
`

